const productmodels = require("../../models/products.models");

module.exports.index = async (req, res) => {
  try {
    const products = await productmodels.find({ deleted: false });  // Chỉ lấy sản phẩm chưa xóa
    console.log("Sản phẩm từ DB:", products);
    res.render("client/page/product/index", {
      titlePage: "Trang sản phẩm",
      products: products
    });
  } catch (error) {
    console.error("Lỗi khi lấy sản phẩm:", error);
    res.status(500).send("Lỗi server: " + error.message);
  }
};