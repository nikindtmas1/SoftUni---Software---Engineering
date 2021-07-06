const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');
const pubSub = require('./pubSub');
require('./init');

const catalog = require('./views/catalog');
//const about = require('./views/about');
const home = require('./views/home');

const port = 3000;

const names = [];
const onCatsRequest = (name) => {

    if(names.includes(name)){

        console.log(`Hello ${name} again!`);
    }else{

        console.log(`We have new cat - ${name}`);
        names.push(name);
    }
}

function requestHandler(req, res){

    console.log(req.method);
    console.log(req.url);

    let reqUrl = url.parse(req.url);
    let params = querystring.parse(reqUrl.query);
    let pathname = url.parse(req.url).pathname;

    console.log(reqUrl.pathname);
    console.log(params);
    console.log(pathname);

    // res.writeHead(200, {
    //     'Content-Type': 'text/plain'
    // })
    
    switch(req.method){
        case 'GET':
            if(req.url === '/'){
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(home);
                res.end();
            }else if(req.url == '/catalog'){
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                

                res.write(catalog);
                res.end();
            }else if(req.url == '/about'){
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                fs.readFile('./views/about.html', (err, data) => {
                    if(err){
                        console.log('Sam error');
                    }

                    res.write(data);
                    res.end();
                });

                onCatsRequest(params.name);
            }
        break;
    }
    
    
   
    
}

 const app = http.createServer(requestHandler);
    app.listen(3000, () => console.log(`Server listening on port ${port}...`));
