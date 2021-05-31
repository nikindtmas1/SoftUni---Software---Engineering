const http = require('http');

const port = 3000
const server = http.createServer(requestHandler);

const html = `
<html>
<header></header>
<body>
    <div>
        <h1>My Page!</h1>
        <p>Welcome to My Page!</p>
    </div>
</body>
</html>`

function requestHandler(req,res){
    console.log(">>> method: ", req.method);
    console.log(">>> url: ", req.url);
    res.write(html);
    res.end();
}

server.listen(port, () => console.log('Server listenning on port ' + port));