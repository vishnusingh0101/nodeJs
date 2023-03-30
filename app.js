
const express = require('express');

const app = express();

app.use((_req, _res, next) => {
    console.log('In the middle ware');
    next();
});
app.use((_req, _res) => {
    console.log('In the middleware');
    _res.send('<h1>hello to node js</h1>')
    // ...
});


app.listen(4000); 