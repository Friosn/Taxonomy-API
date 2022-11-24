const jwt = require('jsonwebtoken')
const setError = require('../helper/error/handle.error')

const isAuth = (req, res, next) => {
    try {
        const authorization = req.headers.authorization

        if (!authorization) return next(setError(401, 'Unauthorized'))

        const splits = authorization.split(" ")
        if(splits.length !==2 || splits[0] !== "Bearer")
        return setError(400, "Not Bearer")

        /* const jwt */

    } catch (error) {
        
    }
}