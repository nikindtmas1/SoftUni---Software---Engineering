const express = require('express');
const exphbs = require('express-handlebars');
const port = 5000;
const routes = require('./routes');

const app = express();
//const home = require('./views/home/index.html')
app.use('/static', express.static('static'));


// app.get('/', (req,res)=> {
//     // res.writeHead(200, {
//     //     'Content-Type': 'text/html'
//     // });
//    res.sendFile(__dirname + '/views/home/home.html')
// });

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/add-cat', (req, res) => {

    res.sendFile(__dirname + '/views/addCat.html')
});

app.get('/add-breed', (req, res) => {

    res.sendFile(__dirname + '/views/addBreed.html')
})

app.use(routes);

app.listen(port, () => console.log(`Server listening on port: ${port}...`))