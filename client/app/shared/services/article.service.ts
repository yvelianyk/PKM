import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';
import { ConfigService } from '../../core/config.service';

import { Article } from '../models/article';

@Injectable()
export class ArticleService {

    private articlesUrl = ConfigService.serverApiUrl + 'articles';
    private privateArticlesUrl = ConfigService.serverApiUrl + 'private';

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http, private authHttp: AuthHttp) { }

    getArticles(): Promise<Article[]> {
        return this.http.get(this.articlesUrl)
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }

    getPrivateArticles(): Promise<Article[]> {
        return this.authHttp.get(this.privateArticlesUrl)
            .toPromise()
            .then(response => response.json() as Article[])
            .catch(this.handleError);
    }

    getArticle(id: string): Promise<Article> {
        return this.http.get(this.articlesUrl + '/' + id)
            .toPromise()
            .then(response => response.json() as Article)
            .catch(this.handleError);;
    }
}