const fs = require('fs');
const url = require('url');

function getContentType(url){

    if(url.endsWith('css')){
        return 'text/css'
    }else if(url.endsWith('js')){
        return 'text/js'
    }else if(url.endsWith('image')){
        return 'text/image'
    }else if(url.endsWith('html')){
        return 'text/html'
    }else if(url.endsWith('png')){
        return 'text/png'
    }

}

module.exports = (req, res) => {

    let urlObj = url.parse(req.url);
    //console.log(urlObj.pathname);
    if(urlObj.pathname.startsWith('/content') && req.method === 'GET'){
        if(urlObj.pathname.endsWith('jpg') || urlObj.pathname.endsWith('png') && req.method === 'GET'){

            fs.readFile(`./${urlObj.pathname}`, (error, data) => {
                if(error){
                    console.log(error);
                    res.writeHead(404, {
                        'Content-Type': 'text/plain'
                    });
    
                    res.write('File Not Found');
                    res.end();
                    return;
                }
    
                //console.log(urlObj.pathname);
    
                res.writeHead(200, 
                    {
                        
                    });
    
                res.write(data);
                res.end();
            });
            
        }else{

            fs.readFile(`./${urlObj.pathname}`, 'utf-8', (error, data) => {
                if(error){
                    console.log(error);
                    res.writeHead(404, {
                        'Content-Type': 'text/plain'
                    });
    
                    res.write('File Not Found');
                    res.end();
                    return;
                }
    
                //console.log(urlObj.pathname);
    
                res.writeHead(200, 
                    {
                        'Content-Type': getContentType(urlObj.pathname)
                    });
    
                res.write(data);
                res.end();
            });

        }

        

    }else{
        return true;
    }
}