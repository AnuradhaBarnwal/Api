const path = require('path');
const express = require('express');

const rootdir = require('../util/path');

const router = express.Router();

//Get for add-book

router.get('/add-book', (req, res, next) => {
    //console.log("book");
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
});

//Post for add-book

router.post('/add-book', (req, res, next) => {
    const obj = JSON.parse(JSON.stringify(req.body));    // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj);
    res.redirect('/');
});

module.exports = router;