const midwar = (req,res,nex) => {
    const message = 'From middleware';
    console.log(message);
    //res.send(message);
    nex();
}

module.exports = midwar;