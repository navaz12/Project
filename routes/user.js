var express = require("express");
var router = express.Router();
var productH=require('../product/product')

/* GET home page. */
router.get("/", function (req, res, next) {

  productH.getAllproducts().then((products)=>{
    res.render('user-view/view-product',{admin:true,products});
  })
  
});

module.exports = router;
