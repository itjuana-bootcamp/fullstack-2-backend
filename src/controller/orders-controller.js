const OrderService = require("../services/orders-service");

const saveOrder = async (req, res) => {
  const order = req.body;

  const savedOrder = await OrderService.saveOrder(order);

  res.status(200).json(savedOrder);
};

module.exports = {
  saveOrder,
};
