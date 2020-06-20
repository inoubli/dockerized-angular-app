import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
  
    constructor(private userService : UserService,private router : Router){}
  
    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.userService.isLoggedIn()) {
          this.router.navigateByUrl('/security');
          this.userService.deleteToken();
          return false;
        }
      return true;
    }
  }