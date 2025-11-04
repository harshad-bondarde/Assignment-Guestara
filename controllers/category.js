const Category=require('../db/models/category')

const createCategory=async(req,res)=>{
    try{
        const {name,image,description,taxApplicability,TaxNumber}=req.body
        const category=await Category.create({
            name,
            image,
            description,
            taxApplicability,
            TaxNumber
        })
        res.status(200).json({message:"Category created successfully",category})
    }catch(error){
        res.status(500).json({message:"Internal server error",error:error.message})
    }
}

const getCategories=async(req,res)=>{
    try{
        const categories=await Category.find()
        res.status(200).json({categories})
    }
    catch(error){
        res.status(500).json({message:"Internal server error",error:error.message})
    }
}

const getCategoryDetails=async(req,res)=>{
    try {
        const categoryId=req.params.id
        const category=await Category.findById(categoryId)
        if(!category){
            return res.status(404).json({
                message:"Category not found"
            })
        }
        return res.status(200).json({
            category
        })

    } catch (error) {
        return res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
    }
}

const editCategory=async(req,res)=>{
    try {
        const categoryId=req.params.id
        const {name,image,description,taxApplicability,TaxNumber}=req.body
        const category=await Category.findByIdAndUpdate(categoryId,{
            name,
            image,
            description,
            taxApplicability,
            TaxNumber
        },{new:true,runValidators:true})
        if(!category){
            return res.status(404).json({
                message:"Category not found"
            })
        }
        return res.status(200).json({
            message:"Category updated successfully",
            category
        })  
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
    }
}

module.exports={createCategory,getCategories,getCategoryDetails,editCategory}