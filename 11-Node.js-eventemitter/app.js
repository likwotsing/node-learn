// get the reference of EventEmitter class of events module
var events = require('events')

// create an object of EventEmitter class by using above reference
var em = new events.EventEmitter()

// subscribe for FirstEvent
em.on('FirstEvent', function(data) {
  console.log('First subscribe: ' + data)
})

// Raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event emitter example.')