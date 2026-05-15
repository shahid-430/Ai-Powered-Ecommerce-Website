import Order from "../model/orderModel.js";
import User from "../model/userModel.js";

export const ORDER_STATUSES = [
  "Order Placed",
  "Packing",
  "Shipped",
  "Out for delivery",
  "Delivered",
  "Cancelled",
];

const CANCELLABLE_STATUSES = ["Order Placed", "Packing"];

const canCancel = (status) => CANCELLABLE_STATUSES.includes(status);

export const PlaceOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    const userId = req.userId;
    const orderData = {
      items,
      amount,
      userId,
      address,
      PaymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new Order(orderData);
    await newOrder.save();

    await User.findByIdAndUpdate(userId, { cartData: {} });

    return res.status(201).json({ message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Order Place error" });
  }
};

export const userOrders = async (req, res) => {
  try {
    const userId = req.userId;
    const orders = await Order.find({
      userId,
      deletedByUser: { $ne: true },
    }).sort({ date: -1 });
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to load orders" });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      deletedByAdmin: { $ne: true },
    }).sort({ date: -1 });
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to load orders" });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!ORDER_STATUSES.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.status === "Cancelled" && status !== "Cancelled") {
      return res.status(400).json({ message: "Cannot change status of a cancelled order" });
    }

    order.status = status;
    await order.save();

    return res.status(200).json({ message: "Status updated", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update status" });
  }
};

export const updateOrderTracking = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { trackingNumber } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.trackingNumber = trackingNumber?.trim() || "";
    await order.save();

    return res.status(200).json({ message: "Tracking updated", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update tracking" });
  }
};

const cancelOrderById = async (orderId, res) => {
  const order = await Order.findById(orderId);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  if (order.status === "Cancelled") {
    return res.status(400).json({ message: "Order is already cancelled" });
  }

  if (!canCancel(order.status)) {
    return res.status(400).json({
      message: "Order can only be cancelled before it is shipped",
    });
  }

  order.status = "Cancelled";
  await order.save();

  return res.status(200).json({ message: "Order cancelled", order });
};

export const cancelOrderUser = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.userId !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    return cancelOrderById(orderId, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to cancel order" });
  }
};

export const cancelOrderAdmin = async (req, res) => {
  try {
    const { orderId } = req.params;
    return cancelOrderById(orderId, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to cancel order" });
  }
};

export const deleteOrderUser = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.userId !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (order.status !== "Cancelled") {
      return res.status(400).json({
        message: "Only cancelled orders can be removed",
      });
    }

    order.deletedByUser = true;
    await order.save();

    return res.status(200).json({ message: "Order removed from your list" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete order" });
  }
};

export const deleteOrderAdmin = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.status !== "Cancelled") {
      return res.status(400).json({
        message: "Only cancelled orders can be removed",
      });
    }

    order.deletedByAdmin = true;
    await order.save();

    return res.status(200).json({ message: "Order removed from admin list" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete order" });
  }
};
