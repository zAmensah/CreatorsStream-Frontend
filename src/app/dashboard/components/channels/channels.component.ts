import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
})
export class ChannelsComponent implements OnInit {
  channels: any;

  constructor(public dashboardService: DashboardService) {}

  ngOnInit(): void {}
}
