const midwar = (req,res,nex) => {
    const message = 'From middleware';
    console.log(message);
    console.log(req.url);
    
    if(req.url = '/cats'){
        //res.send(message);

        nex();
    }
}

module.exports = midwar;