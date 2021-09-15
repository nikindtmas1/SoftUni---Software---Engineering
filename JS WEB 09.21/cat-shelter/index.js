const http = require('http');
//const url = require('url');
const fs = require('fs');

const app = http.createServer((req, res) => {
    // let urlObj = url.parse(req.url);
    // console.log('hostname: ' + urlObj.hostname);
    // console.log('href: ' + urlObj.href);
    // console.log('path: ' + urlObj.path);
    // console.log('port: ' + urlObj.port);
    // console.log('query: ' + urlObj.query);
    console.log(req.method);
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });
    let html = fs.readFileSync('./views/home/index.html')
    res.write(html);
    res.end();
});

app.listen(5000);