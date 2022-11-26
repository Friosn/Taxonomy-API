const OrderRoutes = require('express').Router()

const { getAllOrders, getOneOrder, patchOrder, postOrder, deleteOrder } = require('./order.controller')

const isAuth = require('../../middlewares/auth.middleware')

/**
 * @swagger
 * components:
 *  schemas:
 *    Order:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Name of the taxonomical Order
 *        feeding:
 *          type: string
 *          description: Nutritional orientation of this Order
 *        incisors:
 *          type: string
 *          description: Type of incisor of this Order
 *        class:
 *          type: string
 *          description: Belonging Class of this Order
 *        families:
 *          type: string
 *          description: Which Families do belong to this Order?
 *      required:
 *        - name
 *        - feeding
 *        - incisors
 *        - class
 *        - families
 *      example:
 *        - name : Crocodilia
 *        - feeding : Carnivore
 *        - incisors : Acrodontial, Pleurodontial and Thecodontial
 *        - class : Reptilia
 *        - families : Alligators, Caimaninae
 */
OrderRoutes.get('/', getAllOrders)
OrderRoutes.get('/:id', getOneOrder)
OrderRoutes.post('/', [isAuth], postOrder)
OrderRoutes.patch('/:id', [isAuth], patchOrder)
OrderRoutes.delete('/:id', [isAuth], deleteOrder)

module.exports = OrderRoutes
