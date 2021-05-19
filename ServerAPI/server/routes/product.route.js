const express = require('express');

const router = express.Router();

const productController = require('../controller/product.controller');

//get Product List
router.get('/getProductList' , productController.getProductList);

//create Product
router.post('/insertProduct', productController.insertProduct);

//update product
router.put('/:id' , productController.updateProduct);

//delete product
router.delete('/:id', productController.deleteProduct);

//checkout product
router.put('/checkout/:id' , productController.checkoutProduct);
 
//select specific product
router.get('/selectProduct/:id', productController.selectSpecificProduct);

//select record for specific admin
router.get('/selectAdmin/:adminName', productController.selectSpecificAdmin);


module.exports = router;
