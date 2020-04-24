var express = require('express')
var app = express()

// setting middleware
// app.use(express.static(__dirname + 'public')) // Serves resources from public folder

// http://localhost:5000/star.jpg
app.use(express.static('public')) // Serves resources from public folder

var server = app.listen(5000, function() {
  console.log('Node server is running at http://localhost:5000')
})
