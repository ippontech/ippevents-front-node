'use strict';

var statik = require('statik');
statik({
  port: 8000,
  root: __dirname + '/../app'
});