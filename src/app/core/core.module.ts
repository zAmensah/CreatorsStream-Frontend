import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { ChannelComponent } from './components/channel/channel.component';

@NgModule({
  declarations: [HomeComponent, ViewPageComponent, NavbarComponent, FooterComponent, SubscriptionsComponent, ChannelComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
})
export class CoreModule {}
