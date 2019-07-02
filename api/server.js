

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


const authRouter = require('../users/users-auth-router.js')
const userRouter = require('../users/users-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/auth', authRouter)
server.use('/users', userRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to the friend finder app' })
})

module.exports = server