//const http = require('http');
const events = require('events');


let eventEmiter = new events.EventEmitter();

eventEmiter.on('click', (a, b) => {
    console.log('A click has been detected!');
    console.log(a + ' ' + b);
});

eventEmiter.emit('click', 'Hello', 'World!');

// http.createServer((req, res) => {

//     res.write('Hi !');
//     res.end();

 
 
// }).listen(5000);