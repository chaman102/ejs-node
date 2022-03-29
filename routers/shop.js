const express = require("express");
const router = express.Router();
const adminData = require("./admin");
router.get("/", (req, res, next) => {
    console.log("shop.js", adminData.products);
    res.render("index", {
        title: "Home Page",
        products: adminData.products,
        path:'/admin/shop'
    });
});

module.exports = router;