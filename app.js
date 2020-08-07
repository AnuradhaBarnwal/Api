const express = require('express');
const bodyparser = require('body-parser');
const adminRouter = require('./routes/admin');
const bookRouter = require('./routes/library');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(bookRouter);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>');
});


app.listen(3000);

