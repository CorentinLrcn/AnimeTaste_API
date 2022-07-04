const app = () => {
    const express = require('express')
    const recipeController = require('../controllers/recipeController')
    
    const router = express.Router()

    router.get('/', recipeController.findAllRecipes)
    router.get('/:id', recipeController.findOneRecipe)
    router.post('/', recipeController.addOneRecipe)
    router.put('/:id', recipeController.updateOneRecipe)
    router.delete('/:id', recipeController.removeOneRecipe)

    return router
}

module.exports = app