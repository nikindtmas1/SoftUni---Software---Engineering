
const  url  = require('url');
//const path = require('path');
const fs = require('fs');

function getContentType(url){
    if(url.endsWith('css')){
        return 'text/css';

    }else if('htm'){
        return 'text/html';

    }else if('png'){
        return 'text/png';

    }else if('json'){
        return 'text/json';

    }else if('js'){
        return 'text/js';
    }else if('jpg'){
        return 'text/jpg';
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if(pathname.startsWith('/content') && req.method === 'GET'){

        fs.readFile(`./${pathname}`, 'utf-8' , (err, data) => {
            if(err){
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write('Sam err');
                res.end();
                return;
            }

            console.log(pathname);
            res.writeHead(200, {
                'Content-Type': getContentType(pathname)
            });

            res.write(data);
            res.end();
        })

    }else{
        return true;
    }
}