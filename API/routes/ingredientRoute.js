const app = () => {
    const express = require('express')
    const ingredientController = require('../controllers/ingredientController')
    
    const router = express.Router()

    router.get('/', ingredientController.findAllIngredients)
    router.get('/:id', ingredientController.findOneIngredient)
    router.post('/', ingredientController.addOneIngredient)
    router.put('/:id', ingredientController.updateOneIngredient)
    router.delete('/:id', ingredientController.removeOneIngredient)

    return router
}

module.exports = app