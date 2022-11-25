const SpeciesRoutes = require('express').Router()

const { getAllSpecies, getOneSpecies, patchSpecies, postSpecies, deleteSpecies } = require('./species.controller')
const upload = require('../../middlewares/uploadImg.middleware')

const isAuth = require('../../middlewares/auth.middleware')
SpeciesRoutes.get('/', getAllSpecies)
SpeciesRoutes.get('/:id', getOneSpecies)
SpeciesRoutes.post('/', [isAuth], upload.single('image'), postSpecies)
SpeciesRoutes.patch('/:id', [isAuth], patchSpecies)
SpeciesRoutes.delete('/:id', [isAuth], deleteSpecies)

module.exports = SpeciesRoutes
