const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    email: {
        type: String,
        required: true,
        max: 50,
        min: 5
    },
    password: {
        type: String,
        reqiuired: true,
        max: 1024,
        min: 5
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('User',userSchema)