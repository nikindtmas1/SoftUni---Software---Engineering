const express = require('express');
const app = express();

const portConfig = require('./config/portConfig');

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.listen(portConfig.development.PORT, () => console.log(`Server listening on port: ${portConfig.development.PORT}...`));
