var express = require('express')
var app = express()

// set view engine
app.set('view engine', 'jade')

// app.set('views', 'MyViews')

app.get('/', function(req, res) {
  res.render('sample')
})

app.listen(5000, function() {
  console.log('Node server is running at http://localhost:5000')
})