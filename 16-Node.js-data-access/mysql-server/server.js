var express = require('express')
var app = express()


app.get('/', function(req, res) {
  var mysql = require('mysql')

  // config for your database
  var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'schooldb'
  })
  // connect to your databse
  connection.connect()


  connection.query('SELECT * from student', function(error, results, fields) {
    if (error) {
      throw error
    }
    res.send(results)
  })
  connection.end()
})

var server = app.listen(5000, function() {
  console.log('Server is running at http://localhost:5000')
})