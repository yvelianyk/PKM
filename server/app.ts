'use strict';

import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';
import * as cors from 'cors';
import * as jwt from 'express-jwt';

import { articlesRouter } from "./routes/articles";
import { articlesPrivateRouter } from "./routes/private";

const app: express.Application = express();

app.disable('x-powered-by');

app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors());

app.use('/api/articles', articlesRouter);
app.use('/api/private', articlesPrivateRouter);

export { app }
