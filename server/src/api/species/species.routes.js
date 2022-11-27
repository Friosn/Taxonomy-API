const SpeciesRoutes = require('express').Router()
const { getAllSpecies, getOneSpecies, getSpeciesByName, patchSpecies, postSpecies, deleteSpecies } = require('./species.controller')
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
 *         name : Saltwater Crocodile or Crocodylus porosus
 *         habitat : Coasts of different regions of the Pacific Ocean
 *         size : Enormous, around 5m long, the biggest Reptile of the earth
 *         taxonomy : Reptiliae, Crocodilia, Crocodiliae
 *         image : https://res.cloudinary.com/dotbanq20/image/upload/v1669490873/animalSpecies/SaltwaterCrocodile_Maximo_ra5c4v.jpg
 */

/**
 * @swagger
 * /species:
 *   get:
 *     summary: GET ALL the Species
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
 * /species/{id}:
 *    get:
 *      summary: GET ONE Species BY ID
 *      tags: [Species]
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
 *                   $ref: '#/components/schemas/Species'
 *         400:
 *           description: Species not found
 *
 */
SpeciesRoutes.get('/:id', getOneSpecies)

/**
 * @swagger
 * /species/name/{name}:
 *    get:
 *      summary: GET ONE Species BY NAME
 *      tags: [Species]
 *      parameters:
 *        - in: path
 *          name: name
 *          schema:
 *            type: string
 *          required: true
 *          description: The species NAME
 *      responses:
 *         200:
 *           description: You got the name right!
 *           content:
 *             application/json:
 *               schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Species'
 *         404:
 *           description: Species not found
 *
 */
SpeciesRoutes.get('/name/:name', getSpeciesByName)

/**
 * @swagger
 * /species/:
 *   post:
 *     summary: CREATE a new Species
 *     tags: [Species]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Species'
 *     responses:
 *       200:
 *         description: New Species added to the API 🧬!
 */
SpeciesRoutes.post('/', upload.single('image'), postSpecies)

/**
 * @swagger
 * /species/{id}:
 *    patch:
 *      summary: UPDATE Species BY ID
 *      tags: [Species]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The species ID
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Species'
 *      responses:
 *         200:
 *           description: Species successfully updated
 *         400:
 *           description: Species not found
 *
 */
SpeciesRoutes.patch('/:id', upload.single('image'), patchSpecies)

/**
 * @swagger
 * /species/{id}:
 *    delete:
 *      summary: DELETE Species BY ID
 *      tags: [Species]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The species ID
 *      responses:
 *         200:
 *           description: Species deleted ❎
 *         400:
 *           description: Species not found
 *
 */
SpeciesRoutes.delete('/:id', deleteSpecies)

module.exports = SpeciesRoutes
