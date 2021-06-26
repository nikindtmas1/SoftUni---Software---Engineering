const http = require('http');

const logger = require('./logger');

let name1 = 'Pesho';



http.createServer((req, res) => {
    res.write('Hello Node!');
    
    res.end();
}).listen(3000); 

console.log('Server listening on port 3000');