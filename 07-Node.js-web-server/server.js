// 1. Import Node.js core module
var http = require('http')

// 2. creating server
var server = http.createServer(function(req, res) {
  // handle incoming requests here..
  if (req.url == '/') {
    // set response header
    res.writeHead(200, {
      // 'Content-Type': 'text/html'
      'Content-Type': 'json'
    })

    // set response content
    res.write(`
      <html>
        <body>
          <p>This is home Page.</p>
        <body>
      </html>
    `)
    res.end()
  } else if (req.url == '/student') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(`
      <html>
        <body>
          <p>This is student Page.</p>
        </body>
      </html>
    `)
    res.end()
  } else if (req.url == '/admin') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(`
      <html>
        <body>
          <p>This is admin Page.</p>
        </body>
      </html>
    `)
    res.end()
  } else {
    res.end('Invalid Request!')
  }
})

// 3. listen for any incoming requests
server.listen(5000)

console.log('Node.js web server at port 5000 is running..')