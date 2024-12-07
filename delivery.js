const express=require('express')
const mongoose=require('mongoose')
const app=express()
mongoose.connect('mongodb://localhost:27017/deliveryApp')
const deliverySchema=new mongoose.Schema({
    orderID:{type: Number , requried: true},
    orderConfirmation:{type: String, requried:true},
    shipped:{type:String, required:true},
    smsStatus:{type:String},
    outForDelivery:{type:String, required:true},
    deliveryelivered:{type:String, required:true},
});
const delivery=mongoose.model("delivery",deliverySchema)
app.get("/getUsers",(res,req)=>{
  delivery.find({}).then(function(user){
    res.json(user)
  }).catch(function(err){
    console.log(err);
  })
})
app.listen(3002,()=>{
  console.log("Connection done");
})