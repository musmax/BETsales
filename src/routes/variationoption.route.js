const express = require('express');
const validate = require('../middleware/validate');
const variationoptionValidation = require('../validations/variationoption.validation')
const variationoptionController = require('../controllers/variationoption.controller')
const { auth } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(variationoptionValidation.createVariableoption), variationoptionController.createVariationOption)
  .get(auth(), variationoptionController.getVariationOptions);

router
  .route('/:variationoptionId')
  .get(auth(), validate(variationoptionValidation.getVariationOptions), variationoptionController.getVariationOptionById)
  .patch(auth(), validate(variationoptionValidation.updateVariableoption), variationoptionController.updateVariationOption)
  .delete(auth(), validate(variationoptionValidation.deleteVariableoption), variationoptionController.deleteVariationOptionById);

module.exports = router;
