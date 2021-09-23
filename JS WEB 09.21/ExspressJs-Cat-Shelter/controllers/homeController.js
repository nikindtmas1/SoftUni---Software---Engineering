const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/', (req, res) => {

    let filePath = path.normalize(
        path.join(__dirname, '../views/home/index.html')
    )
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    fs.readFile(filePath, (error, data) => {
        if(error){
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.write('File not found');
            res.end();
        }

        res.write(data);
        res.end();
    })
    
})

 module.exports = router;