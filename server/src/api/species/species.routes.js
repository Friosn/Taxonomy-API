const SpeciesRoutes = require('express').Router()

const { getAllSpecies, getOneSpecies, patchSpecies, postSpecies, deleteSpecies } = require('./species.controller')

SpeciesRoutes.get('/', getAllSpecies)
SpeciesRoutes.get('/:id', getOneSpecies)
SpeciesRoutes.post('/', postSpecies)
SpeciesRoutes.patch('/:id', patchSpecies)
SpeciesRoutes.delete('/:id', deleteSpecies)

module.exports = SpeciesRoutes
