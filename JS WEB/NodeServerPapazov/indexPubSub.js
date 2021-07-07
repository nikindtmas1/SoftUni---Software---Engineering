const http = require('http');
const url = require('url');
const querystring = require('querystring');

const port = 5000;

const reqHendlar = (req, res) => {
    let reqUrl = req.url;
    let pathname = url.parse(reqUrl).pathname;
    let params = querystring.parse(reqUrl.query);
    
    if(pathname === '/cats'){
        
        console.log(params.name);
    res.write(`Hello ${pathname}`);
    res.end();
    
    }
}

const app = http.createServer(reqHendlar);
app.listen(port, () => console.log(`Server listening in port ${port}...`));