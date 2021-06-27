const http = require('http');
const url = require('url');
const querystring = require('querystring');

const catalog = require('./views/catalog');
const about = require('./views/about');
const home = require('./views/home');

const port = 3000;

function requestHandler(req, res){

    console.log(req.method);
    console.log(req.url);

    let reqUrl = url.parse(req.url);
    let params = querystring.parse(reqUrl.query);

    console.log(reqUrl.pathname);
    console.log(params);
    switch(req.method){
        case 'GET':
            if(req.url === '/'){
                res.write(home);
            }else if(req.url == '/catalog'){
                res.write(catalog);
            }else if(req.url == '/about'){
                res.write(about);
            }
    }
    
    
    res.end();
    
}

 const app = http.createServer(requestHandler);
    app.listen(3000, () => console.log(`Server listening on port ${port}...`));
