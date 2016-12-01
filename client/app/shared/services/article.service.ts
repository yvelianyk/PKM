import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Article } from '../models/article';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticleService {

    private articlesUrl = 'http://localhost:3002/api/articles';

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }

    getArticles(): Promise<Article[]> {
        return this.http.get(this.articlesUrl)
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }

    getArticle(id: number): Promise<Article> {
        return this.getArticles()
            .then(articles => articles.find(article => article.id === id));
    }
}