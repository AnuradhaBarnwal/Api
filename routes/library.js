const path = require('path');

const express = require('express');

const rootdir = require('../util/path');

const router = express.Router();

//Get for "/"

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'library.html'));
});

module.exports = router;   