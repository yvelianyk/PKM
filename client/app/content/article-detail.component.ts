import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Article } from '../shared/models/article';
import { ArticleService } from '../shared/services/article.service';

@Component({
    templateUrl: './app/content/article-detail.component.html',
    providers: [ArticleService]
})

export class ArticleDetailComponent implements OnInit {

    constructor(
        private articleService:ArticleService,
        private route: ActivatedRoute) {
    }

    article: Article;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.articleService.getArticle(+params['id']))
            .subscribe(article => {
                this.article = article
            });
    }

}