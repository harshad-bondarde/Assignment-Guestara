const express=require("express")
const router=express.Router();
const {createCategory,getCategories,getCategoryDetails,editCategory}=require('../controllers/category')
const {createSubCategory,getSubCategories,getSubCategoryDetails,editSubCategory}=require('../controllers/subCategory')
const {createItem,getAllItems,editItem,getItemsUnderCategory,getItemsUnderSubCategory,getItemDetails,searchItem}=require('../controllers/item')

router.post("/category/create",createCategory);
router.get("/categories",getCategories);//   all categories
router.get("/category-details/:id",getCategoryDetails); //with all attributes
router.put("/category/edit/:id",editCategory);

router.post("/subcategory/create/:categoryid",createSubCategory); //take categoryid as input 
router.get("/subcategories",getSubCategories); //all subcategories
router.get("/subcategory-details/:id",getSubCategoryDetails); //with all attributes
router.put("/subcategory/edit/:id",editSubCategory);    

router.post("/categories/:categoryId/items", createItem);
router.post("/categories/:categoryId/subcategories/:subCategoryId/items", createItem); //since subcategoryid is optional 
router.get("/items",getAllItems); //all items
router.get("/item-details/:id",getItemDetails); //with all attributes
router.get("/category/items/:categoryid",getItemsUnderCategory);
router.get("/subcategory/items/:subcategoryid",getItemsUnderSubCategory);
router.put("/items/edit/:id",editItem);
router.get("/search",searchItem);


module.exports=router;