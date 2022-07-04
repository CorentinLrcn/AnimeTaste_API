const config = require('../config/dbConfig')

const mongoose = require('mongoose')

const mangaSchema = mongoose.Schema({
    name: { type: String },
    picture: { type: String }
})

module.exports = mongoose.model('mangas', mangaSchema)