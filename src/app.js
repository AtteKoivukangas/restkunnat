const express = require('express');
require('express-async-errors');
const cors = require('cors');
const middleware = require('./utils/middleware');

const app = express();
const router = require('./router');
const sendReadmeAsHTML = require('./utils/loadReadme');

app.use(cors());
app.use(express.json());
app.use(middleware.extractFieldsToInclude);
app.use('/favicon.ico', express.static('src/images/favicon.ico'));
app.get('/', sendReadmeAsHTML);
app.use('/', router);
app.use(middleware.unknownEndpoint);

module.exports = app;
