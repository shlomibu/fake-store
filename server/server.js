require('dotenv').config()
const express = require('express'),
app = express(),
PORT = process.env.PORT
require('./db')


app.use(express.json())
require('./router/productsRouter')(app)
require('./router/categoryRouter')(app)


app.listen(PORT,()=>console.log(`server is running, PORT:${PORT}`))