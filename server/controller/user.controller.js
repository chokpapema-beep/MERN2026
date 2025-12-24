import { User } from "../schema/user.schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// CREATE USER
export const createUserController = async (req, res) => { 
  try {
    let data = req.body;
    let hashedPassword = await bcrypt.hash(data.password, 10);
    data = { ...data, password: hashedPassword };
    const result = await User.create(data);
    res.status(201).json({
       message: "User registered successfully" , result });
  } catch (error) {
    res.status(500).json({ 
      message: "Internal server error",
       error: error.message });
  }
};

// GET ALL USERS
export const getAllUserController = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json({ 
      message: "Users fetched successfully",
       data: result });
  } catch (error) {
    res.status(500).json({
       message: "Error fetching users", 
       error: error.message });
  }
};

// GET SPECIFIC USER
export const getSpecificUserController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ 
      message: "User fetched successfully",
       data: user });
  } catch (error) {
    res.status(500).json({ 
      message: "Internal server error",
       error: error.message });
  }
};

// LOGIN USER
export const loginUserController = async (req, res) => {
  try {
    const result = await User.findOne({ email: req.body.email });
    if (!result) return res.status(404).json({ 
      message: "Invalid Credentials" });

    const isValidPassword = await bcrypt.compare(req.body.password, result.password);
    if (!isValidPassword) return res.status(400).json({ 
      message: "Invalid Password" });

    const token = jwt.sign({ id: result._id, email: result.email }, "secret", { expiresIn: "1h" });
    res.status(200).json({
       message: "Login Successful", 
       data: result, token });
  } catch (error) {
    res.status(500).json({ 
      message: "Internal Server Error", 
      error: error.message });
  }
};

// UPDATE USER
export const updateUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await User.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({ 
      message: "User updated successfully",
       data: result });
  } catch (error) {
    res.status(500).json({
       message: "Internal Server Error", 
       error: error.message });
  }
};

// DELETE USER
export const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await User.findByIdAndDelete(id);
    res.status(200).json({ 
      message: "User deleted successfully", 
      data: result });
  } catch (error) {
    res.status(500).json({ 
      message: "Internal Server Error",
       error: error.message });
  }
};
