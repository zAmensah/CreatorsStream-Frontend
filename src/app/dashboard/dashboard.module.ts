import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { SingleChannelComponent } from './components/channels/single-channel/single-channel.component';
import { CreateChannelComponent } from './components/channels/create-channel/create-channel.component';

@NgModule({
  declarations: [LandingComponent, ChannelsComponent, SettingsComponent, AddVideoComponent, SingleChannelComponent, CreateChannelComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
