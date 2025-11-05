const Item=require('../db/models/item')

const createItem=async(req,res)=>{
    try {
        const {name,image,description,taxApplicability,TaxNumber,BaseAmount,Discount,TotalAmount,subCategoryId,categoryId}=req.body 
        if(!name || !BaseAmount){
            return res.status(400).json({
                message:"Name and BaseAmount are required"
            })
        }
        // Atlease one should be present
        if (!categoryId && !subCategoryId) {
        return res.status(400).json({
            message: "Either categoryId or subCategoryId is required"
        });
        }

        // If both are not there
        if (subCategoryId && !categoryId) {
        return res.status(400).json({
            message: "CategoryId is required when SubCategoryId is provided"
        });
        }
        const item=new Item({
            name,image,description,taxApplicability,TaxNumber,BaseAmount,Discount,TotalAmount,subCategoryId,categoryId
        })
        await item.save();
        return res.status(200).json({
            message:"item created successfully",
            item
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

const getAllItems=async(req,res)=>{
    try {
        const items=await Item.find()
        return res.status(200).json({
            items
        })        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

const getItemDetails=async(req,res)=>{
    const itemId=req.params.id
    try {
        const item=await Item.findById(itemId);
        if(!item){
            return res.status(404).json({
                message:"Item not found"
            })
        }
        return res.status(200).json({
            item
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

const getItemsUnderCategory=async(req,res)=>{   
    const categoryId=req.params.categoryid
    try {
        console.log("Category ID:", categoryId);
        const items=await Item.find({categoryId:categoryId})
        return res.status(200).json({
            items
        })        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
const getItemsUnderSubCategory=async(req,res)=>{   
    const subCategoryId=req.params.subcategoryId
    try {
        const items=await Item.find({subCategoryId:subCategoryId})
        return res.status(200).json({
            items
        })        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

const editItem=async(req,res)=>{
    try {
        const itemId=req.params.id
        const {name,image,description,taxApplicability,TaxNumber,BaseAmount,Discount,TotalAmount,subCategoryId,categoryId}=req.body;
        const newItem=await Item.findByIdAndUpdate(itemId,{
            name,image,description,taxApplicability,TaxNumber,BaseAmount,Discount,TotalAmount,subCategoryId,categoryId
            },{new:true}
        )
        if(!newItem){
            return res.status(404).json({
                message:"Category was not found",
                error:error.message
            })
        }
        return res.status(200).json({
            newItem
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}

const searchItem=async(req,res)=>{
    
    try {
        const {name}=req.body;
        const items=await Item.find({name:name})    
        return res.status(200).json({
            items:items?items:[]
        })    
    } catch (error) {
        return res.status(500).json({
            error:error.message,
            message:"Internal server error"
        })
    } 

}

module.exports={createItem,getAllItems,editItem,getItemsUnderCategory,getItemsUnderSubCategory,getItemDetails,searchItem}