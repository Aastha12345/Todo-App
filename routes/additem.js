const express=require('express');
const router = express.Router({
    mergeParams: true
});
const todomodel=require('../models/todomodel')


router.get('/add',function(req,res){
    todomodel.find({},(err,alltodos)=>{
        if(err)
        {
            res.send({
                success:false,
                message:'Something went wrong in additem.js'
            })
        }
        else{
            res.render('index',{todos:alltodos})
        }
    })
});

router.post('/add',function(req,res){
    var todoitem=new todomodel({
        item:req.body.item,
        dateofwriting:new Date()
    })

    todoitem.save(function(err){
        if(err)
        {
            console.log(err);
            res.send({
                success:false,message:'Something went wrong in additem.js'
            })
        }
        else{
            res.redirect('/todo/add')
        }
    })
})

router.post('/delete/:_id',function(req,res){
    todomodel.findOneAndDelete({_id:req.params._id},(err,item)=>{
        if(err)
        {
            console.log(err);
            res.send({success:false,message:'Something went wrong in additem.js'})
        }
        else{
            res.redirect('/todo/add')
        }
    })
})


module.exports=router;