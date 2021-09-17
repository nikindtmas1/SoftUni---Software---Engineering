const url = require('url');
const path = require('path');
const fs = require('fs');
const cats = require('../data/cats.json');


module.exports = (req, res) => {

    const urlObj = url.parse(req.url);
    //console.log(urlObj.pathname);
    if(urlObj.pathname === '/' && req.method === 'GET'){
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

            let modifiedCats = cats.map((cat) => `
            <li>
                <img src="${path.join('./content/images/' + cat.image)}" alt="${cat.name}">
                <h3>${cat.name}</h3>
                <p><span>Breed: </span>${cat.breed}</p>
                <p><span>Description: </span>${cat.description}</p>
                <ul class="buttons">
                    <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
                    <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
                </ul>
            </li>
            `);
            let modifiedData = data.toString().replace('{{cats}}', modifiedCats)
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(modifiedData);
            res.end();
        });
    }else {
        return true;
    }

    if(urlObj.path === '/content/styles/site.css' && req.method === 'GET'){
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
            'Content-Type': 'text/css'
        });

        res.write(data);
        res.end();
    });
}else {
    return true;
}
}
