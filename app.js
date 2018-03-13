'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const routes = require('./routes')
module.exports = app; // this line is only used to make testing easier.
const morgan = require('morgan')

app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/', routes)
// remember to plug in your router and any other middleware you may need here.

if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.
