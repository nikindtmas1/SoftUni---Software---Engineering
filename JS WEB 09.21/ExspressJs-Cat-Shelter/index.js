const express = require('express');
let filesData = require('./config/cats.json');
const fs = require('fs');
const uniqid = require('uniqid');
//const exphbs = require('express-handlebars');
const port = 5000;
const routes = require('./routes');
const app = express();
//const home = require('./views/home/index.html')
//app.use('/static', express.static('static'));

const expressConfig = require('./config/configExpress');

expressConfig(app);

// app.get('/', (req,res)=> {
//     // res.writeHead(200, {
//     //     'Content-Type': 'text/html'
//     // });
//    res.render('home')
// });

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// app.get('/add-cat', (req, res) => {

//     res.render('addCat');
// });


app.post('/add-cat', validateProduct, (req, res) => {
    console.log(req.method);
    console.log(req.body);

    let data = req.body;

    let cat = new Cat(
        uniqid(),
        data.name,
        data.description,
        data.breed
    )
    console.log('You are posted');
    
    filesData.push(cat);

    fs.writeFile(path.join(__dirname, '/../config/cats.json'), JSON.stringify(filesData), (err) => {
        if(err){
            console.log(err);
            return;
        }
    });
    res.redirect('/')
});

// app.get('/add-breed', (req, res) => {

//     res.render('addBreed')
// })

routes(app);

function validateProduct(req, res, next){
    let isValid = true;

    if( req.body.name.length < 2 ){
        isValid = false;
    }else if(!req.body.imageUrl){
        isValid = false;
    }

    if(isValid){
        next();
    }
}

app.listen(port, () => console.log(`Server listening on port: ${port}...`))