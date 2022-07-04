const app = () => {
    const express = require('express')
    const userController = require('../controllers/userController')
    
    const router = express.Router()

    router.get('/', userController.findAllUsers)
    router.get('/:id', userController.findOneUser)
    router.get('/logIn', userController.checkOneUserForLogIn)
    router.post('/signIn', userController.addOneUser)
    router.put('/:id', userController.updateOneUser)
    router.delete('/:id', userController.removeOneUser)

    return router
}

module.exports = app