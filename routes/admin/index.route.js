const dashboard = require('./dashboard.route');
const system = require('../../config/system');
const product = require('./product.route');
module.exports = function(app) {
    const PATH_ADMIN = system.prefixAdmin;
    app.use(PATH_ADMIN + '/dashboard', dashboard);
    app.use(PATH_ADMIN + '/products', product);
}
