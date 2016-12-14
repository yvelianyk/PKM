import { Component, OnInit } from '@angular/core';

import { Article } from '../../shared/models/article';
import { ArticleService } from '../../shared/services/article.service';

@Component({
    selector: 'content-component',
    templateUrl: './app/content/center/article-list.component.html',
    providers: [ ArticleService ]
})

export class ArticleListComponent implements OnInit {
    articles: Article[];

    constructor(private articleService:ArticleService) {}

    getArticles():void {
        this.articleService.getArticles().then(articles => this.articles = articles);
    }

    ngOnInit():void {
        this.getArticles();
    }


}
