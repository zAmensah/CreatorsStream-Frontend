import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IVideos } from 'src/app/models/videos';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css'],
})
export class ViewPageComponent implements OnInit {
  details$!: IVideos;
  vidId!: string;

  sub: boolean = false;
  isLogged!: string | null;

  constructor(
    private route: ActivatedRoute,
    private coreService: CoreService,
    private snackbar: MatSnackBar
  ) {
    this.vidId = this.route.snapshot.params['id'];
    this.isLogged = localStorage.getItem('_rft');
  }

  ngOnInit(): void {
    this.coreService.singleVideo(this.vidId).subscribe((res: any) => {
      this.details$ = res.watchVideo;
      this.sub = res.channelSub;
    });
  }

  channelSub(id: string) {
    this.sub = true;
    if (this.isLogged) {
      this.coreService.channelSub(id).subscribe((res) => {});
    } else {
      this.snackbar.open('Please login to subscribe to channel', 'OK', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
      this.sub = false;
    }
  }
}
