const SpeciesRoutes = require('express').Router()
const { getAllSpecies, getOneSpecies, patchSpecies, postSpecies, deleteSpecies } = require('./species.controller')
const upload = require('../../middlewares/uploadImg.middleware')
const isAuth = require('../../middlewares/auth.middleware')

/**
 * @swagger
 * components:
 *  schemas:
 *    Species:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Name of the Species
 *        habitat:
 *          type: string
 *          description: Natural environment of the Species
 *        size:
 *          type: string
 *          description: Generic dimensions of the Species
 *        taxonomy:
 *          type: string
 *          description: Taxonomical order of the Species
 *        image:
 *          type: string
 *          description: Uploaded image of the Species
 *      required:
 *        - name
 *        - habitat
 *        - size
 *        - taxonomy
 *        - image
 *      example:
 *        - name : Saltwater Crocodile or Crocodylus porosus
 *        - habitat : Coasts of different regions of the Pacific Ocean
 *        - size : Enormous, around 5m long, the biggest Reptile of the earth
 *        - taxonomy : Reptiliae, Crocodilia, Crocodiliae
 *        - image : https://res.cloudinary.com/dotbanq20/image/upload/v1669490873/animalSpecies/SaltwaterCrocodile_Maximo_ra5c4v.jpg
 */

/**
 * @swagger
 * /species:
 *   get:
 *     summary: Return all the Species from the API
 *     tags: [Species]
 *     responses:
 *      200:
 *        description: All Species in the park 🦣!
 *        content:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/schemas/Species'
 */

SpeciesRoutes.get('/', getAllSpecies)

/**
 * @swagger
 * /species/:id:
 *   get:
 *     summary: Return one Species from the API
 *     tags: [Species]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Species'
 */
SpeciesRoutes.get('/:id', getOneSpecies)

/**
 * @swagger
 * /species/:
 *   post:
 *     summary: Creates a new Species in the document
 *     tags: [Species]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Species'
 *     responses:
 *      200:
 *        description: New Species added to the API 🧬!
 */
SpeciesRoutes.post('/', upload.single('image'), postSpecies)
SpeciesRoutes.patch('/:id', [isAuth], patchSpecies)
SpeciesRoutes.delete('/:id', [isAuth], deleteSpecies)

module.exports = SpeciesRoutes
