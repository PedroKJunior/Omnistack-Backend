const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebsocket} = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect(`mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASSWORD}@cluster0-uvvtu.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())

app.use(express.json())
app.use(routes)

app.listen(3333)

