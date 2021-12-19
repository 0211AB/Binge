const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const movieRoutes = require('./routes/movies')
const genreRoutes = require('./routes/genre')
const searchRoutes = require('./routes/search')
const tvRoutes = require('./routes/tv')
const userRoutes = require('./routes/user')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000

const URI = `mongodb+srv://admin:${process.env.DB_PASSWORD}@binge.gpfwt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(URI)
    .then(() => {
        console.log("Database Connected")
    })
    .catch((e) => {
        console.log(e)
    })

//CORS Errors Solving
app.use((req, res, next) => {
    res.setHeader('Acess-Control-Allow-Origin', '*')
    res.setHeader('Acess-Control-Allow-Method', '*')
    res.setHeader('Acess-Control-Allow-Headers', '*')

    next()
})

app.use(bodyParser.json())
app.use(movieRoutes)
app.use(genreRoutes)
app.use(searchRoutes)
app.use(tvRoutes)
app.use(userRoutes)

app.listen(port, () => {
    console.log("App is running on port ", port)
})

