const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

const { isAuth } = require('../middlewares/authMidleware');
const { isOwn } = require('../middlewares/productMiddleware');

const User = require('../models/user');


router.get('/create',isAuth, (req, res) => {

    res.render('products/create');
});

router.post('/create',isAuth, async (req, res) => {

    try {
        let data = req.body;

        await productService.createProduct(data, req.user._id)

        res.redirect('/');

    } catch (error) {
        console.log(error);
        res.render('products/404', { error: error.message });
    }

});

router.get('/show', async (req, res) => {
    try {

        let results = await productService.getAllProduct();

        res.render('products/show', { results });

    } catch (error) {
        console.log(error);
        res.render('products/404', { error: error.message });
    }


});

router.get('/details/:prodId', async (req, res) => {

    try {
        let result = await productService.getOne(req.params.prodId);
   
        let votes = result.votes.length;


        if (req.user) {
            let isOwn = result.userId == req.user._id;
            let isAuth = req.user;
            let user = await User.findById(result.userId);
            let firstName = user.firstName;
            let lastName = user.lastName;
            let fullName = firstName + ' ' + lastName;
          


            res.render('products/details', { result, isOwn, isAuth, fullName, votes });//, count, userRented

        } else {

            res.render('products/details', { result });
        }

    } catch (error) {
        console.log(error);
        res.render('products/404', { error: error.message });
    }

});





router.get('/:prodId/delete', isAuth, isOwn,async (req, res) => {

    try {

        if(!req.user){
            return res.redirect('/user/login');
        };

        await productService.deleteProduct(req.params.prodId);

        res.redirect('/');

    } catch (error) {
        console.log(error);
        res.redirect('/:prodId/404', {error: error.message});
    }

});

router.get('/:prodId/edit', isAuth, isOwn, async (req, res) => {
    try {

        let result = await productService.getOne(req.params.prodId);

    res.render('products/edit', {result});

    } catch (error) {
        console.log(error);
        res.redirect('/:prodId/404', {error: error.message});
    }

});

router.post('/:prodId/edit', isAuth, isOwn, async (req, res) => {
    try {
        let {title,keyword,location,dateCreation,description,imageUrl,votes,rating} = req.body;

    await productService.updateOne(req.params.prodId, {title,keyword,location,dateCreation,description,imageUrl,votes,rating});

    res.redirect(`/products/details/${req.params.prodId}`);

    } catch (error) {
        console.log(error);
        res.redirect('/:prodId/edit', {error: error.message});
    }

});

router.get('/:prodId/voteUp',  async (req, res) => {

    try {

    
    

    productService.voteUpProduct(req.params.prodId, req.user._id)
    .then(() => res.redirect(`/products/details/${req.params.prodId}`));

    } catch (error) {
        console.log(error);
        res.render('products/404', {error: error.message});
    }
    
});

router.get('/:prodId/voteDown',  async (req, res) => {

    try {

        
    

    productService.voteDownProduct(req.params.prodId, req.user._id)
    .then(() => res.redirect(`/products/details/${req.params.prodId}`));

    } catch (error) {
        console.log(error);
        res.render('products/404', {error: error.message});
    }
    
});

module.exports = router;