const express = require('express');

const router = express.Router();

router.get('/add-book', (req, res, next) => {
    //console.log("book");
    res.send("<form action='/admin/add-book' method='POST'><input type='text' name='title'><button type='submit'>Add Job</button></form>");
});

router.post('/admin/add-book', (req, res, next) => {
    const obj = JSON.parse(JSON.stringify(req.body));    // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj);
    res.redirect('/');
});

module.exports = router;