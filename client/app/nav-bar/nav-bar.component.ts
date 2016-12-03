import { Component } from '@angular/core';
// First and foremost we'll include our authentication service
import { AuthService } from '../core/auth/auth.service';

@Component({
    selector: 'nav-bar-component',
    templateUrl: './app/nav-bar/nav-bar.component.html',
})

export class NavBarComponent {
    constructor(private authService: AuthService){}
}
