var gzippo = require('gzippo');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
