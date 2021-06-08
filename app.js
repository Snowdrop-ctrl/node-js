// function hello(name) {
//     console.log('hello ' + name);
// }

// // hello('nitesh')
// console.log(window);

// ************** loading custom module  **************
// const logger = require('./logger');
// logger.log('hellow i am nitesh and module loaded scuccefully.')
// logger.name();

// ************** loading path module **************

// const path = require('path');
// const pathObj = path.parse(__filename);
// console.log(pathObj);

// loading os module
// const os = require('os');
// console.log(os.cpus());
// console.log(os.freemem());

// ************** loading events module **************

// const EventEmitte = require('events');
// const { emitWarning } = require('process');
// const emitter = new EventEmitte();
// const Logger = require('./logger');
// const logger = new Logger();

// Register the Listener
// emitter.on('message', function first() {
//     console.log('loaded the event.');
// })

// logger.on('message', function(value) {
//     console.log(value);
// })

// logger.log('nitesh');

// console.log(emitter.listeners('message'));
// raise the event
// emitter.emit('message');
