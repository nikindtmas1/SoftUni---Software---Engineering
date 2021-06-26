const http = require('http');
const url = require('url');
const log = require('./logger');
const queryString = require('querystring');

const logger = require('./logger');

let name1 = 'Pesho';
logger(name1);

let urlObj = url.parse('https://softuni.bg/trainings/3223/js-back-end-january-2021#lesson-21963?year=2020&month=may')

console.log(urlObj);

const qr = queryString
.parse('year=2020&month=may');

console.log(qr.year);
console.log(qr.month);
/*http.createServer((req, res) => {
    res.write('Hello Node!');
    
    res.end();
}).listen(3000);

console.log('Server listening on port 3000');*/