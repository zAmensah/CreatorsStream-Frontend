import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  message = '';
  messageType = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
  }

  error(message: string) {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message: string) {
    this.messageType = 'success';
    this.message = message;
  }
}
