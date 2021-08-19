const express = require('express');
const exprhbs = require('express-handlebars')


const app = express();
const port = 5000;

app.engine('handlebars', exprhbs());
app.set('view engine', 'handlebars');


app.get('/', (req,res) => {

    res.render('home.handlebars');
})

app.listen(port, () => console.log(`Server running on port: ${port}...`));