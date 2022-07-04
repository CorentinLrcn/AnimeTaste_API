const ingredient = require('../models/ingredientModel')
const multer = require('multer')

exports.findAllIngredients = (req, res) => {
    ingredient.find()
        .then(data => {
            if (!data) return res.send('no ingredient')
            res.send(data)
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.findOneIngredient = (req, res) => {
    const id = req.params.id

    ingredient.findById(id)
        .then(data => {
            if (!data) return res.send('no ingredient for id : ' + id)
            res.send(data)
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.addOneIngredient = async (req, res) => {
    const name = req.body.name
    const picture = ''
    const description = ''

    const newIngredient = new ingredient(
        {
            name: name,
            picture: picture,
            description: description
        }
    )

    newIngredient.save()
        .then(data => {console.log('ingredient correctly created'), res.send(data)})
        .catch(err => res.send(err))
}


exports.updateOneIngredient = (req, res) => {
    const id = req.params.id

    ingredient.findByIdAndUpdate(id, req.body, { new: true })
        .then(data => {
            if (!data) return res.send("can't update, no ingredient for id : " + id)
            res.send('update done')
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.removeOneIngredient = (req, res) => {
    const id = req.params.id

    ingredient.findByIdAndRemove(id)
        .then(data => {
            if (!data) return res.send("can't delete, no ingredient for id : " + id)
            res.send('deletion done')
        })
        .catch(err => res.send('an error has occured ' + err))
}