import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { CreateChannelComponent } from './components/channels/create-channel/create-channel.component';
import { LandingComponent } from './components/landing/landing.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'add-video', component: AddVideoComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'channels/:id', component: ChannelsComponent },
  { path: 'channel/add', component: CreateChannelComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
