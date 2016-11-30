'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');
const bodyParser = require('body-parser');

const articles = require('./articles');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/api/articles',function(req, res) {
    res.json(articles);
});


app.listen(3002);
console.log('Listening on localhost:3001');