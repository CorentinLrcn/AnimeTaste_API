const config = require('../config/dbConfig')

const mongoose = require('mongoose')

const ingredientSchema = mongoose.Schema({
    name: { type: String },
    picture: { type: String },
    description: { type: String }
})

module.exports = mongoose.model('ingredients', ingredientSchema)