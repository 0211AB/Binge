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

//MAJOR PROBLEM /LEARNING NUMBER 1
//_________________________________________________________________________________________________________________________________________
// When we save data to database,for hashing password,We are using "pre" method. Hence, we need to make sure that we are not changing the password while doing tasks after saving the password to the database for the 1st time(since every time we do a task, we use the save function and hence the "pre method " is triggered and the aldready hashed password is hashed again.)
// To do this we use the 'ismodified' function and check if the password is modified or not.If it is no we just return next,hence preventing multiple hashing of the same password!!!!