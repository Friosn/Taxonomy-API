const ClassRoutes = require('express').Router()

const { getAllClasses, getOneClass, patchClass, postClass, deleteClass } = require('./class.controller')

const isAuth = require('../../middlewares/auth.middleware')

ClassRoutes.get('/', getAllClasses)
ClassRoutes.get('/:id', getOneClass)
ClassRoutes.post('/', [isAuth], postClass)
ClassRoutes.patch('/:id', [isAuth], patchClass)
ClassRoutes.delete('/:id', [isAuth], deleteClass)

module.exports = ClassRoutes
