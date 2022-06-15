const express = require('express')
const Connct_Mongo_DB = require('./dbConfig')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const initRoutes = require("./routes/web");
const PORT = process.env.PORT || 4040;

Connct_Mongo_DB(); // Initialisation of Mongodb connection

const app = express()
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(fileUpload({ useTempFiles: true }))

app.use(express.json());  // Middleware
initRoutes(app);
// require('./routes/customerRoute')(app)
//app.use('/upload',require('./routes/upload'));

app.listen(PORT,console.log(`Server is running on ${PORT}`))
