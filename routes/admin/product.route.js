const express= require('express');
const router = express.Router();
const productcontroller =require("../../controller/admin/product.controller");

router.get('/', productcontroller.product);
module.exports = router;