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
 *     summary: Get all species
 *     responses:
 *       '200':
 *           description: List of species
 *     tags: [species]
 *     description: You can get a list of all Species
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - habitat
 *               - size
 *               - taxonomy
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *               habitat:
 *                 type: string
 *               size:
 *                 type: string
 *               taxonomy:
 *                 type: string
 *               image:
 *                 type: string
 */

SpeciesRoutes.get('/', getAllSpecies)
SpeciesRoutes.get('/:id', getOneSpecies)

/**
 * @swagger
 * /species:
 *   post:
 *     security:
 *      -bearerAuth: []
 *     tags: [species]
 *     description: You can post a new Species
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - habitat
 *               - size
 *               - taxonomy
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *               habitat:
 *                 type: string
 *               size:
 *                 type: string
 *               taxonomy:
 *                 type: string
 *               image:
 *                 type: string
 */
SpeciesRoutes.post('/', upload.single('image'), postSpecies)
SpeciesRoutes.patch('/:id', [isAuth], patchSpecies)
SpeciesRoutes.delete('/:id', [isAuth], deleteSpecies)

module.exports = SpeciesRoutes
