import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  constructor(private http: HttpClient) {}

  initPayment(body: String) {
    return this.http
      .post(`${environment.basedUrl}` + '/payment/init', body)
      .pipe(shareReplay());
  }
}
