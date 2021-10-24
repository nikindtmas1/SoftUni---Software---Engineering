const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

const { isAuth } = require('../middlewares/authMidleware');
const { isOwn } = require('../middlewares/productMiddleware');


router.get('/create', (req, res) => {

    res.render('products/create');
});

router.post('/create',isAuth, async (req, res) => {

    try {
        let data = req.body;
        await productService.createProduct(data, req.user._id)

        res.redirect('/');
        
    } catch (error) {
        console.log(error);
        //res.status(401).redirect('/create', { error: error.message });
    }
    
});

// router.get('/show',async (req, res) => {
//     try {
        
//         let results = await productService.getAllProduct();

//     res.render('products/show', {results});

//     } catch (error) {
//         console.log(error);
//         res.redirect('/products/show', {error: error.message});
//     }

    
// });

router.get('/details/:prodId',async (req, res) => {

    try {
        let result = await productService.getOne(req.params.prodId);
        let allProducts = await productService.getAllProduct();
        let count = allProducts.length;
        
        
        if(req.user){
            let isOwn = result.userId == req.user._id;
            let isAuth = req.user;
            //let userRented = result.rented.find((x) => x == req.user._id);
           
        
            res.render('products/details', {result, isOwn, isAuth, count});//, userRented
    
        }else{
    
            res.render('products/details', {result});
        }

    } catch (error) {
        console.log(error);
        res.render('products/details', {error: error.message});
    }
   
});

// router.get('/:prodId/rent',  async (req, res) => {

//     try {

//         let allProducts = await productService.getAllProduct();
//     let count = allProducts.length;
//     count = count - 1;

//     productService.rentProduct(req.params.prodId, req.user._id)
//     .then(() => res.redirect(`/products/details/${req.params.prodId}`));

//     } catch (error) {
//         console.log(error);
//         res.redirect('/:prodId/rent', {error: error.message});
//     }

    
    
// });

// router.get('/:prodId/delete', isAuth, isOwn,async (req, res) => {

//     //let result = await productService.getOne(req.params.prodId);
//     try {
        
//         if(!req.user){
//             return res.redirect('/user/login');
//         };
    
//         await productService.deleteProduct(req.params.prodId);
    
//         res.redirect('/');

//     } catch (error) {
//         console.log(error);
//         res.redirect('/:prodId/delete', {error: error.message});
//     }
    
// });

// router.get('/:prodId/edit', isAuth, isOwn, async (req, res) => {
//     try {
        
//         let result = await productService.getOne(req.params.prodId);

//     res.render('products/edit', {result});

//     } catch (error) {
//         console.log(error);
//         res.redirect('/:prodId/edit', {error: error.message});
//     }
    
// });

// router.post('/:prodId/edit', isAuth, isOwn, async (req, res) => {
//     try {
//         let {name, type, year, city, imageUrl, description, available} = req.body;

//     await productService.updateOne(req.params.prodId, {name, type, year, city, imageUrl, description, available});

//     res.redirect(`/products/details/${req.params.prodId}`);

//     } catch (error) {
//         console.log(error);
//         res.redirect('/:prodId/edit', {error: error.message});
//     }

// });

module.exports = router;