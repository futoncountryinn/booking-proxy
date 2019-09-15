"use strict";

var express = require('express');

var morgan = require('morgan');

var path = require('path');

var app = express();
var port = 3000;

var cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express["static"](path.join(__dirname, 'public')));
app.listen(port, function () {
  console.log("server running at: ".concat(port));
});
