const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> {
    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // });
   res.sendFile(__dirname + '/views/home/index.html')
});