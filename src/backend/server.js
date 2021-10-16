const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const port = process.env.PORT || 4040;

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.get('/', (req, res) => {
    res.send('Welcome to the Favyt Store! - ' + req.user.name);
  });

app.listen(port,()=> {console.log("Server started at " +port)})