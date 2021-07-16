const midwar = (req,res,nex) => {
    const message = 'From middleware';

    res.send(message);
    nex();
}