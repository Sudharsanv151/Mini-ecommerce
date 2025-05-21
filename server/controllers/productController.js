const productModel=require('../models/productModel');

// - /api/v1/products
exports.getProducts= async (req,res,next)=>{
    
    const products=await productModel.find({});
    
    res.json({
        success:true,
        products    
    })
}

// - /api/v1/products/:id
exports.getSingleProduct= async (req,res,next)=>{

    try{
        const product=await productModel.findById(req.params.id);
    
        res.json({
            success:true,
            product
        })
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:'Unable to get product with that Id'
        })
    }
}

