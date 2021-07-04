
const  url  = require('url');
const path = require('path');


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
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if(pathname.startsWith('/content') && req.method === 'GET'){

    }else{
        return true;
    }
}