import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'admin',
                component: AdminComponent
            },
            {
                path: 'home',
                component: ContentComponent
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [
        AppComponent,
        AdminComponent,
        NavBarComponent,
        ContentComponent,
        FooterComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}