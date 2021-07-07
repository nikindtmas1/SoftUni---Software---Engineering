const http = require('http');
const port = 5000;

const reqHendlar = (req, res) => {
    res.write('Hello Port');
    res.end();
}

const app = http.createServer(reqHendlar);
app.listen(port, () => console.log(`Server listening in port ${port}...`));