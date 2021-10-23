const express = require('express');
const router = express.Router();

const userService = require('../services/userService');
const productService = require('../services/productService');
const { createToken } = require('../utils/jwtUtils');

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login',async (req, res) => {
    try {
        let data = req.body;

        let user = await userService.loginUser(data);
        if(!user){
    
            return res.redirect('404');
    
        }
    
        let token = await createToken(user);
    
        res.cookie('cookieToken', token, {
            httpOnly: true
        });
    
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.render('user/register', {error: error.message});

    }

});

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {
    try {
        let data = req.body;

   await userService.createUser(data);

   let user = await userService.loginUser(data);
    if(!user){

        return res.redirect('404');

    }

    let token = await createToken(user);

    res.cookie('cookieToken', token, {
        httpOnly: true
    });

    res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('user/register', {error: error.message})
    }
    
    
    //res.redirect('/user/login');
});

router.get('/profile', async (req, res) => {

    try {
        let results = await productService.getAllProduct();

    let myCources = results.filter((x) => x.userId == req.user._id);
    //myCources = myCources.filter((x) => x.title);
    let myProf = req.user.username
    

    res.render('products/myProfile', {myCources, myProf});
    } catch (error) {
        console.log(error);
        res.redirect('products/myProfile', {error: error.message});
    }
    
});

router.get('/logout', (req, res) => {
    res.clearCookie('cookieToken');
    res.redirect('/user/login')
});

module.exports = router;