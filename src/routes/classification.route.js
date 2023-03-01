const express = require('express');
const validate = require('../middleware/validate');
const classificationValidation = require('../validations/classification.validation')
const classificationController = require('../controllers/classification.controller')
const { auth } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(classificationValidation.createclassification), classificationController.createclassification)
  .get(auth(), classificationController.getclassifications);

router
  .route('/:answerId')
  .get(auth(), validate(classificationValidation.getclassification), classificationController.getclassificationById)
  .patch(auth(), validate(classificationValidation.updateclassification), classificationController.getclassificationById)
  .delete(auth(), validate(classificationValidation.deleteclassification), classificationController.deleteclassificationById);

module.exports = router;
