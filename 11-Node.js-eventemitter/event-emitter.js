var emitter = require('events').EventEmitter

var em = new emitter()

// subscribe FirstEvent
em.addListener('FirstEvent', function(data) {
  console.log('First subscriber: ' + data)
})

// subscribe SecondEvent
em.on('SecondEvent', function(data) {
  console.log('Second subscriber: ' + data)
})

// raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event emitter example.')

// raising SecondEvent
em.emit('SecondEvent', 'This is my second Node.js event emitter example.')