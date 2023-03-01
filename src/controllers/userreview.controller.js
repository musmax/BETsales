const { userreviewService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const logger = require('../config/logger');

const createUserReview = catchAsync(async (req, res) => {
  logger.info(req.userId);
  const userId = req.userId;
  const UserReview = await userreviewService.createUserReviews( req.body);
  res.status(httpStatus.CREATED).json(UserReview);
});

const updateUserReview = catchAsync(async (req, res) => {
 await userreviewService.updateUserReviewById(req.params.UserReviewId, req.body, req.userId);
  res.status(httpStatus.OK).json({ success: 'Updated' });
});

const getUserReviews = catchAsync(async (req, res) => {
  const UserReviews = await userreviewService.getUserReviews(); 
  res.status(httpStatus.OK).json(UserReviews);
});


const getUserReviewById = catchAsync(async (req, res) => {
  const UserReview = await userreviewService.getUserReviewById(req.params.UserReviewId);
  res.status(httpStatus.OK).json(UserReview);
});

const deleteUserReviewById = catchAsync(async (req, res) => {
  const UserReview = await userreviewService.deleteUserReviewById(req.params.UserReviewId, req.userId);
  res.status(httpStatus.OK).json({ success: 'Deleted' });
});

module.exports = {
  createUserReview,
  getUserReviews,
  getUserReviewById,
  deleteUserReviewById,
  updateUserReview,
};
