import { IChannels } from './../../../models/channels';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { last, concatMap, tap, finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IVideos } from 'src/app/models/videos';
import { DashboardService } from '../../services/dashboard.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css'],
})
export class AddVideoComponent implements OnInit {
  percentageLink$!: Observable<number | null | undefined>;
  link!: string;

  percentageCover$!: Observable<number | null | undefined>;
  cover!: string;

  coverLoading: boolean = false;
  videoLoading: boolean = false;

  videoForm!: FormGroup;
  user: any;

  channels!: IChannels[];

  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private authService: AuthService,
    private messageService: MessagesService,
    private storage: AngularFireStorage,
    private router: Router
  ) {
    this.videoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      channel: ['', Validators.required],
      cover: [''],
      link: [''],
    });
  }

  uploadCover(event: any) {
    this.coverLoading = true;
    const file = event.target.files[0];
    const filePath = `video/cover-image/${file.name}`;

    const task = this.storage.upload(filePath, file);
    this.percentageCover$ = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(
        last(),
        concatMap(() => this.storage.ref(filePath).getDownloadURL()),
        tap((url) => {
          this.cover = url;
          this.coverLoading = false;
        })
      )
      .subscribe();
  }

  uploadVideo(event: any) {
    this.videoLoading = true;
    const file: File = event.target.files[0];
    const filePath = `video/${file.name}`;

    const task = this.storage.upload(filePath, file);
    this.percentageLink$ = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(
        last(),
        concatMap(() => this.storage.ref(filePath).getDownloadURL()),
        tap((url) => {
          (this.link = url), (this.videoLoading = false);
        })
      )
      .subscribe();
  }

  onSubmit() {
    const val = this.videoForm.value;
    this.loading = true;

    this.dashboardService.addVideo(val).subscribe(
      (res: any) => {
        this.router.navigateByUrl(`/channels/${res.channel._id}`);
      },
      (err) => {
        this.messageService.error(err.error.message);
        this.loading = false;
      }
    );
  }

  // getChannels() {
  //   this.dashboardService.getChannels().subscribe((res: any) => {
  //     this.channels = res['userChannel'];
  //     console.log(this.channels);
  //   });
  // }

  ngOnInit(): void {}
}
