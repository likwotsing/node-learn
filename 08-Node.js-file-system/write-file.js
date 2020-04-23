var fs = require('fs')

fs.writeFile('./test.txt', 'Hello World!', function(err) {
  if (err) {
    console.log(err)
    throw err
  }
  console.log('Write operation complete.')
})

// appendFile
fs.appendFile('./test.txt', '\nappend something', function(err) {
  if (err) {
    console.log(err)
    throw err
  }
  console.log('Append operation complete.')
})