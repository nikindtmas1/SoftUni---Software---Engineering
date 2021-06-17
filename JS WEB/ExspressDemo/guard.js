function isAdmin(req, ers, next){
    if(req.headers.hasOwnProperty('x-admin')){
        next();

    }else{
        res.status(401);
        res.send('Admins only. Please sign in.');
    }
    
}

module.exports = isAdmin;