const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const pubSub = require('./pubSub');
const events = require('events');
require('./init');
const stream = require('stream');

const port = 5000;

let eventEmitter = new events.EventEmitter();

eventEmitter.on('cats', (name) => {
    console.log(`From eventEmiter ${name}`);
})

const catsLogger = (name) => {
    console.log(`logged new cats ${name}`);
};

pubSub.subscribe('cats', catsLogger);

const reqHendlar = (req, res) => {
    let reqUrl = url.parse(req.url);
    let path = url.parse(reqUrl).pathname;
    let params = querystring.parse(reqUrl.query)

    console.log(path);
    console.log(params);
   
    switch(path){
        case '/cats':
            res.writeHead(200, 
                {'Content-Type': 'text/html'});
                fs.readFile('./views/cats.html', (err, data) => {
                    if(err){
                        console.log('Sam Err');
                    }
        
                    res.write(data);
                    res.end();
                });
            //onCatsReq(params.name);
            pubSub.publish('cats', params.name);
            eventEmitter.emit('cats', params.name);
             break;
        case '/dogs':
            
            
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.readFile('./views/dogs.html', (err, data) => {
            if(err){
                console.log('Sam Err');
            }
           
            res.write(data);
            res.end();
        });
        break;

        case '/mous':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

           const fileMous = fs.createReadStream('./views/mous.html');
           fileMous.on('data', data => res.write(data));
           fileMous.on('end', () => res.end());
            //fileMous.pipe(res);
           break;

           case '/rabbit':

           break;
    }
    
    // if(path === '/cats'){
        
    // res.writeHead(200, {'Content-Type': 'text/html'});
    //     fs.readFile('./views/cats.html', (err, data) => {
    //         if(err){
    //             console.log('Sam Err');
    //         }

    //         res.write(data);
    //         res.end();
    //     });
    
    // }else if(path === '/dogs'){
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     fs.readFile('./views/dogs.html', (err, data) => {
    //         if(err){
    //             console.log('Sam Err');
    //         }

    //         res.write(data);
    //         res.end();
    //     });
    // }
}

const app = http.createServer(reqHendlar);
app.listen(port, () => console.log(`Server listening in port ${port}...`));