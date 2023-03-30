const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (_req, _res) => {
    _res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button><form/>')
    // ...
});

app.post('/product', (_req, _res, next)=>{
    console.log(_req.body);
    _res.redirect('/');
});

app.use('/', (_req, _res, next) => {
    _res.send('<h1>This is it</h1>')
});



app.listen(4000); 