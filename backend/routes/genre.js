const express = require('express')
const router = new express.Router()
const fetch = require('../utils/fetch')

router.get('/genre/movielist', async (req, res) => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

router.get('/genre/tvlist', async (req, res) => {
    const url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.API_KEY}`

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

module.exports = router