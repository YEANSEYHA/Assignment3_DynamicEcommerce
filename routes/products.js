const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// All Products Routes
// This is the root routes
// Root Routes (This line below will change later in the future / -> aanother)
router.get('/',(req, res) => {
    res.render('products/index')
})


// New products routes
router.get('/new',(req, res) => {
    res.render('products/new',{product: new Product()})
})

// create product Route
router.post('/',(req, res) => {
    // output name
    res.send(req.body.name)
})
module.exports = router