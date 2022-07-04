const app = () => {
    const express = require('express')
    const mangaController = require('../controllers/mangaController')
    
    const router = express.Router()

    router.get('/', mangaController.findAllMangas)
    router.get('/:id', mangaController.findOneManga)
    router.post('/', mangaController.addOneManga)
    router.put('/:id', mangaController.updateOneManga)
    router.delete('/:id', mangaController.removeOneManga)

    return router
}

module.exports = app