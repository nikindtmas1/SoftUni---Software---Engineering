const express = require('express');

const app = express();
console.log(process.env.NODE_ENV);
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(port, () => console.log(`Server listening on port ${port}...`))