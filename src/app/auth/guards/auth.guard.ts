// auth.guard.ts

import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, 
        ActivatedRouteSnapshot, 
        RouterStateSnapshot, 
        Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if (this.authService.authenticated) {
        // let user to go the page
        return true;
      }

      // else part
      this.router.navigateByUrl('/login');

      return false; // stop user visiting a page when guarded
  }
}
