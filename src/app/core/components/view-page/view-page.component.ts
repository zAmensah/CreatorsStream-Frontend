import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
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
  subloading: boolean = false;

  user: any;

  title!: String;
  reference = 'rtef';
  currency = 'GHS';

  constructor(
    private route: ActivatedRoute,
    private coreService: CoreService,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.vidId = this.route.snapshot.params['id'];
    this.isLogged = localStorage.getItem('_rft');
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((res) => {
      this.user = res;
    });

    this.coreService.singleVideo(this.vidId).subscribe((res: any) => {
      this.details$ = res.watchVideo;
      this.sub = res.subscribed;
      // console.log(this.details$);
    });
  }

  channelSub() {
    this.subloading = true;
    if (this.isLogged) {
      this.coreService
        .channelSubscription({
          amount: this.details$.channel.charge,
          userId: this.details$.user,
          channelId: this.details$.channel._id,
        })
        .subscribe(
          (res) => {
            console.log('Subscribed to channel');
            this.subloading = false;
            window.location.reload();
            this.snackbar.open('Successfully Subscribed to channel', 'OK', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
          },
          (err) => {
            // console.log('Error subscribing to channel');
            // console.log(err);

            this.snackbar.open('Error subscribing to channel', 'OK', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
            this.subloading = false;
          }
        );
    } else {
      // console.log('Not logged in');

      this.snackbar.open('Please login to subscribe', 'OK', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
      this.subloading = false;
    }
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
    // verify payment type
  }

  paymentCancel() {
    console.log('payment failed');
  }
}
