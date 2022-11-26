const FamilyRoutes = require('express').Router()

const { getAllFamilies, getOneFamily, patchFamily, postFamily, deleteFamily } = require('./family.controller')

const isAuth = require('../../middlewares/auth.middleware')

/**
 * @swagger
 * components:
 *  schemas:
 *    Family:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Name of the taxonomical Family
 *        class:
 *          type: string
 *          description: Belonging Class of the Family
 *        order:
 *          type: string
 *          description: Belonging Order of the Family
 *        species:
 *          type: string
 *          description: Which Species belong to this Family?
 *      required:
 *        - name
 *        - class
 *        - order
 *        - species
 *      example:
 *        - name : Crocodylidae
 *        - class : Reptilia / Lizards
 *        - order : Crocodilia
 *        - species : Crocodylus porosus, Osteolaemus tetraspis, Crocodylus moreletii
 */
FamilyRoutes.get('/', getAllFamilies)
FamilyRoutes.get('/:id', getOneFamily)
FamilyRoutes.post('/', [isAuth], postFamily)
FamilyRoutes.patch('/:id', [isAuth], patchFamily)
FamilyRoutes.delete('/:id', [isAuth], deleteFamily)

module.exports = FamilyRoutes
