const FamilyRoutes = require('express').Router()

const { getAllFamilies, getOneFamily, patchFamily, postFamily, deleteFamily } = require('./family.controller')

const isAuth = require('../../middlewares/auth.middleware')
FamilyRoutes.get('/', getAllFamilies)
FamilyRoutes.get('/:id', getOneFamily)
FamilyRoutes.post('/', [isAuth], postFamily)
FamilyRoutes.patch('/:id', [isAuth], patchFamily)
FamilyRoutes.delete('/:id', [isAuth], deleteFamily)

module.exports = FamilyRoutes
