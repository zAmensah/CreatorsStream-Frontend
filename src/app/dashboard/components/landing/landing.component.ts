import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IChannels } from 'src/app/models/channels';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  title!: String;
  reference = 'rtef';
  currency = 'GHS';

  channelDetails = [];

  constructor(
    public authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfully';
    console.log(this.title, ref);
    // verify payment type
  }

  paymentCancel() {
    console.log('payment failed');
  }

  ngOnInit() {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    this.dashboardService.channels$.subscribe((res: any) => {
      this.channelDetails = res;
    });
  }
}
