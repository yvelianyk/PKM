import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
// Import our authentication service
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    // If user is not logged in we'll send them to the homepage 
    if (!this.auth.loggedIn()) {
      this.router.navigateByUrl('/content/articles');
      return false;
    }
    return true;
  }

  isAdmin() {
    // If user is not logged in we'll send them to the homepage 
    if (!this.auth.isAdmin()) {
      this.router.navigateByUrl('/content/articles');
      return false;
    }
    return true;
  }

}