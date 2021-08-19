const express = require('express');
const app = express();
const setupExpress = require('./config/configExpress');
setupExpress(app);
const port = 5000;




app.get('/', (req,res) => {

    res.render('home.hbs');
})

app.listen(port, () => console.log(`Server running on port: ${port}...`));