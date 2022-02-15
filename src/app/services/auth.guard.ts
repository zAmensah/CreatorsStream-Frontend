import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

const TOKEN = '_rft';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  token: any;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.token = localStorage.getItem(TOKEN);

    if (this.token) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
