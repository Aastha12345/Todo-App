const mongoose=require('mongoose');

const todoschema = new mongoose.Schema({
    item:{
        type:String
    },
    dateofwriting:{
        type:Date
    }
})

module.exports=mongoose.model('todo',todoschema)