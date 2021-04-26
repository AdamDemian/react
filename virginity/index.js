const express = require('express')
const app = express()

const login = require('./routes/login')

// home route
app.use('/', (req, res) => {
  res.send('Hello from home')
})

// login route from login.js
app.use('/login', login);

app.listen(5000, () => {
  console.log(`Example app listening at http://localhost:5000`)
})