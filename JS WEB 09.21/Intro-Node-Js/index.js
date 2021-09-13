const http = require('http');
const url = require('url');
const port = 5000;

http.createServer((req, res) => {
    let path = url.parse(req['url']).pathname;
    console.log(path);
    if(path == '/'){

        res.write('Hi !')
    }
    res.end();
}).listen(port);

console.log(`Node.js listening on port: ${port}`);
// let a = 5;
// let b = 3;



// console.log(a * b);
// console.log(a + b);
// console.log(a - b);
// console.log((a * b) + a);
// console.log((a * b) + b);

// function foo(x){
//     return (x * x);
// };

// function bar(y){
//     return foo(y + 2);
// };

// bar(8);