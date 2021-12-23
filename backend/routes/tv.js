const express = require('express')
const router = new express.Router()
const fetch = require('../utils/fetch')

router.get('/tv/popular', async (req, res) => {

    const baseurl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`

    var appendurl = ''

    if (req.query.page) {
        appendurl = `&page=${req.query.page}`
    }

    const url = baseurl + appendurl

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

router.get('/tv/latest', async (req, res) => {
    const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

router.get('/tv/top_rated', async (req, res) => {
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}`

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

router.get('/tv/on_air', async (req, res) => {
    const baseurl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}`

    var appendurl = ''

    if (req.query.page) {
        appendurl = `&page=${req.query.page}`
    }

    const url = baseurl + appendurl

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

router.get('/tv/videos/:tv_id', async (req, res) => {
    const id = req.params.tv_id

    const baseurl = `https://api.themoviedb.org/3/tv/${id}`
    const appendurl = `/videos?api_key=${process.env.API_KEY}`

    const url = baseurl + appendurl

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})



router.get('/tv/:tv_id', async (req, res) => {
    const id = req.params.tv_id

    const baseurl = `https://api.themoviedb.org/3/tv/${id}`
    const appendurl = `?api_key=${process.env.API_KEY}`

    const url = baseurl + appendurl

    const fetchdata = await fetch(url)
    res.json(JSON.parse(fetchdata))
})

module.exports = router