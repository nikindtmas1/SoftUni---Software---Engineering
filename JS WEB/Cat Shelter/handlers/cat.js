const url = require('url');
const path = require('path');
const fs = require('fs');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds');
const cats = require('../data/cats');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if(pathname === '/cats/add-cat' && req.method === 'GET'){

        let filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

        const items = fs.createReadStream(filePath);

        items.map('data', (data) => {
            res.write(data);
        })

    }else if(pathname === '/cats/add-breed' && req.method === 'GET'){


    }else{
        return true;
    }
}