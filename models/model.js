const mongoose=require('mongoose')
const staffSchema=new mongoose.Schema({
    name:String,
    age:Number
})
const staffModle=mongoose.model('staff',staffSchema)
module.exports=staffModle