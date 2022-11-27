const Order = require('./order.model.js')

const setError = require('../../helper/error/handle.error')

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('order class species')
    res.json({
      status: 200,
      message: 'All Orders recovered!',
      data: { orders }
    })
  } catch (error) {
    return next(setError(500, 'Failiure recovering Orders 🍂'))
  }
}

const getOneOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const clase = await Order.findById(id)
    res.json({
      status: 200,
      message: 'Single Order recovered successfully!',
      data: { clase }
    })
  } catch (error) {
    return next(setError(500, 'Failiure recovering single Order 🍂'))
  }
}

const postOrder = async (req, res, next) => {
  try {
    const newOrder = new Order(req.body)
    const newOrderToDB = await newOrder.save()
    return res.json({
      status: 200,
      message: 'New Order successfully added 🦖',
      newOrderToDB
    })
  } catch (error) {
    return next(setError(500, 'Failiure posting new Order 🍂'))
  }
}

const patchOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const OrderToPatch = new Order(req.body)
    OrderToPatch._id = id
    const updateOrder = await Order.findByIdAndUpdate(id, OrderToPatch)
    res.json({
      status: 200,
      message: 'Update made successfully!',
      data: { updateOrder }

    })
  } catch (error) {
    return next(setError(500, 'Failiure updating Order 🍂'))
  }
}

const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const OrderToDelete = await Order.findByIdAndDelete(id)
    return res.json({
      status: 200,
      message: 'Order deleted successfully!',
      data: { OrderToDelete }
    })
  } catch (error) {
    return next(setError(500, 'Failiure deleting Order 🍂'))
  }
}

module.exports = { getAllOrders, getOneOrder, patchOrder, postOrder, deleteOrder }
