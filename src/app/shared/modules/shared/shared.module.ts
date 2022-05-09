import { LoadingComponent } from './../../components/loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from '../../components/messages/messages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { AvatarModule } from 'ngx-avatar';



@NgModule({
  declarations: [MessagesComponent, LoadingComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [
    MessagesComponent,
    ReactiveFormsModule,
    LoadingComponent,
    MaterialModule,
    SpinnerComponent,
    AvatarModule,
  ],
})
export class SharedModule { }
