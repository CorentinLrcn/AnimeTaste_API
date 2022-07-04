const user = require('../models/userModel')
const bcrypt = require('bcrypt')
const multer = require('multer')

exports.findAllUsers = (req, res) => {
    user.find()
        .then(data => {
            if (!data) return res.send('no user')
            res.send(data)
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.findOneUser = (req, res) => {
    const id = req.params.id

    user.findById(id)
        .then(data => {
            if (!data) return res.send('no user for id : ' + id)
            res.send(data)
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.checkOneUserForLogIn = (req, res) => {
    const email = req.body.email
    const pwd = req.body.pwd

    user.findOne({ email: email })
        .then(data => {
            console.log(data)
            if (!data) {
                res.status(500).send('Something broke!')
            } else {
                bcrypt.compare(
                    pwd,
                    users.pwd,
                    function (err, response) {
                        console.log(data)
                        if (response == true) {
                            res.send(data)
                        } else {
                            res.status(500).send('Something broke!')
                        }
                    }
                )
            }
        })
        .catch((err) => res.send(err))
}


exports.addOneUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.pwd, salt)
    const username = ''
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const pwd = hash
    const email = req.body.email
    const birthdate = req.body.birthdate
    const avatar = ''
    const newUser = new user(
        {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            pwd: pwd,
            birthdate: birthdate,
            avatar: avatar
        }
    )

    newUser.save()
        .then(data => {console.log('user correctly created'), res.send(data)})
        .catch(err => res.send(err))
}


exports.updateOneUser = (req, res) => {
    const id = req.params.id

    user.findByIdAndUpdate(id, req.body, { new: true })
        .then(data => {
            if (!data) return res.send("can't update, no user for id : " + id)
            res.send('update done')
        })
        .catch(err => res.send('an error has occured ' + err))
}


exports.removeOneUser = (req, res) => {
    const id = req.params.id

    user.findByIdAndRemove(id)
        .then(data => {
            if (!data) return res.send("can't delete, no user for id : " + id)
            res.send('deletion done')
        })
        .catch(err => res.send('an error has occured ' + err))
}