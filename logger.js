const EventEmitter = require('events');



class Logger extends EventEmitter {
    log(message) {
        console.log(message);

        this.emit('message', { id: 1, url: 'https://google.com' });
    }
}

// module.exports.log = log;
// module.exports.log = log;
// module.exports.name = printName;

module.exports = Logger;