const express = require('express');
const router = express.Router();
const products = [];
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('shop',{title:"Add product",path:'/admin/add-product'});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title ,path:'/admin/add-product'});
    res.redirect('/');
});


exports.routes = router;
exports.products = products;