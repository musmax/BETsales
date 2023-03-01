const express = require('express');
const validate = require('../middleware/validate');
const userreviewValidation = require('../validations').userreviewValidation;
const userreviewController = require('../controllers').userreviewController;
const { auth } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(userreviewValidation.createUserreview), userreviewController.createUserReview)
  .get(auth(), userreviewController.getUserReviews);

router
  .route('/:userreviewId')
  .get(auth(), validate(userreviewValidation.getUserreview), userreviewController.deleteUserReviewById)
  .patch(auth(), validate(userreviewValidation.updateUserreview), userreviewController.updateUserReview)
  .delete(auth(), validate(userreviewValidation.deleteUserreview), userreviewController.deleteUserReviewById);

module.exports = router;
