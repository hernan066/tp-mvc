const express = require('express');
const app = express();
const port = 3030;

const mainRouter = require('./routers/main.js')


app.use(express.static('public'))

app.use('/', mainRouter)


app.listen(port, ()=> console.log('Server running'))