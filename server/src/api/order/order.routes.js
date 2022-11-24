const OrderRoutes = require('express').Router()

const { getAllOrders, getOneOrder, patchOrder, postOrder, deleteOrder } = require('./order.controller')

OrderRoutes.get('/', getAllOrders)
OrderRoutes.get('/:id', getOneOrder)
OrderRoutes.post('/', postOrder)
OrderRoutes.patch('/:id', patchOrder)
OrderRoutes.delete('/:id', deleteOrder)

module.exports = OrderRoutes
