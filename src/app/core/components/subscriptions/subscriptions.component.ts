import { Component, OnInit } from '@angular/core';
import { IChannels } from 'src/app/models/channels';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css'],
})
export class SubscriptionsComponent implements OnInit {
  channels!: IChannels[];

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.getChannels();
  }

  getChannels() {
    this.coreService.userSubscription().subscribe(
      (res: any) => {
        this.channels = res.userSubscripiton;
      },
      (err) => {}
    );
  }
}
