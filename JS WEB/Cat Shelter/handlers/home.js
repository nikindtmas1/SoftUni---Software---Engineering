const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats.json');

module.exports = (req,res) => {
    const pathname = url.parse(req.url).pathname;

    if(pathname == '/' && req.method == 'GET'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('../views/home/index.html', (err, data) => {
            if(err){
                console.log('Sam error');
            }
            res.write(data);
            res.end();
        });
    }else{
        return true;
    }
}