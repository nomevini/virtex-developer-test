require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Servidor online na porta ${port}`)
})