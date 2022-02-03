import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('_rft');
    console.log(token);

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', token),
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
