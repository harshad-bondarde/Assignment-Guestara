const SubCategory=require('../db/models/subcategory')

const createSubCategory=async(req,res)=>{
    try {
        const categoryId=req.params.categoryid
        const {name,image,description,taxApplicability,TaxNumber}=req.body
        const subCategory=await SubCategory.create({
            name,
            image,
            description,
            taxApplicability,
            TaxNumber,
            categoryId
        })
        return res.status(201).json({
            message:"SubCategory created successfully",
            subCategory
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

const getSubCategories=async(req,res)=>{
    try {
        const subCategories=await SubCategory.find()   
        return res.status(200).json({
            subCategories
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

const getSubCategoryDetails=async(req,res)=>{
    try {
        const subCategoryId=req.params.id
        const subCategory=await SubCategory.findById(subCategoryId)
        if(!subCategory){
            return res.status(404).json({
                message:"SubCategory not found"
            })
        }
        return res.status(200).json({
            subCategory
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
const editSubCategory=async(req,res)=>{
    try {
        const subCategoryId=req.params.id
        const {name,image,description,taxApplicability,TaxNumber}=req.body
        const subCategory=await SubCategory.findByIdAndUpdate(subCategoryId,{
                name,
                image,
                description,
                taxApplicability,
                TaxNumber
            },{new:true,runValidators:true}   
        )
        if(!subCategory){
            return res.status(404).json({
                message:"SubCategory not found",
            })
        }
        return res.status(200).json({
            subCategory
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

module.exports={createSubCategory,getSubCategories,getSubCategoryDetails,editSubCategory}   




