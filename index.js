require('dotenv').config()
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').load();
// }
const server = require('./api/server.js')

const port = process.env.PORT || 3355

server.listen(port, () => {
    console.log(`****** API started to listen at port ${port} ******`)
})

