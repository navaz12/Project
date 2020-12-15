const { response } = require('express');
var express = require('express');
const product = require('../product/product');
var router = express.Router();
var productH=require('../product/product')

/* GET users listing. */
router.get('/', function(req, res, next) {
  productH.getAllproducts().then((products)=>{
    res.render('admin/view-products',{admin:true,products});
  })
  
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
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
router.get('/delete-product:id',(req,res)=>{
    let proId=req.query.id
    console.log(proId);
    productH.deleteProduct(proId).then((response)=>{
      res.redirect('/')
    })
});
router.get('/edit-product',async (req,res)=>{
  let product=await productH.getProductDetailes(req.params.id)
  console.log(product);
  res.render('admin/edit-product')
});



module.exports = router;
