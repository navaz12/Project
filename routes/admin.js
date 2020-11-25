var express = require('express');
var router = express.Router();
var productH=require('../product/product')

/* GET users listing. */
router.get('/', function(req, res, next) {
  productH.getAllproducts().then((products)=>{
    res.render('admin/add-product',{admin:true,products});
  })
});
router.get('/add-product',function(req,res){
  res.render('admin/view-product')
});
router.post('/add-product',(req,res)=>{
    productH.addProduct(req.body,(id)=> {
      let image=req.files.Image
      image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
        if(!err){
          res.render("admin/add-product")
        }
        else{
          console.log(err);
        }
      })
      res.render('admin/add-product')
      
    });
    
});

module.exports = router;
