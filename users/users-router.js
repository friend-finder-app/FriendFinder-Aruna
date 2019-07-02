// require('dotenv').load()

const router = require('express').Router()
const restricted = require('../middleware/restricted.js')
const Users = require('./users-model.js')

const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
)

router.get('/match',restricted,(req,res) => {
    const interests = req.user.interests
    console.log('user router req user email ',req.user.email)
    console.log(`user router req.user ${req.user.interests}`)
    Users.findBy({interests})
    .then(users => {
        const fil = users.filter(user => user.username !== req.user.username)
        console.log(`user router filter ${fil}`)
        res.status(200).json(fil)
    })
    .catch(error => {
        res.status(500).json({message:`error from users-router ${error}`})
    })
})

router.post('/match/messages', (req,res) => {
    res.header('Content-Type','application/json')

    console.log('backend end match/message ',req.body.body)
    client.messages
    .create({
        from:process.env.TWILIO_PHONE_NUMBER,
        to:req.body.to,
        body:req.body.body
    })
    .then(()=> {
        // res.send({success:true})
        res.status(200).json({success:true})
    })
    .catch(err => {
        console.log(err)
        // res.send({success:false})
        res.status(200).json({success:false})
    })
})

router.get('/',restricted, (req,res) => {
    const email = req.user.email
    Users.findBy({email})
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json({message:`error from users-router get all users ${error}`})
    })
})


module.exports = router