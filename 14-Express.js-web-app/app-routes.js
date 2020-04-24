var express = require('express')
var app = express()

// define routes here..
app.get('/', function(req, res) {
  res.send(`
    <html>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
  `)
})

app.post('/submit-data', function(req, res) {
  res.send('Post Requrest')
})

app.put('/update-data', function(req, res) {
  res.send('PUT Request')
})

app.delete('/delete-data', function(req, res) {
  res.send('DELETE Requrest')
})

var server = app.listen(5000, function() {
  console.log('Node server is running at http://localhost:5000')
})