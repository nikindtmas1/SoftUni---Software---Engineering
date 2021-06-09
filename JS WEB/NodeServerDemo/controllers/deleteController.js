module.exports = (req,res) => {

    const id = req.url.split('=')[1];
    console.log(id);
    
    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
}