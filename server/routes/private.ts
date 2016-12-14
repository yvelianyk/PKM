import { Router, Response, Request } from "express";
import * as jwt from 'express-jwt';
import * as requestModule from 'request';
import { secretConfig } from '../secret-config';

import { AuthService } from '../services/authService';

const articlesPrivateRouter: Router = Router();
const authCheck = jwt({
  secret: secretConfig.secret,
  audience: secretConfig.audience
});

const articles = [
    {
        id: 11,
        title: 'Проповідь на 20 неділю по ЗСД',
        subtitle: 'Недільна проповідь у храмі Святих Кирила і Методія у Крихівцях',
        content: `<p>1Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.</p>

                <p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>

                <p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p>

                <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>

                <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p>

                <h2 class="section-heading">The Final Frontier</h2>

                <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>

                <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>

                <blockquote>The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>

                <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>
`,
        created: 123,
        updated: 123,
        author: 'О. Йосафат Бойко'
    }
];

articlesPrivateRouter.get("/", authCheck, (request: Request, response: Response) => {
  AuthService.isAdmin(request.headers.authorization.split(' ')[1]).then((isAdmin) => {
      if(isAdmin){
          response.json(articles);
      } else {
        response.sendStatus(401).end();
      }            
  })  
});

export { articlesPrivateRouter };