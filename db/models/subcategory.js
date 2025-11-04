const mongoose=require('mongoose')
const subCategorySchema=new mongoose.Schema({
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
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
})

const SubCategory=mongoose.model('SubCategory',subCategorySchema)
module.exports=SubCategory