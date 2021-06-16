const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req,res) => {
   res.send('Hello express!');
});

app.get('/catalog', (req,res) => {
    res.send('Catalog Page');
});

app.listen(3000, () => console.log(`Server listening on port: ${port}`));