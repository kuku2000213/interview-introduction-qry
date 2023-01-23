const express = require('express');
const logger = require('morgan');

const introductionsRouter = require('./routes/introductions');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1/introductions', introductionsRouter);

module.exports = app;
