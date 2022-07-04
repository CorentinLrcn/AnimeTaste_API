const config = require('../config/dbConfig')

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    pwd: { type: String },
    birthdate: { type: String },
    avatar: { type: String }
})

module.exports = mongoose.model('users', userSchema)