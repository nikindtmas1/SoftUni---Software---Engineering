const express = require('express');
const app = express();
const port = 5000;
const router = require('./routes/routes');

//const home = require('./views/home/index.html')
app.use('/static', express.static('static'));
app.use('/',router);



app.get('/add-cat', (req, res) => {

    res.sendFile(__dirname + '/views/addCat.html')
});

app.get('/add-breed', (req, res) => {

    res.sendFile(__dirname + '/views/addBreed.html')
})

app.listen(port, () => console.log(`Server listening on port: ${port}...`))