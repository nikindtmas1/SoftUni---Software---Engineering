const http = require('http');
const catalog = require('./views/catalog');
const about = require('./views/about');
const home = require('./views/home');
const port = 3000;

function requestHandler(req, res){
    if(req.url === '/'){
        res.write(home);
    }else if(req.url == '/catalog'){
        res.write(catalog);
    }else if(req.url == '/about'){
        res.write(about);
    }
    
    res.end();
    console.log(`Server listening on port ${port}`);
}

 const app = http.createServer(requestHandler);
    app.listen(3000);
