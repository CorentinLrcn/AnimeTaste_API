const config = require('../config/dbConfig')

const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    name: { type: String },
    mangaLinked: { type: String },
    pictures: [ String ],
    ingredientList: [ String ],
    quantityList: [ String ],
    instructions: [ String ]
})

module.exports = mongoose.model('recipes', recipeSchema)