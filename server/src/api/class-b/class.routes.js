const ClassRoutes = require('express').Router()
const { getAllClasses, getOneClass, getClassByName, patchClass, postClass, deleteClass } = require('./class.controller')

const isAuth = require('../../middlewares/auth.middleware')

/**
 * @swagger
 * components:
 *  schemas:
 *    Class:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Name of the biological Class
 *        reproduction:
 *          type: string
 *          description: Type of reproduction onf the Class
 *        incuvation:
 *          type: string
 *          description: How does this Class generate new life?
 *        skeleton:
 *          type: string
 *          description: What type of skeleton has this Class?
 *        skin:
 *          type: string
 *          description: What kind of skin does this Class has?
 *      required:
 *        - name
 *        - reproduction
 *        - incuvation
 *        - skeleton
 *        - skin
 *      example:
 *         name : Reptilia
 *         reproduction : Sexual
 *         incuvation : Eggs
 *         skeleton : Vertebrates with internal bony skeleton
 *         skin : Scales
 */

/**
 * @swagger
 * /class:
 *   get:
 *     summary: GET ALL the Species
 *     tags: [Class]
 *     responses:
 *      200:
 *        description: All Classes in the park 🦣!
 *        content:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Species'
 */
ClassRoutes.get('/', getAllClasses)

/**
 * @swagger
 * /class/{id}:
 *    get:
 *      summary: GET ONE Class BY ID
 *      tags: [Class]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The species ID
 *      responses:
 *         200:
 *           description: You got the ID right!
 *           content:
 *             application/json:
 *               schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Class'
 *         400:
 *           description: Class not found
 *
 */
ClassRoutes.get('/:id', getOneClass)

/**
 * @swagger
 * /class/name/{name}:
 *    get:
 *      summary: GET ONE Class BY NAME
 *      tags: [Class]
 *      parameters:
 *        - in: path
 *          name: name
 *          schema:
 *            type: string
 *          required: true
 *          description: The Class NAME
 *      responses:
 *         200:
 *           description: You got the name right!
 *           content:
 *             application/json:
 *               schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Class'
 *         404:
 *           description: Class not found
 *
 */
ClassRoutes.get('/name/:name', getClassByName)

/**
 * @swagger
 * /class/:
 *   post:
 *     summary: CREATE a new Class
 *     tags: [Class]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: New Class added to the API 🧬!
 */
ClassRoutes.post('/', [isAuth], postClass)

/**
 * @swagger
 * /class/patch/{id}:
 *    patch:
 *      summary: UPDATE Class BY ID
 *      tags: [Class]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The Class ID
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Class'
 *      responses:
 *         200:
 *           description: Class successfully updated
 *         400:
 *           description: Class not found
 *
 */
ClassRoutes.patch('/patch/:id', [isAuth], patchClass)

/**
 * @swagger
 * /class/{id}:
 *    delete:
 *      summary: DELETE Class BY ID
 *      tags: [Class]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The Class ID
 *      responses:
 *         200:
 *           description: Class deleted ❎
 *         400:
 *           description: Class not found
 *
 */
ClassRoutes.delete('/:id', deleteClass)

module.exports = ClassRoutes
