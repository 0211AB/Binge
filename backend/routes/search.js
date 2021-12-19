const express = require('express')
const router = new express.Router()
const fetch = require('../utils/fetch')

router.get('/search/movie', async (req, res) => {
    const baseurl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}`
    const appendurl = `&query=${req.query.search}`

    const url = baseurl + appendurl

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

router.get('/search/tv', async (req, res) => {
    const baseurl = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.API_KEY}`
    const appendurl = `&query=${req.query.search}`

    const url = baseurl + appendurl

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

module.exports = router