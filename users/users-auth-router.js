const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets.js')
const Users = require('./users-model.js')

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 11)
    user.password = hash

    Users.add(user)
        .then(saved => {
            res.status(200).json(saved)
        })
        .catch(err => {
            res.status(500).json({ error: `register error: ${err.response}` })
        })
})


router.post('/login', (req, res) => {
    let { username, password } = req.body

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)

                res.status(200).json({
                    message: `welcome ${user.username}`, token
                })
            }
            else {
                res.status(401).json({ message: 'invalid credentials' })
            }

        })
        .catch(err => {
            res.status(500).json({ message: `login error: ${err.response}` })
        })
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        interests: user.interests,
        distance: user.distance,
        email: user.email
    };

    const options = {
        expiresIn: '2d',
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router