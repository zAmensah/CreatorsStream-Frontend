import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ChannelComponent } from './components/channel/channel.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { WorksComponent } from './components/works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watch/u/:id', component: ViewPageComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'channel/:id', component: ChannelComponent },
  {path: 'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'works', componet:WorksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
