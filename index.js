const express = require('express');
const app = express()
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const indexRouter = require('./routes/index')
const productRouter = require('./routes/products')
app.use(express.static(path.join(__dirname, 'public'))); // ex var//www/dynamic/public


app.set('view engine', 'ejs')
app.set('views','views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))


mongoose.connect('mongodb+srv://user1:010700923@cluster0.xdvle.mongodb.net/Product?retryWrites=true&w=majority', {useNewUrlParser: true , useUnifiedTopology: true})
const db = mongoose.connection
db.on('error',error => console.error(error))
db.once('open',()=> console.log('Connected to Mongoose'))



// Root Routes (This line below will change later in the future / -> aanother)
app.use('/',indexRouter)
app.use('/products',productRouter)

app.listen(3000)