import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavBarComponent } from './content/nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './content/footer/footer.component';

// ============================================================================================
// Importing PrimeNG Modules
// ============================================================================================
import { ButtonModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';

import { ArticleListComponent } from './content/center/article-list.component';
import { ArticleDetailComponent } from './content/center/article-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './core/auth/auth.service';
import { AuthGuard } from './core/auth/auth-guard.service';
import { ConfigService } from './core/config.service';

// Init main modules of application
let mainModules = [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ButtonModule
];

// Init primeNg modules of application.
// For adding new modules, add new module to array
let primeNgModules = [
    ButtonModule,
    DataGridModule
];

@NgModule({
    imports: mainModules.concat(primeNgModules),
    declarations: [
        AppComponent,
        AdminComponent,
        NavBarComponent,
        ContentComponent,
        FooterComponent,
        ArticleListComponent,
        ArticleDetailComponent
    ],
    providers: [
        AUTH_PROVIDERS,
        AuthService,
        AuthGuard,
        ConfigService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }