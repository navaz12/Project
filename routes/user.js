var express = require("express");
const { response } = require("../app");
var router = express.Router();
var productH=require('../product/product')
const usersH=require('../product/user-help')

/* GET home page. */
router.get("/", function (req, res, next) {
let user=req.session.user
  productH.getAllproducts().then((products)=>{
    res.render('user-view/view-product',{products,user});
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
router.post('/Login',(req,res)=>{
    usersH.doLogin(req.body).then((response)=>{
      if(response.status){
        req.session.loogedIn=true
        req.session.user=response.user
        res.redirect('/')
      }else{
        res.redirect('/login')
      }
    })
})


module.exports = router;
