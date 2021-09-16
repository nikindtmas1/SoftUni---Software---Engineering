const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json');


module.exports = (req, res) => {

    let urlObj = url.parse(req.url);

    if(urlObj.pathname === '/cats/add-cat' && req.method === 'GET'){

        let filePath = path.normalize(
            path.join(__dirname, '../views/addCat.html')
        );

        fs.readFile(filePath, (error, data) => {
            if(error){
                console.log(error);

                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.write('File Not Found');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data);
            res.end();

        });

    }

    if(urlObj.pathname === '/cats/add-breed' && req.method === 'GET'){

        let filePath = path.normalize(
            path.join(__dirname, '../views/addBreed.html')
        );

        fs.readFile(filePath, (error, data) => {
            if(error){
                console.log(error);

                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.write('File Not Found');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data);
            res.end();

        });

    }
}