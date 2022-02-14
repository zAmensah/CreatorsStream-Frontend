import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ViewPageComponent } from './components/view-page/view-page.component';
import { SharedModule } from '../shared/modules/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ViewPageComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
})
export class CoreModule {}
