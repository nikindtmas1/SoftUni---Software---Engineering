const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req,res) => {
   res.send('Hello express!');
});




app.listen(3000, () => console.log(`Server listening on port: ${port}`));