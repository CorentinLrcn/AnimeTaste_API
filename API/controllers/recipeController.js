const recipe = require('../models/recipeModel')
const multer = require('multer')

exports.findAllRecipes = (req, res) => {
    recipe.find()
        .then(data => {
            if (!data) return res.send('no recipe')
            res.send(data)
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.findOneRecipe = (req, res) => {
    const id = req.params.id

    recipe.findById(id)
        .then(data => {
            if (!data) return res.send('no recipe for id : ' + id)
            res.send(data)
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.addOneRecipe = async (req, res) => {
    const name = req.body.name
    const mangaLinked = req.body.mangaLinked
    const pictures = []
    const ingredientList = req.body.ingredientList
    const quantityList = req.body.quantityList
    const instructions = req.body.instructions

    const newRecipe = new recipe(
        {
            name: name,
            mangaLinked: mangaLinked,
            pictures: pictures,
            ingredientList: ingredientList,
            quantityList: quantityList,
            instructions: instructions
        }
    )

    newRecipe.save()
        .then(data => {console.log('recipe correctly created'), res.send(data)})
        .catch(err => res.send(err))
}


exports.updateOneRecipe = (req, res) => {
    const id = req.params.id

    recipe.findByIdAndUpdate(id, req.body, { new: true })
        .then(data => {
            if (!data) return res.send("can't update, no recipe for id : " + id)
            res.send('update done')
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.removeOneRecipe = (req, res) => {
    const id = req.params.id

    recipe.findByIdAndRemove(id)
        .then(data => {
            if (!data) return res.send("can't delete, no recipe for id : " + id)
            res.send('deletion done')
        })
        .catch(err => res.send('an error has occured ' + err))
}