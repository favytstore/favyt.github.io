const express = require('express')
const Connct_Mongo_DB = require('./dbConfig')

const PORT = process.env.PORT || 4040;

// Initialisation of Mongodb connection
Connct_Mongo_DB();

const app = express()

app.use(express.json());  // Middleware

app.listen(PORT,console.log(`Server is running on ${PORT}`))