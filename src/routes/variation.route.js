const express = require('express');
const validate = require('../middleware/validate');
const variationValidation = require('../validations/variation.validation')
const variationController = require('../controllers/variation.controller')
const { auth } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(variationValidation.createVariation), variationController.createVariation)
  .get(auth(), variationController.getVariations);

router
  .route('/:answerId')
  .get(auth(), validate(variationValidation.getVariation), variationController.getVariationById)
  .patch(auth(), validate(variationValidation.updateVariation), variationController.getVariationById)
  .delete(auth(), validate(variationValidation.deleteVariation), variationController.deleteVariationById);

module.exports = router;
