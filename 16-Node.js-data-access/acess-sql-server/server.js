var express = require('express')
var app = express()

app.get('/', function(req, res) {
  var sql = require('mssql')

  // config for your database
  var config = {
    user: 'sa',
    password: '123456',
    server: 'DESKTOP-EDPFMQ6\TEST',
    databse: 'SchoolDB',
    port: 1433
  }

  // connect to your database
  sql.connect(config)
    .then(pool => {
      console.log(111111);
    })
  // sql.connect(config, function(err) {
  //   debugger
  //   if (err) {
  //     console.log(err)
  //   }

  //   // create Request object
  //   var request = new sql.Request()

  //   // query to the database and get the records
  //   request.query('select * from Student', function(err, recordset) {
  //     if (err) {
  //       console.log(err)
  //     }

  //     // send records as a respone
  //     res.send(recordset)
  //   })
  // })
})

var server = app.listen(5000, function() {
  console.log('Server is running at http://localhost:5000')
})