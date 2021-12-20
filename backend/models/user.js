//Create own model to store guest data in database and allow them to add movies/shows to wishlist (2)
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        },
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isStrongPassword(value))
                throw new Error(`Password must contain the following : Minimum 8 characters. A lowercase letter. A special character (@, $, !, &, etc). A number. A uppercase letter.`)
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

UserSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next()
    
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.generateAuthToken = async function () {
    try {
        if (this.tokens.length > 1)
            this.tokens.splice(0, 1)
        const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET_KEY)
        this.tokens.push({ token: token })
        return token
    }
    catch (e) {
        return e
    }
}

const User = new mongoose.model('user', UserSchema)

module.exports = User