const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config();


app.use(bodyParser.json())

// Import  routes
const postsRoute = require('./routes/posts')
const authRoute = require('./routes/auth')

// Define API routes
app.use('/api/posts', postsRoute)
app.use('/api/user', authRoute)

// catch all
app.use('/', (req, res) => {
    res.send('Home')
})

//console logs to make sure everything is working
app.listen(3000, () => {
    console.log('Server is running')
})

MURL = process.env.MONGO_LINK
mongoose.connect(MURL).then(() => console.log('MongoDB connector is on'))






