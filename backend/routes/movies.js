const express = require('express')
const router = new express.Router()
const fetch = require('../utils/fetch')

router.get('/movie/popular', async (req, res) => {

    const baseurl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`

    var appendurl = ''

    if (req.query.page) {
        appendurl = `&page=${req.query.page}`
    }

    const url = baseurl + appendurl

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

router.get('/movie/upcoming', async (req, res) => {
    const baseurl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&region=IN`

    var appendurl = ''

    if (req.query.page) {
        appendurl = `&page=${req.query.page}`
    }

    const url = baseurl + appendurl

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

router.get('/movie/top_rated', async (req, res) => {
    const baseurl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`

    var appendurl = ''

    if (req.query.page) {
        appendurl = `&page=${req.query.page}`
    }

    const url = baseurl + appendurl

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

router.get('/movie/:movie_id', async (req, res) => {
    const id = req.params.movie_id

    const baseurl = `https://api.themoviedb.org/3/movie/${id}`
    const appendurl = `?api_key=${process.env.API_KEY}`

    const url = baseurl + appendurl

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

module.exports = router