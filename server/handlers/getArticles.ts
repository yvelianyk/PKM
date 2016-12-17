import { Response, Request } from "express";
import { ArticleController } from "../controllers/articleController";

const getArticles = function(request: Request, response: Response, next){
  ArticleController.getAll().then((articles) => {
      response.json(articles);
  });
}

export { getArticles }