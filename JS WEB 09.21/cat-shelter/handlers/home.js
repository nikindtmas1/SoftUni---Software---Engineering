const url = require('url');
const path = require('path');
const fs = require('fs');
const cats = require('../data/cats.json');


module.exports = (req, res) => {

    const pathName = url.parse(req.url).pathName;

    if(pathName === '/' && req.method === 'GET'){
            // TO DO LOGIC
        let filePath = path.normalize(
            path.join(__dirname, '../views/home/index.html')
        );

        fs.readFile(filePath, (error, data) => {
            if(error){
                console.log(error);
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });

                res.write('file not found');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(data);
            res.end();
        });
    }else {
        return true;
    }
}
