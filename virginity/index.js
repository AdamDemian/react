const express = require('express')

const app = express()

const login = require('./routes/login')

app.use('/login', login);

app.listen(5000, () => {
  console.log(`Example app listening at http://localhost:5000`)
})