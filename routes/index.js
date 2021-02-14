const express = require('express')
const router = express.Router()


// This is the root routes
// Root Routes (This line below will change later in the future / -> aanother)
router.get('/',(req, res) => {
    res.render('index')
})

module.exports = router