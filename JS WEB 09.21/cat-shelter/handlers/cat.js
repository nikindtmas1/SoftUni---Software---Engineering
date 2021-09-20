const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json');
const uniqId = require('uniqid');


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
                let json = JSON.stringify(breeds, '', 2);
                //console.log(json);
    
                fs.writeFile('./data/breeds.json', json, 'utf-8', () => {
                    console.log('The breed has been added');
            });

           
            });

            res.writeHead(302, {
                'Location': '/'
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

    }else if(urlObj.pathname === '/cats/add-cat' && req.method.toLowerCase() === 'post'){
        console.log(req.method);
        let form = new formidable.IncomingForm();
        //console.log(form);

        let catId = uniqId();
        
        form.parse(req, (err, fields, files) => {
            if(err){
                console.error(err.message);
                return;
            }
            //let parsFields = JSON.parse(fields);
            console.log(fields);
            let oldPath = files.upload.path;
            // let newPath = ''

            // fs.rename(oldPath, newPath, (err) => {
            //     if(err) return err
            //     console.log('The file has been renamed!');
                

            // });

            fs.readFile('./data/cats.json', 'utf-8', (error, data) => {
                if(error){
                    return error;
                }

                let allCats = JSON.parse(data);
                //console.log(allCats);
                //let jsonFields = JSON.stringify(fields);
                allCats.push({catId, ...fields, image: files.upload.name});
                let json = JSON.stringify(allCats, '', 2);
                fs.writeFile('./data/cats.json', json, 'utf-8', () => {
                    res.writeHead(302, {"Location": '/'});
                    res.end();
                });
            });

            // res.writeHead(200, {'Content-Type': 'text/plain'});
            // res.end();
        });
    }else if(urlObj.pathname.includes('/cats-edit') && req.method === 'GET'){

        let filePath = path.normalize(
            path.join(__dirname, '../views/editCat.html')
        );

        //console.log(urlObj.pathname.split("/")[2]);
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if(error){
                console.log(error);

                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.write('File Not Found');
                res.end();
                return;
            }
            let catId = urlObj.pathname.split("/")[2];
            let currentCat = cats.find((cat) => cat.catId === catId);
            let modifiedData = data.toString().replace('{{id}}', catId);
            modifiedData = modifiedData.replace('{{name}}', currentCat.name)
            modifiedData = modifiedData.replace('{{description}}', currentCat.description)

            const breedsAsOptions = breeds.map((b) => `
            <option value="${b}">${b}</option>
            `);
            modifiedData = modifiedData.replace('{{catBreeds}}', breedsAsOptions.join('/'));
            modifiedData = modifiedData.replace('{{breed}}', currentCat.breed)
            //console.log(currentCat);
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })


            res.write(modifiedData);
            res.end();
        })
    }else if(urlObj.pathname.includes('/cats-edit') && req.method.toLowerCase() === 'post'){
        console.log(req.method);
        // let form = new formidable.IncomingForm();
        //console.log(form);

        // let catId = uniqId();
        
        // form.parse(req, (err, fields, files) => {
        //     if(err){
        //         console.error(err.message);
        //         return;
        //     }
        // });

            
            //let parsFields = JSON.parse(fields);
            //console.log(fields);
            let oldPath = files.upload.path;
            // let newPath = ''

            // fs.rename(oldPath, newPath, (err) => {
            //     if(err) return err
            //     console.log('The file has been renamed!');
                

            // });

            fs.readFile('data/cats.json', 'utf-8', (error, data) => {
                if(error){
                   console.log(error);
                }else{
                
                    let currentCats = JSON.parse(data);
                    let catId = urlObj.split("/")[2];
                    console.log(catId);
                    currentCats = currentCats.filter((cat) => cat.catId !== catId);
                    let json = JSON.stringify(currentCats, '', 2);
                    fs.writeFile('./data/cats.json', json, 'utf-8', () => {
                        res.writeHead(302, {"Location": '/'});
                        res.end();
                    });
                }

                
                
                
                //console.log(currentCat);
                //let jsonFields = JSON.stringify(fields);
                //allCats.push({catId, ...fields, image: files.upload.name});
                
               
            });

            // res.writeHead(200, {'Content-Type': 'text/plain'});
            // res.end();
        
    }else if(urlObj.pathname.includes('/cats-find-new-home') && req.method == 'GET'){

        let filePath = path.normalize(
            path.join(__dirname, '../views/catShelter.html')
        );

        //console.log(urlObj.pathname.split("/")[2]);
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if(error){
                console.log(error);

                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.write('File Not Found');
                res.end();
                return;
            }
            let catId = urlObj.pathname.split("/")[2];
            let currentCat = cats.find((cat) => cat.catId === catId);
            let modifiedData = data.toString().replace('{{id}}', catId);
            modifiedData = modifiedData.replace('{{name}}', currentCat.name)
            modifiedData = modifiedData.replace('{{description}}', currentCat.description)

            const breedsAsOptions = breeds.map((b) => `
            <option value="${b}">${b}</option>
            `);
            modifiedData = modifiedData.replace('{{catBreeds}}', breedsAsOptions.join('/'));
            modifiedData = modifiedData.replace('{{breed}}', currentCat.breed)
            console.log(currentCat);
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })


            res.write(modifiedData);
            res.end();
        })

    }
}