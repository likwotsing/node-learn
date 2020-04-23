var fs = require('fs')

fs.readFile('test.txt', 'utf-8', function(err, data) {
  debugger
  if (err) {
    throw err
  }
  console.log(data)
})