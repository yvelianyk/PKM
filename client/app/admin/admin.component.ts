import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { ConfigService } from '../core/config.service';

import { Article } from '../shared/models/article';
import { ArticleService } from '../shared/services/article.service';

@Component({
    selector: 'admin-component',
    templateUrl: './app/admin/admin.component.html',
    providers: [ArticleService]
})

export class AdminComponent {
    articles: Article[];

    constructor(private articleService:ArticleService) {}

    getArticles():void {
        this.articleService.getPrivateArticles().then(articles => this.articles = articles);
    }

    ngOnInit():void {
        this.getArticles();
    }
}
