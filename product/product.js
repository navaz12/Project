var db = require("../config/connection");
var collections = require("../config/collections");
var objectId=require('mongodb').ObjectId

module.exports = {
  addProduct: (product, callback) => {
    console.log(product);

    db.get()
      .collection("product")
      .insertOne(product)
      .then((data) => {
        callback(data.ops[0]._id);
      });
  },
  getAllproducts: () => {
    return new Promise(async (resolve, reject) => {
      let product = db.get().collection(collections.PRODUCT).find().toArray();
      resolve(product);
    });
  },
  deleteProduct:(proId)=>{
    return new Promise((resolve,reject)=>{
      db.get().collection(collections.PRODUCT).removeOne({_id:objectId(proId)}).then((response)=>{
        console.log(response);
        resolve(response)
      })
    })
  }
};
