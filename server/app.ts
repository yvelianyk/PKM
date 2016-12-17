'use strict';

import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';
import * as cors from 'cors';
import * as jwt from 'express-jwt';

import { AuthService } from './services/authService';
import { StaticService } from './services/staticService';
import { routes } from "./routes";
import * as handlers from "./handlers";

const app: express.Application = express();
const router: express.Router = express.Router();

app.disable('x-powered-by');

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// ============================================================================================
// Initialization of routes
// ============================================================================================
routes.forEach((route) => {
    let callbacks = [];
    // Wrap each route handler to perform access control:
    callbacks.push((req: express.Request, res: express.Response, next) => {
        AuthService.checkRole(req, route.role).then((access) => {
            if (access.allowed) {
                handlers[route.handler](req, res, next);
            } else {
                res.status(403).send('Forbidden');
            }
        });
    });

    // Check if route role is admin, then check if connection authorized
    // TODO: refactor this part of code (remove extra logic from here)
    route.role === 'admin' ?
        router[route.method](route.path,AuthService.authCheck, callbacks) :
        router[route.method](route.path, callbacks);
});

app.use(router);

// ============================================================================================
// This section of code for providing serving of static client files
// ============================================================================================
StaticService.init(app);

export { app }
