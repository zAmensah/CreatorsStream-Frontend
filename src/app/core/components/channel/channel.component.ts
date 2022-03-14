import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChannels } from 'src/app/models/channels';
import { IVideos } from 'src/app/models/videos';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
})
export class ChannelComponent implements OnInit {
  channelID!: string;
  channelVideos!: IChannels;

  constructor(private coreService: CoreService, private route: ActivatedRoute) {
    this.channelID = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getChannelVideos();
  }

  getChannelVideos() {
    this.coreService.singleChannel(this.channelID).subscribe((res: any) => {
      this.channelVideos = res.channel;
      console.log(this.channelVideos);
    });
  }
}
