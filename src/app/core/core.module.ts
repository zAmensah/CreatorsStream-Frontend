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
import { AboutComponent } from './components/about/about.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    HomeComponent,
    ViewPageComponent,
    NavbarComponent,
    FooterComponent,
    SubscriptionsComponent,
    ChannelComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    Angular4PaystackModule.forRoot(environment.paystackConfig),
  ],
})
export class CoreModule {}
