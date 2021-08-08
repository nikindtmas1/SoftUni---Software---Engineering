const express = require('express');
const app = express();
const config = require('./config/config');
const expressSetup = require('./config/express');

expressSetup(app);
//const port = 5000;

app.get('/', (req, res) => {

    res.send('Hello Express!');
    
});

app.listen(config.PORT, () => console.log(`Server running on port: ${config.PORT}...`));
