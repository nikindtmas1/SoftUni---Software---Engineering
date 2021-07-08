const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');


const port = 5000;

const reqHendlar = (req, res) => {
    let reqUrl = req.url;
    let path = url.parse(reqUrl).pathname;
    let params = querystring.parse(reqUrl.query);

    console.log(path);
    console.log(params);
    
    if(path === '/cats'){
        
    res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./views/cats.html', (err, data) => {
            if(err){
                console.log('Sam Err');
            }

            res.write(data);
            res.end();
        })
    
    }
}

const app = http.createServer(reqHendlar);
app.listen(port, () => console.log(`Server listening in port ${port}...`));