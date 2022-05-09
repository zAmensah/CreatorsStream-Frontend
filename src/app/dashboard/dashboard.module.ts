import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { SingleChannelComponent } from './components/channels/single-channel/single-channel.component';
import { CreateChannelComponent } from './components/channels/create-channel/create-channel.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { DsNavbarComponent } from './layouts/ds-navbar/ds-navbar.component';
import { DsFooterComponent } from './layouts/ds-footer/ds-footer.component';
import { DashboardComponent } from './dashboard.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    LandingComponent,
    ChannelsComponent,
    SettingsComponent,
    AddVideoComponent,
    SingleChannelComponent,
    CreateChannelComponent,
    DsNavbarComponent,
    DsFooterComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatProgressBarModule,
    Angular4PaystackModule.forRoot(environment.paystackConfig)
  ],
})
export class DashboardModule { }
