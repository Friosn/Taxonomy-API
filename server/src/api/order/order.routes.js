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

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Return ALL the Orders from the API
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Order'
 */
OrderRoutes.get('/', getAllOrders)

/**
 * @swagger
 * /order/:id:
 *   get:
 *     summary: Return one Order from the API
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Order'
 */
OrderRoutes.get('/:id', getOneOrder)

/**
 * @swagger
 * /order/:
 *   post:
 *     summary: Add one Order to the API
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: New Order added to the API 🦖!
 */
OrderRoutes.post('/', [isAuth], postOrder)
/**
 * @swagger
 * /order/:id:
 *   patch:
 *     summary: Add one Order to the API
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Order updated in the API 🦕!
 */
OrderRoutes.patch('/:id', [isAuth], patchOrder)

/**
 * @swagger
 * /order/:id:
 *   delete:
 *     summary: Add one Order to the API
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Order REMOVED from the API 🐾!
 */
OrderRoutes.delete('/:id', [isAuth], deleteOrder)

module.exports = OrderRoutes
