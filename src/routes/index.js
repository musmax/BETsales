const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const productRoute = require('./product.route');
const billingaddressRoute = require('./billingaddress.route');
const useraddressRoute = require('./useraddress.route')
const variationRoute = require('./variation.route')
const variationoptionRoute = require('./variationoption.route')
const webzRoute = require('./web.route');
const classificationRoute = require('./classification.route')
const userreviewRoute = require('./userreview.route')


const router = express.Router();

const defaultRoutes = [
  { path: '/users', route: userRoutes },
  { path: '/auth', route: authRoutes },
  { path: '/product', route: productRoute },
  { path: '/billingaddress', route: billingaddressRoute },
  { path: '/useraddress', route: useraddressRoute },
  { path: '/variation', route: variationRoute },
  { path: '/variationoption', route: variationoptionRoute },
  { path: '/web', route: webzRoute },
  { path: '/classification', route: classificationRoute },
  { path: '/userreview', route: userreviewRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
