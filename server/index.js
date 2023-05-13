const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//initialise app with express application object
const app = express()

//middleware
app.use(bodyParser.json())