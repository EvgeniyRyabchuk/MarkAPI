import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {NotifierService} from "angular-notifier";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private notifyService: NotifierService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('token'))
    {
      return true;
    }
    else
    {
      this.notifyService.notify('error', 'Войдите в аккаунт')
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}
