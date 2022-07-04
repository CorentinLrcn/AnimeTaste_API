const manga = require('../models/mangaModel')
const multer = require('multer')

exports.findAllMangas = (req, res) => {
    manga.find()
        .then(data => {
            if (!data) return res.send('no manga')
            res.send(data)
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.findOneManga = (req, res) => {
    const id = req.params.id

    manga.findById(id)
        .then(data => {
            if (!data) return res.send('no manga for id : ' + id)
            res.send(data)
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.addOneManga = async (req, res) => {
    const name = req.body.name
    const picture = ''

    const newManga = new manga(
        {
            name: name,
            picture: picture
        }
    )

    newManga.save()
        .then(data => {console.log('manga correctly created'), res.send(data)})
        .catch(err => res.send(err))
}


exports.updateOneManga = (req, res) => {
    const id = req.params.id

    manga.findByIdAndUpdate(id, req.body, { new: true })
        .then(data => {
            if (!data) return res.send("can't update, no manga for id : " + id)
            res.send('update done')
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.removeOneManga = (req, res) => {
    const id = req.params.id

    manga.findByIdAndRemove(id)
        .then(data => {
            if (!data) return res.send("can't delete, no manga for id : " + id)
            res.send('deletion done')
        })
        .catch(err => res.send('an error has occured ' + err))
}