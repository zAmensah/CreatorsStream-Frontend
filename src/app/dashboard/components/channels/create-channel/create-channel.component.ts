import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { last, concatMap, tap } from 'rxjs/operators';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.css'],
})
export class CreateChannelComponent implements OnInit {
  channelForm!: FormGroup;
  loading: boolean = false;

  percentageCover$!: Observable<number | null | undefined>;
  cover!: string;

  percentageLogo$!: Observable<number | null | undefined>;
  logo!: string;

  coverLoading: boolean = false;
  logoLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private storage: AngularFireStorage,
    private messageService: MessagesService,
    private router: Router
  ) {
    this.channelForm = this.fb.group({
      name: ['', Validators.required],
      logo: [''],
      cover: [''],
      about: [''],
    });
  }

  uploadCover(event: any) {
    this.coverLoading = true;
    const file = event.target.files[0];
    const filePath = `/channel/cover-image/${file.name}`;

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

  uploadLogo(event: any) {
    this.logoLoading = true;
    const file = event.target.files[0];
    const filePath = `/channel/logo/${file.name}`;

    const task = this.storage.upload(filePath, file);
    this.percentageLogo$ = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(
        last(),
        concatMap(() => this.storage.ref(filePath).getDownloadURL()),
        tap((url) => {
          this.logo = url;
          this.logoLoading = false;
        })
      )
      .subscribe();
  }

  onSumbit() {
    this.loading = true;
    const val = this.channelForm.value;

    this.dashboardService
      .addChannel({
        name: val.name,
        about: val.about,
        logo: this.logo,
        cover: this.cover,
      })
      .subscribe(
        () => {
          this.router.navigateByUrl('/dashboard/channel/add');
        },
        (err) => {
          this.messageService.error(err.error.message);
          this.loading = false;
        }
      );
  }

  ngOnInit(): void {}
}
