const mongoose=require('mongoose')
const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    taxApplicability:{
        type:Boolean,
        default:false
    },
    TaxNumber:{
        type:Number,
        required:false,
        default:0
    },
})

const Category=mongoose.model('Category',categorySchema)
module.exports=Category