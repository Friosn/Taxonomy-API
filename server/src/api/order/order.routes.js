const OrderRoutes = require('express').Router()

const { getAllOrders, getOneOrder, patchOrder, postOrder, deleteOrder } = require('./order.controller')

const isAuth = require('../../middlewares/auth.middleware')
OrderRoutes.get('/', getAllOrders)
OrderRoutes.get('/:id', getOneOrder)
OrderRoutes.post('/', [isAuth], postOrder)
OrderRoutes.patch('/:id', [isAuth], patchOrder)
OrderRoutes.delete('/:id', [isAuth], deleteOrder)

module.exports = OrderRoutes
