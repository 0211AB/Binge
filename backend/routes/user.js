const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/signup', async (req, res) => {
    try {
        var user = new User({ email: req.body.email, password: req.body.password })
        const token = await user.generateAuthToken()
        user.tokens.push({ token })
        const saved_user = await user.save()
        console.log(saved_user)

        res.setHeader('Authoriation', 'Bearer :' + token)
        res.status(201).json(saved_user)
    }
    catch (e) {
        if (e.code == 11000)
            return res.status(400).json({ "Message": "Email aldready exists" })
        res.status(404).json(e)
    }

})

module.exports = router
