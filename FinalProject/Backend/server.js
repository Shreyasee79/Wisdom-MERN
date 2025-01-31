const express = require('express')
const app = express()
const cors = require('cors')
const newsRoutes = require('./routes/newsRoutes')
const connect = require('./config/db')
require('dotenv').config()

const port = process.env.port || 3000

connect()

app.use(cors())
app.use(express.json())
app.use('/api', newsRoutes)

app.listen(port, () => {
    console.log(`We are listening to server at port ${port}`)
})