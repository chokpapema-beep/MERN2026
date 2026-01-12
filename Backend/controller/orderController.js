import { Order } from "../schema/order.schema.js";
import { Products } from "../schema/product.schema.js";



export const createOrderController = async (req, res) => {
  try {
    const data = req.body;
    const orderQuantity = data.quantity;
    const id = data.productId;

    const product = await Products.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (orderQuantity > product.quantity) {
      return res.status(400).json({
        message: "Order quantity is greater than product quantity",
      });
    }

    const order = await Order.create(data);

    const result = await Products.findByIdAndUpdate(
      id,
      { quantity: product.quantity - orderQuantity },
      { new: true }
    );

    res.status(201).json({
      message: "Order created successfully",
      data: order,
      updatedProduct: result,
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


// export const createOrderController = async (req, res) => {
//   try {
//     let data = req.body;

//     let orderQuantity = data.quantity; // User le pathako quantity req.body bata aayera orderQuantity ma return garcha
//     const id = data.productId; // user le pathako productId req.body bata aayera id ma return garcha
//     const product = await Products.findById(id); // user le pathako productId anushar ko euta Product ko details product variable ma return garcha

//     if (orderQuantity > product.quantity) {
//       //if the order quantity of user is greater than products quantity we need to respond user with error.
//       res.status(400).json({
//         message: "Order quantity is greater than product quantity",
//       });
//     } else {
//       // else block is needed if the above condition is satisfied then only we'll need to create order in database and update product so inorder to avoid the data inconsistency we will use else block
//       const order = await Order.create(data); // The order will only be created if the orderQuantity is not greater than products quantity

//       const result = await Product.findByIdAndUpdate(
//         // Order create bhayesi product uodate garcha rw product ko quantity lai orderQuantity sanga reduce garcha
//         id,
//         { quantity: product.quantity - orderQuantity },
//         { new: true }
//       );

//       res.status(201).json({
//         message: "Order created successfully",
//         data: order,
//         result: result,
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };


// // GET ALL ORDERS
// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.status(200).json({
//       message: "All orders retrieved successfully",
//       orders
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to retrieve orders",
//       error: error.message
//     });
//   }
// };

// // GET SPECIFIC ORDER
// export const getOrderById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const order = await Order.findById(id);
//     if (!order) return res.status(404).json({ 
//       message: "Order not found" });

//     res.status(200).json({
//       message: "Order fetched successfully",
//       order
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal Server Error",
//       error: error.message
//     });
//   }
// };

// // UPDATE ORDER (e.g., status, products)
// export const updateOrder = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = req.body;

//     const updatedOrder = await Order.findByIdAndUpdate(id, data, { new: true });
//     if (!updatedOrder) return res.status(404).json({ 
//       message: "Order not found" });

//     res.status(200).json({
//       message: "Order updated successfully",
//       order: updatedOrder
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal Server Error",
//       error: error.message
//     });
//   }
// };

// // DELETE ORDER
// export const deleteOrder = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const deletedOrder = await Order.findByIdAndDelete(id);
//     if (!deletedOrder) return res.status(404).json({ 
//       message: "Order not found" });

//     res.status(200).json({
//       message: "Order deleted successfully",
//       order: deletedOrder
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal Server Error",
//       error: error.message
//     });
//   }
// };
