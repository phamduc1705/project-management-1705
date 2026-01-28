const Product = require('../../models/products.models');
module.exports.product = async (req, res) => {
    const products = await Product.find({
        deleted: false
    });
    console.log(products);
  res.render("admin/page/product/index" ,{
    titlePage: "Trang san pham",
    products: products
  });
};