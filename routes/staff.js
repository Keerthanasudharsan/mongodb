const express=require('express')
const bodyParser=require('body-parser')
const StaffModle=require('../models/model')
const router=express.Router()
router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send("staffs page")
})
router.post('/post',(req,res)=>{
     console.log(req.body)
     const newstaff=new StaffModle(req.body)
     newstaff.save()
     .then(response=>console.log(response))
     .catch(err=>console.log(err))
     res.send('staff posting page')
})
router.get('/get',(req,res)=>{
    StaffModle.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
router.get('/get/:id',(req,res)=>{
    StaffModle.findById(req.params.id)
    .then(response=>res.send(response))
    .catch(err=>console.log(err))

})
router.put('/update/:id',(req,res)=>{
    console.log(req.params.id,req.body)
    StaffModle.findByIdAndUpdate(req.params.id,req.body)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("update page")

})
router.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id)
    StaffModle.findByIdAndDelete(req.params.id)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("delete page")

})
module.exports=router