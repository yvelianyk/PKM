import { Response, Request } from "express";
import { ArticleController } from "../controllers/articleController";

const getArticle = function (request: Request, response: Response, next) {
  ArticleController.findOne(request.params.id).then((articles) => {
    response.json(articles);
  });
}

export { getArticle }