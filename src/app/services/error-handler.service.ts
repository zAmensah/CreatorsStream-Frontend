import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from '../shared/services/messages.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(
    private router: Router,
    private messageService: MessagesService
  ) {}

  expireToken() {
    localStorage.clear();
    return this.router.navigateByUrl('/auth/login');
  }

  errorHandler(err: any) {
    if (err.status == 500 || 403) {
      return this.expireToken();
    } else {
      return this.messageService.error(err.error.message);
    }
  }
}
