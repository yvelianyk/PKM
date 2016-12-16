import { Router, Response, Request } from "express";
import { ArticleController } from "../controllers/articleController";

const articlesRouter: Router = Router();

articlesRouter.get("/", (request: Request, response: Response) => {
  ArticleController.getAll().then((articles) => {
      response.json(articles);
  });  
});

export { articlesRouter };