const express = require('express');
const validate = require('../middleware/validate');
const useraddressValidation = require('../validations').useraddressValidation;
const useraddressController = require('../controllers').useraddressController;
const { auth } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(useraddressValidation.createUseraddress), useraddressController.createUserAddress)
  .get(auth(), useraddressController.getUserAddresss);

router
  .route('/:useraddressId')
  .get(auth(), validate(useraddressValidation.getUseraddress), useraddressController.getUserAddressById)
  .patch(auth(), validate(useraddressValidation.updateUseraddress), useraddressController.updateUserAddressById)
  .delete(auth(), validate(useraddressValidation.deleteUseraddress), useraddressController.deleteUserAddressById);

module.exports = router;
