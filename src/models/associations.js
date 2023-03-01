const {User} = require('./User')
const {PaymentMethod} = require('./PaymentMethod')
const {Product} = require('./Product')
const {ProductImage} = require('./ProductImage')
const {ShopOrder} = require('./ShopOrder')
const {ShoppingCart} = require('./ShoppingCart')
const {ShoppingCartItem} = require('./ShoppingCartItem')
const {UserPaymentMethod} = require('./UserPaymentMethod')
const {UserReview} = require('./UserReview')
const {BillingAddress} = require('./BillingAddress')
const {VariationOption} = require('./VaraiationOption')
const { Variation } = require('./Variation');

exports.association = () => {
// Associations between the models

// ONE TO MANY ASSOCIATION

// //association between User and UserAddress
User.hasMany(BillingAddress);
BillingAddress.belongsTo(User);

//association between User and VariationOption
User.hasMany(VariationOption);
VariationOption.belongsTo(User);

//association between User and BillingAddress
User.hasMany(BillingAddress);
BillingAddress.belongsTo(User);

// association between Product and VariableOption
Product.hasMany(VariationOption);
VariationOption.belongsTo(Product);

Variation.hasMany(VariationOption);
VariationOption.belongsTo(Variation);

// // association between Product and ProductImage
Product.hasMany(ProductImage);
ProductImage.belongsTo(Product);

// association between ShoppingCart and ShoppingCartItem
// ShoppingCart.hasMany(ShoppingCartItem);
// ShoppingCartItem.belongsTo(ShoppingCart);

// association between PaymentType and UserPaymentMethod
PaymentMethod.hasMany(UserPaymentMethod);
UserPaymentMethod.belongsTo(PaymentMethod);

// association between User and UserReview
User.hasMany(UserReview);
UserReview.belongsTo(User);

// association between UserReview and Product
Product.hasMany(UserReview);
UserReview.belongsTo(Product);

// association between User and UserPaymentMethod
User.hasMany(UserPaymentMethod);
UserPaymentMethod.belongsTo(User);

// association between ShopOrder and UserReview
ShopOrder.hasMany(UserReview);
UserReview.belongsTo(ShopOrder);

// MANY TO MANY RELATIONSHIP

//  promotion to  Productcategory
}




