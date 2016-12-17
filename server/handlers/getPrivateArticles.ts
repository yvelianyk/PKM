import { Response, Request } from "express";
import { ArticleController } from "../controllers/articleController";

const getPrivateArticles = function(request: Request, response: Response, next){
  ArticleController.getAll().then((articles) => {
      response.json(articles);
  });
}

export { getPrivateArticles }
