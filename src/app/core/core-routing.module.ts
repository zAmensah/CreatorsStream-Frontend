import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './components/channel/channel.component';
import { HomeComponent } from './components/home/home.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { ViewPageComponent } from './components/view-page/view-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watch/u/:id', component: ViewPageComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'channel/:id', component: ChannelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
