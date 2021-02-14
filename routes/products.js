const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// All Products Routes
// This is the root routes
// Root Routes (This line below will change later in the future / -> aanother)
router.get('/',async (req, res) => {
    // search options
    let searchOptions = {}
    if (req.query.name !=null && req.query.name !==''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }

    try{
        // {} = condition search all
        const products=await Product.find(searchOptions)
        res.render('products/index',{
            products: products,
            searchOptions: req.query
        })

    }catch{
        res.redirect('/')

    }    
})


// New products routes
router.get('/new', (req, res) => {
    res.render('products/new',{product: new Product()})
})

// create product Route
router.post('/', async (req, res) => {
    // output name
    const product = new Product({
        name: req.body.name
    })

    try{
        const newProduct = await product.save()
        res.redirect(`products`)
    }catch{
        res.render('products/new',{
            product: product,
            errorMessage: 'Error creating Product'
        })
    }
})



module.exports = router