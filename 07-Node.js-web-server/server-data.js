// 1. Import Node.js core module
var http = require('http')

// 2. creating server
var server = http.createServer(function(req, res) {
  // handle incoming requests here..
  if (req.url == '/data') {
    // set response header
    res.writeHead(200, {
      // 'Content-Type': 'text/html'
      'Content-Type': 'application/json'
    })

    // set response content
    res.write(JSON.stringify({
      message: 'Hello World'
    }))
    res.end()
  }
})

// 3. listen for any incoming requests
server.listen(5000)

console.log('Node.js web server at port 5000 is running..')