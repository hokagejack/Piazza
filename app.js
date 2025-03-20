const express = require('express')
const app = express()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config();


app.use(bodyParser.json())

// Import your routes
const postsRoute = require('./routes/posts')
const authRoute = require('./routes/auth')

// Define your API routes
app.use('/api/posts', postsRoute)
app.use('/api/user', authRoute)

// Make sure your catch-all route is after the API routes
app.use('/', (req, res) => {
    res.send('Home')
})

app.listen(3000, () => {
    console.log('Server is running')
})

MURL = process.env.MONGO_LINK
mongoose.connect(MURL).then(() => console.log('MongoDB connector is on'))






