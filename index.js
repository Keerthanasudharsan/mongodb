const express=require('express')
const staff=require('./routes/staff')
const mongoose=require('mongoose')
const app=express()
mongoose.connect('mongodb://127.0.0.1:27017/staff')
mongoose.connection.on('connected',()=>{
    console.log ('mongodb is connected successfully')
})
app.get('/',(req,res)=>{
    res.send("home page")
})
app.use('/staff',staff)
app.listen(3001,()=>{
    console.log("server is running on port 3001")
})