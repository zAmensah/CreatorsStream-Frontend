import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../interface/auth';
import { map, shareReplay, tap } from 'rxjs/operators';

const AUTH_DATA = 'auth_data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subject = new BehaviorSubject<IUser>(null!);
  user$: Observable<IUser> = this.subject.asObservable();

  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));

    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }

  login(body: any): Observable<IAuthResponse> {
    return this.http
      .post<IAuthResponse>(`${environment.basedUrl}/login`, body)
      .pipe(
        tap((user: IAuthResponse) => {
          this.subject.next(user.user);
          this.tokenService.setToken(user.token);
          localStorage.setItem(AUTH_DATA, JSON.stringify(user.user));
        }),
        shareReplay()
      );
  }

  register(body: any): Observable<IAuthResponse> {
    return this.http
      .post<IAuthResponse>(`${environment.basedUrl}/register`, body)
      .pipe(
        tap((user) => {
          this.subject.next(user.user);
          this.tokenService.setToken(user.token);
          localStorage.setItem(AUTH_DATA, JSON.stringify(user.user));
        }),
        shareReplay()
      );
  }

  forgot(email: string): Observable<IAuthResponse> {
    return this.http.put<IAuthResponse>(
      `${environment.basedUrl}/forgot-password`,
      email
    );
  }

  reset(body: any): Observable<IAuthResponse> {
    return this.http.put<IAuthResponse>(
      `${environment.basedUrl}/reset-password`,
      body
    );
  }

  logout() {
    this.subject.next(null!);
    this.tokenService.deleteToken();
    localStorage.removeItem(AUTH_DATA);
  }
}
