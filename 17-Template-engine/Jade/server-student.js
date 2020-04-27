var express = require('express')
var app = express()

app.set('view engine', 'jade')

app.get('/', function(req, res) {
  var sql = require('mysql')

  var connection = sql.createConnection({
    user: 'root',
    password: '',
    server: '127.0.0.1',
    database: 'schooldb'
  })

  connection.connect()
  
  connection.query('SELECT * from student', function(error, results, fields) {
    if (error) {
      throw error
    }
    // res.send(results)
    res.render('StudentList', { studentList: results })
  })
  connection.end()
})

app.listen('5000', function() {
  console.log('Node server is running at http://localhost:5000')
})