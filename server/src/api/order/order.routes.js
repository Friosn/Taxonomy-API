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
 *        name : Crocodilia
 *        feeding : Carnivore
 *        incisors : Acrodontial, Pleurodontial and Thecodontial
 */

/**
 * @swagger
 * /order:
 *   get:
 *     summary: GET ALL the Orders
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
 *     summary: GET ONE Order
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
 *     summary: ADD ONE Order
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
 *         description: New Order added ????!
 */

OrderRoutes.post('/', postOrder)

/**
 * @swagger
 * /order/{id}:
 *    patch:
 *      summary: UPDATE Order BY ID
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Order'
 *      responses:
 *         200:
 *           description: Order successfully updated
 *         400:
 *           description: Order not found
 *
 */
OrderRoutes.patch('/:id', patchOrder)

/**
 * @swagger
 * /order/:id:
 *   delete:
 *     summary: REMOVE ONE Order
 *     tags: [Orders]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Order REMOVED successfully ????!
 */
OrderRoutes.delete('/:id', [isAuth], deleteOrder)

module.exports = OrderRoutes
