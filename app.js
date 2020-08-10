const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const adminRouter = require('./routes/admin');
const bookRouter = require('./routes/library');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(bookRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'error404.html'));
});


app.listen(3000);

