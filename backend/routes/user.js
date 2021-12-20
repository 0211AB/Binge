const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middlewares/auth')

router.post('/signup', async (req, res) => {
    try {
        var user = new User({ email: req.body.email, password: req.body.password })
        const token = await user.generateAuthToken()
        const saved_user = await user.save()
        //console.log(saved_user)

        res.status(201).json(saved_user)
    }
    catch (e) {
        if (e.code == 11000)
            return res.status(400).json({ "Message": "Email aldready exists" })
        res.status(404).json(e)
    }

})

router.post('/login', async (req, res) => {
    try {
        const password = req.body.password
        const email = req.body.email

        const user = await User.findOne({ email })
        if (!user)
            res.status(404).json({ "Error": "User not found" })
        else {
            const isPasswordValid = await bcrypt.compare(password, user.password)
            //console.log(isPasswordValid)

            if (isPasswordValid) {
                //console.log(user.tokens)
                const token = await user.generateAuthToken()
                const saved_user = await user.save()
                //console.log(saved_user)

                res.status(200).json(saved_user)
            }
            else {
                res.status(400).json({ "Message": 'Incorrect Credentials' })
            }

        }
    }
    catch (e) {
        res.status(404).json(e)
    }


})

router.get('/logout', auth, async (req, res) => {
    try {

        const email = req.email

        const user = await User.findOne({ email })
        if (!user)
            res.status(404).json({ "Error": "User not found" })
        else {

            user.tokens = []
            await user.save()

            res.status(200).json({ "Message": "Logged Out succesfully!!" })

        }
    }
    catch (e) {
        res.status(404).json(e)
    }


})

module.exports = router
