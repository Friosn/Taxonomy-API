const ClassRoutes = require('express').Router()
const { getAllClasses, getOneClass, getClassByName,patchClass, postClass, deleteClass } = require('./class.controller')

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
 *        - name : Reptilia
 *        - reproduction : Sexual
 *        - incuvation : Eggs
 *        - skeleton : Vertebrates with internal bony skeleton
 *        - skin : Scales
 */
ClassRoutes.get('/', getAllClasses)
ClassRoutes.get('/:id', getOneClass)
ClassRoutes.get('/:name', getClassByName)
ClassRoutes.post('/', [isAuth], postClass)
ClassRoutes.patch('/patch/:id', [isAuth], patchClass)
ClassRoutes.delete('/delete/:id', [isAuth], deleteClass)

module.exports = ClassRoutes
