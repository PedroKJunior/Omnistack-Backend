const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(`mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASSWORD}@cluster0-uvvtu.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())

app.listen(3333)

