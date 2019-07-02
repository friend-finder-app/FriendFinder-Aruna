// require('dotenv').load()

const router = require('express').Router()
const restricted = require('../middleware/restricted.js')
const Users = require('./users-model.js')
const distance = require('google-distance-matrix')

const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
)

router.get('/match', restricted, (req, res) => {
    const interests = req.user.interests
    console.log('user router req user email ', req.user.email)
    console.log(`user router req.user ${req.user.interests}`)
    Users.findBy({ interests })
        .then(users => {
            const fil = users.filter(user => user.username !== req.user.username)
            console.log(`user router filter ${fil}`)
            res.status(200).json(fil)
        })
        .catch(error => {
            res.status(500).json({ message: `error from users-router ${error}` })
        })
})

router.post('/match/messages', (req, res) => {
    res.header('Content-Type', 'application/json')

    console.log('backend end match/message ', req.body.body)
    client.messages
        .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: req.body.to,
            body: req.body.body
        })
        .then(() => {

            res.status(200).json({ success: true })
        })
        .catch(err => {
            console.log(err)

            res.status(200).json({ success: false })
        })
})

router.post('/match/distance', (req, res, next) => {
    const origins = req.body.origins
    const destinations = req.body.destinations
    const mode = req.body.travelMode
    distance.key('AIzaSyB2DOO3CFrk68ax7jRVY6MH2VKlL8r6O3U')
    distance.units('imperial');
    distance.matrix([origins], [destinations], mode, function (err, distances) {
        if (!err)
            res.json(distances.rows)
    })
})

router.get('/', restricted, (req, res) => {
    const email = req.user.email
    Users.findBy({ email })
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({ message: `error from users-router get all users ${error}` })
        })
})


module.exports = router