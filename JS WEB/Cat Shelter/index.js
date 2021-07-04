const http = require('http');
const port = 3000;
const handlers = require('./handlers');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    for(let handler of handlers){

        if(!handler(req,res)){
            break;
        }

        res.write(handler);
        res.end();
    }
}).listen(port, () => console.log(`Server listen on port ${port}...`));