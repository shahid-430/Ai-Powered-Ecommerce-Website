import uploadOnCloudinary from "../config/cloudinary.js"
import Product from "../model/productModel.js"

export const addProduct = async(req,res)=>{
    try{
     let {name,description,price,category,subcategory,sizes,bestseller}=req.body
    
     let image1 = await uploadOnCloudinary(req.files.image1[0].path)
     let image2 = await uploadOnCloudinary(req.files.image2[0].path)
     let image3 = await uploadOnCloudinary(req.files.image3[0].path)
     let image4 = await uploadOnCloudinary(req.files.image4[0].path)

     let productData={
        name,
        description,
        price:Number(price),
        category,
        subcategory,
        sizes:JSON.parse(sizes),bestseller:bestseller==="true"? true : false
        ,date:Date.now(),
        image1,
        image2,
        image3,
        image4
     }

     const product= await Product.create(productData)

     return res.status(201).json(product)


    }
    catch(error){
        
     console.log("addProduct error:",error)

        return res.status(401).json({message:`Product adding error ${error}`}) 
    

    }
}





export const listProducts = async(req,res)=>{
    try{
        const products = await Product.find({})
        return res.status(200).json(products)
    }
    catch(error){
        console.log("listProducts error:",error)
        return res.status(401).json({message:`Product listing error ${error}`}) 
    }
}



export const removeProduct = async(req,res)=>{
    try{
        let {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        return res.status(200).json({message:"Product removed successfully" ,product})
    }
    catch(error){
        console.log("removeProduct error:",error)
        return res.status(401).json({message:`Product removing error ${error}`}) 
    }   
}

export const updateProduct = async(req,res)=>{
    try{
        let {id} = req.params
        let {name,description,price,category,subcategory,sizes,bestseller}=req.body
        
        let updateData = {
            name,
            description,
            price: Number(price),
            category,
            subcategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true" ? true : false
        }

        // Handle image updates if provided
        if(req.files){
            if(req.files.image1 && req.files.image1[0]){
                updateData.image1 = await uploadOnCloudinary(req.files.image1[0].path)
            }
            if(req.files.image2 && req.files.image2[0]){
                updateData.image2 = await uploadOnCloudinary(req.files.image2[0].path)
            }
            if(req.files.image3 && req.files.image3[0]){
                updateData.image3 = await uploadOnCloudinary(req.files.image3[0].path)
            }
            if(req.files.image4 && req.files.image4[0]){
                updateData.image4 = await uploadOnCloudinary(req.files.image4[0].path)
            }
        }

        const product = await Product.findByIdAndUpdate(id, updateData, {new: true})
        return res.status(200).json({message:"Product updated successfully", product})
    }
    catch(error){
        console.log("updateProduct error:",error)
        return res.status(401).json({message:`Product updating error ${error}`}) 
    }   
}