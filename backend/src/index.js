const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

mongoose.connect('mongodb://paulotiago:secretpass@192.168.99.100:27017/developers')

app.use(express.json())
app.use(routes)

app.listen(3333)