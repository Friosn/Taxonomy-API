const SpeciesRoutes = require('express').Router()
const { getAllSpecies, getOneSpecies, patchSpecies, postSpecies, deleteSpecies } = require('./species.controller')
const upload = require('../../middlewares/uploadImg.middleware')
const isAuth = require('../../middlewares/auth.middleware')

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
