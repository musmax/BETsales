const { UserReview } = require('../models/UserReview');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');
const { getUserById } = require('./user.service');


/**
 * Create UserReview
 * @returns {Promise<UserReviews>}
 */
const createUserReviews = async (UserReviewBody) => {
    UserReviewBody['UserId']
    return await UserReview.create(UserReviewBody);
  };


/**
 * Get all UserReviews
 * @returns {Promise<UserReviews>}
 */
const getUserReviews = async () => {
  return await UserReview.findAll();
};

/**
 * Get UserReview by id
 * @param {ObjectId} UserReviewId
 * @returns {Promise<UserReview>}
 */
const getUserReviewById = async (UserReviewId) => {
  const userReview = await UserReview.findByPk(UserReviewId);
  if (!userReview) {
    throw new ApiError(httpStatus.NOT_FOUND, 'UserReview not found');
  }
  return userReview;
};

/**
 * Update UserReview by id
 * @param {ObjectId} UserReviewId
 * @param {Object} UserReviewBody
 * @returns {Promise<UserReview>}
 */
const updateUserReviewById = async (UserReviewId, UserReviewBody, userId) => {
  const userReview = await UserReview.findByPk(UserReviewId);
  if (!userReview) {
    throw new ApiError(httpStatus.NOT_FOUND, 'UserReview not found');
  }
  const { role } = await getUserById(userId);

  if (UserReview.UserId === userId || role === 'admin') {
    Object.assign(UserReview, UserReviewBody);
    return await UserReview.update(UserReview.dataValues, { where: { id: UserReviewId } });
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Edit');
};

/**
 * Delete UserReview by id
 * @param {ObjectId} UserReviewId
 * @returns {Promise<UserReview>}
 */
const deleteUserReviewById = async (UserReviewId, userId) => {
  logger.info(UserReviewId);
  const userReview = await UserReview.findByPk(UserReviewId);
  if (!userReview) {
    throw new ApiError(httpStatus.NOT_FOUND, 'UserReview not found');
  }

  const { role } = await getUserById(userId);
  if (UserReview.UserId === userId || role === 'admin') {
    return await UserReview.destroy({ where: { id: UserReviewId } });
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Delete');
};

module.exports = {
  createUserReviews,
  getUserReviews,
  getUserReviewById,
  updateUserReviewById,
  deleteUserReviewById,
};
