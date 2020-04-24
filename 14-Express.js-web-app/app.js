var express = require('express')
var app = express()

// define routes here..

var server = app.listen(5000, function() {
  console.log('Node server is running at http://localhost:5000')
})