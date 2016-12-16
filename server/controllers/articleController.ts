import * as express from 'express';
import * as mongoose from 'mongoose';
import { ArticleModel, IArticle } from '../models/articleModel'

export class ArticleController {

    static getAll(): Promise<IArticle[]> {
        return new Promise((resolve, reject) => {
            ArticleModel.find((err, articles) => {
                if (err) {
                    reject(err);
                };
                resolve(articles);    
            });        
        });
    }

    static findOne(id: string): Promise<IArticle> {
        return new Promise((resolve, reject) => {
            ArticleModel.findById(id, (err, article) => {
                if (err) {
                    reject(err);
                };
                resolve(article);    
            });        
        });
    }

    static create(article: IArticle): Promise<Object> {
        return new Promise((resolve, reject) => {
            let newArticle = new ArticleModel(article);
            newArticle.save((err)=>{
                if (err) {
                    reject(err);
                };
                resolve({succes: true}); 
            });       
        });
    }    

}
