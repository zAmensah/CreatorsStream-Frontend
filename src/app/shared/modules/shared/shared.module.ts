import { LoadingComponent } from './../../components/loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from '../../components/messages/messages.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MessagesComponent, LoadingComponent],
  imports: [CommonModule],
  exports: [MessagesComponent, ReactiveFormsModule, LoadingComponent],
})
export class SharedModule {}
