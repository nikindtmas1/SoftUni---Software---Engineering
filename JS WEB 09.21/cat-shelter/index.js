const http = require('http');
//const url = require('url');
//const fs = require('fs');
const handlers = require('./handlers');

const port = 5000;

const app = http.createServer((req, res) => {

    for (let handler of handlers) {
        if(!handler(req, res)){
            break;
        }
        
    }
    //let urlObj = url.parse(req.url);
    // console.log('hostname: ' + urlObj.hostname);
    // console.log('href: ' + urlObj.href);
    // console.log('path: ' + urlObj.path);
    // console.log('port: ' + urlObj.port);
    // console.log('query: ' + urlObj.query);

    //--- switch ---
    // switch (req.url) {
    //     case '/':
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });
    //         let html = fs.readFileSync('./views/home/index.html');
    //         res.write(html);
    //         break;
    //     case'/content/styles/site.css':
    //         res.writeHead(200, {
    //             'Content-Type': 'text/css'
    //         });
    //         let contentCss = fs.readFileSync('./content/styles/site.css');
    //         res.write(contentCss);
    //     break;

    //     case'/cats/add-breed':
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });
    //         let addBreed = fs.readFileSync('./views/addBreed.html');
    //         res.write(addBreed);
    //     break;

    //     case'/cats/add-cat':
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         let addCat = fs.readFileSync('./views/addCat.html');
    //         res.write(addCat);
    //     break;
    //     default:
    //         res.statusCode = 404
    //         break;
    // }
    // res.end();
    // ---switch ---

    // console.log(req.method);
    // res.writeHead(200,{
    //     'Content-Type': 'text/html',
    // });
    // let html = fs.readFileSync('./views/home/index.html')
    // res.write(html);
});

app.listen(port);