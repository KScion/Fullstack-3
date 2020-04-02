

// const moment = require('moment');
// const today = moment();
// console.log(today.format());


const EventEmitter = require('events');

class Emitter extends EventEmitter {}

const eventEmitter = new Emitter();  
eventEmitter.on('currentTime', () => {  
  const moment = require('moment');
  const today = moment();
  console.log(today.format()); 
});

eventEmitter.emit('currentTime');


