const express = require('express');
const app = express();
const config = require('./config/config');
//const port = 5000;

app.get('/', (req, res) => {

    res.send('Hello Express!');
    
});

app.listen(config.PORT, () => console.log(`Server running on port: ${config.PORT}...`));
