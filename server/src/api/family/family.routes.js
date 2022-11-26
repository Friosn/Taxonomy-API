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

/**
 * @swagger
 * /family:
 *      get:
 *        summary: Get ALL Families from the API
 *        tags: [Family]
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/shcemas/Family'
 */
FamilyRoutes.get('/', getAllFamilies)

/**
 * @swagger
 * /family/:id:
 *      get:
 *        summary: Get one Family from the API
 *        tags: [Family]
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/shcemas/Family'
 */
FamilyRoutes.get('/:id', getOneFamily)

/**
 * @swagger
 * /family/:
 *      post:
 *        summary: ADD a Family to de API
 *        tags: [Family]
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/shcemas/Family'
 *        responses:
 *          200:
 *            description: Family POSTED successfully in the API 🙌🏼!
 */
FamilyRoutes.post('/', [isAuth], postFamily)
FamilyRoutes.patch('/:id', [isAuth], patchFamily)
FamilyRoutes.delete('/:id', [isAuth], deleteFamily)

module.exports = FamilyRoutes
