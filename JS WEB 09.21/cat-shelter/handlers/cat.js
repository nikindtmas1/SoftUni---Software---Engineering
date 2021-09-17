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

            let catBreedPlaceholder = breeds.map((breed) => `<option value="${breed}">${breed}</option>`);
            let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder)
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })


            res.write(modifiedData);
            res.end();

        });

    }else if(urlObj.pathname === '/cats/add-breed' && req.method === 'GET'){
            console.log(req.method);
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

    }else if(urlObj.pathname === '/cats/add-breed' && req.method.toLowerCase() == 'post'){
        console.log(req.method);
        let formData = '';

        req.on('data', (data) => {
            formData += data;
        });

        req.on('end', () => {

            //console.log(formData);

            let body = qs.parse(formData);
            //console.log(body);
            fs.readFile('./data/breeds.json' , (error, data) => {
                if(error){
                    return error;
                }

                let breeds = JSON.parse(data);
                breeds.push(body.breed);
                //console.log(breeds);
                let json = JSON.stringify(breeds);
                //console.log(json);
    
                fs.writeFile('./data/breeds.json', json, 'utf-8', () => {
                    console.log('The breed has been added');
            });

           
            });

            res.writeHead(200, {
                
            });
            res.end();
        })
        // let filePath = path.normalize(
        //     path.join(__dirname, '../views/addBreed.html')
        // );

        // fs.readFile(filePath, (error, data) => {
        //     if(error){
        //         console.log(error);

        //         res.writeHead(404, {
        //             'Content-Type': 'text/html'
        //         });
        //         res.write('File Not Found');
        //         res.end();
        //         return;
        //     }

        //     res.writeHead(200, {
        //         'Content-Type': 'text/html'
        //     })
        //     res.write(data);
        //     res.end();

        // });

    }else if(urlObj.pathname === '/cats/add-cat' && req.method.toLowerCase() == 'post'){
        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if(err){
                console.error(err.message);
                return;
            }

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end();
        });
    }
}