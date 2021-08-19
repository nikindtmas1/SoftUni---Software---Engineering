const express = require('express');
const app = express();
const setupExpress = require('./config/configExpress');
setupExpress(app);
const routes = require('./routes');
const config = require('./config/configPort');
//const port = 5000;


app.use(routes);

// app.get('/', (req,res) => {

//     res.render('home.hbs');
// })

app.listen(config.PORT, () => console.log(`Server running on port: ${config.PORT}...`));