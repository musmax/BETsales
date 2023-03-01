const express = require('express');
const validate = require('../middleware/validate');
const productValidation = require('../validations').productValidation;
const productController = require('../controllers').productController;
const { auth } = require('../middleware/auth');

const router = express.Router();

router
.route('/')
.post(auth(),validate(productValidation.createProduct),productController.createProduct)
.get(auth(),productController.getProducts)

router
.route('/:productId')
.get(auth(),validate(productValidation.getProduct),productController.getProductById)
.patch(auth(),validate(productValidation.updateProduct),productController.updateProductById)
.delete(auth(),validate(productValidation.deleteProduct),productController.deleteProductById)

router
.route('/:brand_name')
.get(auth(),validate(productValidation.getProductByBrandname),productController.getProductByBrandName)

router
.route('/:price')
.get(auth(),validate(productValidation.getProductByPrice),productController.getProductByPrice)
module.exports = router;
