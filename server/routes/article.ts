import { Router, Response, Request } from "express";
import { ArticleController } from "../controllers/articleController";

const articleRouter: Router = Router();

//TODO: refactor routing for using single router object
articleRouter.get("/", (request: Request, response: Response) => {
//   console.log(request.params.id);
//   ArticleController.findOne().then((articles) => {
//       response.json(articles);
//   });  
});

export { articleRouter };