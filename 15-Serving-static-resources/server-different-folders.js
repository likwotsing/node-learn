var express = require('express')
var app = express()

// setting middleware
app.use(express.static('public'))

// serves all the request which includes /images in the url from Images folder.
// http://localhost:5000/images/apple.png
app.use('/images', express.static('Images'))

var server = app.listen(5000, function() {
  console.log('Node server is running at http://localhost:5000')
})
