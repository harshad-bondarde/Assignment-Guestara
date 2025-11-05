const mongoose=require('mongoose')
const itemSchema=new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    taxApplicability:{
        type:Boolean
    },
    TaxNumber:{
        type:Number,
        required:false
    },
    BaseAmount:{
        type:Number
    },
    Discount:{
        type:Number
    },
    TotalAmount:{
        type:Number
    },
    // since items can be belong to either category or subcategory
    subCategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubCategory"
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
})

const Item=mongoose.model('Item',itemSchema)
module.exports=Item