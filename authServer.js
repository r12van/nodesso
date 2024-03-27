require("dotenv").config()
//this will allow us to pull params from .env file
const express = require('express')
const app = express()
app.use(express.json())
//This middleware will allow us to pull req.body.<params>
const port = process.env.TOKEN_SERVER_PORT
//get the port number from .env file
app.listen(port, () => {
    console.log(`Authorization Server running on ${port}...`)
})