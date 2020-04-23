var fs = require('fs')


// 异步读取
fs.readFile('TextFile.txt', 'utf-8', function(err, data) {
  if (err) {
    throw err
  }
  console.log(data)
})

// 同步读取
var data = fs.readFileSync('./TextFile.txt', 'utf-8')
console.log(data)