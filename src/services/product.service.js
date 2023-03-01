const { Variation } = require('../models/Variation');
const { Product } = require('../models/Product');
const { VariationOption } = require('../models/VaraiationOption');
// const { ProductImage } = require('../models/ProductImage');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');
const { getUserById } = require('./user.service');
const { UserReview } = require('../models/UserReview');

/**
 * Create Products
 * @param {string} userId
 * @param {Object} ProductBody
 * @return {promise<Product>}
 */


const createProduct = async (userId, ProductBody) => {
  ProductBody['UserId'];
  const { role } = await getUserById(userId);
  if (role === 'admin') {
    return await Product.create(ProductBody);
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Create, exclusive to admin');
};

/**
 * Get all Products
 * @returns {Promise<Products>}
 */
const getProducts = async () => {
  return await Product.findAll({
    include: [
      {
        model: VariationOption,
        attributes: ['id', 'value'],
        include : [
          {
            model: Variation,
            attributes: ['id', 'variation_option'],
          }
        ],
      
      },
   
      {
        model: UserReview,
        attributes: ['id', 'comment','rating_value','ProductId',],
      
      },
    ],
  });
};

/**
 * Get Product by id
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const getProductById = async (productId) => {
  let id =  Product.productId;
  const product = await Product.findOne({
    where: {id},
    include: [
      {
        model: VariationOption,
        attributes: ['id', 'value'],
        include : [
          {
            model: Variation,
            attributes: ['id', 'variation_option'],
          }
        ],
      
      },
   
      {
        model: UserReview,
        attributes: ['id', 'comment','rating_value','ProductId',],
      
      },
    ]
  });
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  return product;
};


/**
 * Get ProductByPrice
 * @returns {Promise<Pricerange>}
 */
const getProductsByPrice = async (pricerange) => {
  return await Product.findAll({
    where:{
      Price:pricerange,
      include: [
        {
          model: VariationOption,
          attributes: ['id', 'value'],
          include : [
            {
              model: Variation,
              attributes: ['id', 'variation_option'],
            }
          ],
        
        },
     
        {
          model: UserReview,
          attributes: ['id', 'comment','rating_value','ProductId',],
        
        },
      ],
    }
    
  });
};

/**
 * Get ProductByBrandname
 * @returns {Promise<Brandname>}
 */
const getProductByBrandName = async (brandname) => {
  return await Product.findAll({
    where:{
      brand_name:brandname,
      include: [
        {
          model: VariationOption,
          attributes: ['id', 'value'],
          include : [
            {
              model: Variation,
              attributes: ['id', 'variation_option'],
            }
          ],
        
        },
     
        {
          model: UserReview,
          attributes: ['id', 'comment','rating_value','ProductId',],
        
        },
      ],
    }
    
  });
};


/**
 * Update Product by id
 * @param {ObjectId} ProductId
 * @param {Object} ProductBody
 * @returns {Promise<Product>}
 */
const updateProductById = async (ProductId, ProductBody, userId) => {
  const product = await Product.findByPk(ProductId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND,'Product not found');
  }
  const { role } = await getUserById(userId);

  if (role === 'admin') {
    Object.assign(Product, ProductBody);
    return await Product.update(Product.dataValues, { where: { id: ProductId } });
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Edit ');
};

/**
 * Delete Product by id
 * @param {ObjectId} ProductId
 * @returns {Promise<Product>}
 */
const deleteProductById = async (ProductId, userId) => {
  logger.info(ProductId);
  const product = await Product.findByPk(ProductId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }

  const { role } = await getUserById(userId);
  if (Product.UserId === userId || role === 'admin') {
    return await Product.destroy({ where: { id: ProductId } });
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Delete, Exclusive to admin');
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getProductByBrandName,
  getProductsByPrice,
};
