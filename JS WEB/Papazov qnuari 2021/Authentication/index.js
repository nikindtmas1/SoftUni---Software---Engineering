const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('CUSTOM_COOKIE', 'Initial Cookie Value');
    res.send('Hello!')
});

app.get('/show', (req, res) => {
    console.log(req.cookies);
})

app.listen(port, () => console.log(`Server running on port: ${port}...`))