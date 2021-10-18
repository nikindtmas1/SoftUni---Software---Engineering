const productService = require('../services/productService');

async function isOwn(req, res, next){

    let product = await productService.getOne(req.params.prodId);

    if(product.userId == req.user._id){

        req.product = product;

        next();
    }else{
        next('You are not authorized to edit this product!');
    }

}

module.exports = {
    isOwn,
}