var http = require('http')

var nStatic = require('node-static')

var fileServer = new nStatic.Server('./public')

http.createServer(function(req, res) {
  fileServer.serve(req, res)
}).listen(5000)

// http://localhost:5000/apple.png
// http://localhost:5000/star.jpg
// http://localhost:5000/Images/apple.png