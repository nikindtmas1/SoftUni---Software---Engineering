const express = require('express');

const app = express();

app.get('/', (req,res) => {
   res.send('Hello express!');
});

app.get('/catalog', (req,res) => {
    res.send('Catalog Page');
});

app.listen(3000, console.log('Server listening on port 3000'));