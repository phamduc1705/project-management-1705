const productroute = require('./product.route');
const homeRoute = require('./home.route');
module.exports = function(app) {
    app.use('/', homeRoute);
    app.use('/products', productroute);
}
