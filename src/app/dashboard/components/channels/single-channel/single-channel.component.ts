import { IChannels } from './../../../../models/channels';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';

@Component({
  selector: 'app-single-channel',
  templateUrl: './single-channel.component.html',
  styleUrls: ['./single-channel.component.css'],
})
export class SingleChannelComponent implements OnInit {
  channelId: any;
  channelVideos!: any;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) {
    this.channelId = this.route.snapshot.params['id'];
  }

  singleChannel() {
    this.dashboardService
      .singleChannel(this.channelId)
      .subscribe((res: any) => {
        this.channelVideos = res['channel'];
      });
  }

  ngOnInit(): void {
    this.singleChannel();
  }
}
