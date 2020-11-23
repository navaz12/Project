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
    },
    doLogin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginstatus=false
            let response={}
            let user=await db.get().collection(collections.USER_COLLECTION).findOne({email:userData.email})
            if(user){
                bcrypt.compare(userData.password,user.password).then((status)=>{
                   if(status){
                        console.log('Login success');
                        response.user=user
                        response.status=true
                        resolve(response)
                   }else{
                        console.log('login failed');
                        resolve({status:false})
                   }
                   
                })
            }else{
                console.log('login failed');
                resolve({status:false})
            }
        })
    }
}