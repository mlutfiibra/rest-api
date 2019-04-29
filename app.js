require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})