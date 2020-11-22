var db = require("../config/connection");
var collections=require('../config/collections')
const bcrypt=require('bcrypt');
const { response } = require("../app");
module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
        userData.password=await bcrypt.hash(userData.password,10)
        db.get()
            .collection(collections.USER_COLLECTION)
            .insertOne(userData)
            .then((data)=>{
            resolve(data.ops[0])
        })
         
    })
    }
}