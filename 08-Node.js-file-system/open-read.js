var fs = require('fs')

fs.open('TextFile.txt', 'r', function(err, fd) {
  if (err) {
    return console.error(err)
  }

  var buff = new Buffer(1024)

  fs.read(fd, buff, 0, buff.length, 0, function(err, bytes) {
    if (err) {
      throw err
    }

    // print only read bytes to avoid junk.
    if (bytes > 0) {
      console.log(buff.slice(0, bytes).toString())
    }

    // close the opened file.
    fs.close(fd, function(err) {
      if (err) {
        throw err
      }
    })
  })
})