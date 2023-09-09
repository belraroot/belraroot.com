const express = require('express')
const app = express()

var userModel = require('./models/user')

app.get('/', (req, res) => {
    res.send('Welcome to Codecomodo’s API.')
})

app.use(userModel);

app.listen(3000)