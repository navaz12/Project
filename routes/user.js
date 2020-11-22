var express = require("express");
const { response } = require("../app");
var router = express.Router();
var productH=require('../product/product')
const usersH=require('../product/user-help')

/* GET home page. */
router.get("/", function (req, res, next) {

  productH.getAllproducts().then((products)=>{
    res.render('user-view/view-product',{products});
  })
  
});
router.get('/Login',(req,res)=>{
  res.render('user-view/Login')
})
router.get('/Signup',(req,res)=>{
  res.render('user-view/Signup')
})
router.post('/Signup',(req,res)=>{
  usersH.doSignup(req.body).then((response)=>{
    console.log(response);
  })
})


module.exports = router;
