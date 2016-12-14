import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

import { ConfigService } from '../config.service';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // We'll use the Auth0 Lock widget for capturing user credentials
  lock = new Auth0Lock(ConfigService.clientId , ConfigService.domain);

  constructor(private router: Router) {
    // We'll listen for an authentication event to be raised and if successful will log the user in.
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
        } 
        localStorage.setItem('profile', JSON.stringify(profile));
      });

      this.lock.hide();
    });
  }

  // This method will display the lock widget
  login() {
    this.lock.show();
  }

  // This method will log the use out
  logout() {
    // To log out, just remove the token and profile
    // from local storage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    // Send the user back to the public deals page after logout
    this.router.navigateByUrl('/content/articles');
  }

  // Finally, this method will check to see if the user is logged in.
  // We'll be able to tell by checking to see if they have a token and whether that token is valid or not.
  loggedIn() {
    return tokenNotExpired();
  }

  // Finally, this method will check to see if the user is logged in.
  // We'll be able to tell by checking to see if they have a token and whether that token is valid or not.
  isAdmin() {    
    return tokenNotExpired() &&
      JSON.parse(localStorage.getItem('profile')) &&
      JSON.parse(localStorage.getItem('profile')).app_metadata.roles[0] === 'admin';
  }
}