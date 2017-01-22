import { Response, Request } from "express";
import { ArticleController } from "../controllers/articleController";
import { IArticle } from "../models/articleModel";

const newArticle = function (request: Request, response: Response, next) {
  ArticleController.create(request.body.article).then((res) => {
    response.json(res);
  });
}

export { newArticle }