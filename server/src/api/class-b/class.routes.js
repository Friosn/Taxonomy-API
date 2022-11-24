const ClassRoutes = require('express').Router()

const { getAllClasses, getOneClass, patchClass, postClass, deleteClass } = require('./class.controller')

ClassRoutes.get('/', getAllClasses)
ClassRoutes.get('/:id', getOneClass)
ClassRoutes.post('/', postClass)
ClassRoutes.patch('/:id', patchClass)
ClassRoutes.delete('/:id', deleteClass)

module.exports = ClassRoutes
