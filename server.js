const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = require('./API/config/dbConfig')

//récupération des routes
const userRoutes = require('./API/routes/userRoute')
const mangaRoutes = require('./API/routes/mangaRoute')
const recipeRoutes = require('./API/routes/recipeRoute')
const ingredientRoutes = require('./API/routes/ingredientRoute')

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

//app.use('/uploads', express.static('uploads'))

//appel des routes
app.use('/users', userRoutes())
app.use('/mangas', mangaRoutes())
app.use('/recipes', recipeRoutes())
app.use('/ingredients', ingredientRoutes())

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('You are on port : ' + port)
})

mongoose.connect(db.url, {
        useNewUrlParser: true
    })
    .then(() => console.log('You are connected to atlas mongodb\nThe database name is AnimeTaste'))
    .catch(err => console.log(err))