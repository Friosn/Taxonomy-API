const UserRoutes = require('express').Router()

const { register, login, getUsers } = require('./user.controller')

/**
 * @swagger
 * compotents:
 *  schemas:
 *   Users:
 *    type: object
 *    properties:
 *      username:
 *        type: string
 *        description: Name of the users avatar
 *      password:
 *        type:string
 *        description: Secret word of the User
 *      image:
 *        type: string
 *        description: Insert your favourite Emoji
 *    required:
 *      - username
 *      - password
 *    example:
 *      name: Gozilla
 *      password: as?34jlsd34j(encrypted)
 *      emoji: 🦖
 */

UserRoutes.post('/register', register)
UserRoutes.post('/login', login)
UserRoutes.get('/', getUsers)

module.exports = UserRoutes
