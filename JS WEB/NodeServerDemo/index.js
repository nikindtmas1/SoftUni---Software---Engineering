const http = require('http');

const server = http.createServer(requestHandler);

function requestHandler(req,res){
    res.write('Hello world!');
    res.end();
}

server.listen(3000);