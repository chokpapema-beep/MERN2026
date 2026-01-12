import { Products } from "../schema/product.schema.js";


export const createProductController = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await Products.create(data);
    res.status(201).json({ message: "Product created successfully", data: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to create product", error: error.message });
  }
};

export const getAllProductController = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: "All products retrieved successfully", data: products });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve products", error: error.message });
  }
};

export const getSpecificProductController = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Specific product fetched", data: product });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updated = await Product.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({ message: "Product updated successfully", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully", data: deleted });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
