import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';

import { ArticleDetailComponent } from './content/article-detail.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'articles',
        component: ContentComponent
    },
    {
        path: 'articles/:id',
        component: ArticleDetailComponent
    },
    {
        path: '',
        redirectTo: '/articles',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
