const express = require('express');
const validate = require('../middleware/validate');
const billingaddresstValidation = require('../validations/billingaddress.validation')
const billingaddresstController = require('../controllers/billingaddress.controller');
const { auth } = require('../middleware/auth');

const router = express.Router();

router
.route('/')
.post(auth(),validate(billingaddresstValidation.createBillingaddress),billingaddresstController.createBillingAddress)
.get(auth(),billingaddresstController.getBillingAddresss)

router
.route('/:billingaddressId')
.patch(auth(),validate(billingaddresstValidation.updateBillingaddress),billingaddresstController.updateBillingAddress)

module.exports = router;
