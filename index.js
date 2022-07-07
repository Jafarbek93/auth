const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')


mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () => {
    console.log('Connected to Db')
})

const app = express()

app.use(express.json())
app.use('/api/user', authRoute)
app.use('/api/posts',postRoute)


app.listen(3000, () => console.log('Server is running'))
