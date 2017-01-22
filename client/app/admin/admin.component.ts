import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { ConfigService } from '../core/config.service';

import { Article } from '../shared/models/article';
import { ArticleService } from '../shared/services/article.service';

import { Message } from 'primeng/primeng';

@Component({
    selector: 'admin-component',
    templateUrl: './app/admin/admin.component.html',
    providers: [ArticleService]
})

export class AdminComponent {

    constructor(private articleService: ArticleService) { }

    private clearForm(): void {
        this.newArticle = {
            title: '',
            subtitle: '',
            content: '',
            author: ''
        }
    }

    newArticle: Article;

    resMessages: Message[] = [];

    ngOnInit(): void {
        this.clearForm();
    }

    createArticle(): void {
        this.articleService.newArticle(this.newArticle).then((res) => {
            this.clearForm();
            this.resMessages = [];
            this.resMessages.push({
                severity: 'success',
                summary: 'Збережено',
                detail: 'Стаття збережена'
            })
        })

    }
}
