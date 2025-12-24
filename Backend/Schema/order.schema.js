import mongoose from "mongoose";

export const orderSchema = new mongoose.Schema({
  productId: { 
    type: String,
    required: [true, "Product ID is required"]
  },

  quantity: {
    type: Number,
    required: [true, "quantity is required"]
  },

  totalPrice: {
    type: Number,
    required: [true, "totalPrice is required"]
  },

  userInfo: {
    fullName: {
      type: String,
      required: [true, "fullName is required"]
    },
    email: {
      type: String,
      required: [true, "email is required"]
    },
    address: {
      type: String,
      required: [true, "address is required"]
    },
    city: {
      type: String,
      required: [true, "city is required"]
    },
    phone: {
      type: Number,
      required: [true, "phone is required"]
    }
  },

  status: {
    type: String,
    enum: ["ongoing", "delivered", "cancelled"],
    default: "ongoing"
  }
});

export const Order = mongoose.model("Order", orderSchema);
