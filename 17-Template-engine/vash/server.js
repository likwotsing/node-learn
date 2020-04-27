var express = require('express')
var app = express()

app.set('view engine', 'vash')

app.get('/', function(req, res) {
  // res.render('index', {
  res.render('index-layout', {
    title: 'Vash Template Demo',
    content: 'This is dummy paragraph.'
  })
})

app.listen(5000, function() {
  console.log('Node server is running at http://localhost:5000');
})