require('dotenv').config()
const server = require('./api/server.js')

const port = process.env.PORT || 3355

server.listen(port, () => {
    console.log(`****** API started to listen at port ${port} ******`)
})

