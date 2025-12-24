
import { product } from "../schema/product.schema.js";

// Create Product
export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await product.create(data);

    res.json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.json({ error: "Failed to create product" });
  }
};

// get all product
export const getAllProduct = async (req, res) => {
  try {
    const products = await product.find();

    res.status(200).json({
      message: "All products retrieved successfully",
      products: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve products",
      error: error.message,
    });
  }
};

export const getSpecificProductController = async (req,res) => {
    try {
    
       let id = req.params.id; // dynamic route bata value get garna parey req.params.id user garnu parcha
        const result = await Product.findById(id)

        res.status(200).json({
            message:"Specific Product fetched ",
            data: result
        })
    } catch (error) {
          res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const updateProductController = async(req,res) => {
  try {
    let id = req.params.id
    let data = req.body
    console.log(id)
    const result = await product.findByIdAndUpdate(id, data, {new:true});
    res.status(200).json({
      message: "Product updated successfully",
      data: result
    })
  } catch (error) {
    res.status(500).json({
            message: "Internal Server Error",
            error: error.message
    });
    
  }
}

export const deleteProductController = async(req,res) => {
  try {
    let id = req.params.id
    const result = await product.findByIdAndDelete(id)
    res.status(200).json({
      message: "product deleted successfully",
      data: result
    })
  } catch (error) {
    res.status(500).json({
            message: "Internal Server Error",
            error: error.message
    });
    
  }
}
