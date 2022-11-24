const FamilyRoutes = require('express').Router()

const { getAllFamilies, getOneFamily, patchFamily, postFamily, deleteFamily } = require('./family.controller')

FamilyRoutes.get('/', getAllFamilies)
FamilyRoutes.get('/:id', getOneFamily)
FamilyRoutes.post('/', postFamily)
FamilyRoutes.patch('/:id', patchFamily)
FamilyRoutes.delete('/:id', deleteFamily)

module.exports = FamilyRoutes
