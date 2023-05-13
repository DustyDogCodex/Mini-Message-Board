const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


//initialise app with express application object
const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors())

const messages = require('./routes/messages')

app.use('/messages', messages)

const port = process.env.PORT || 5000

app.listen(port, () => [
    console.log(`listening on port: ${port}`)
])

app.get('/', (req,res) => {
    res.send("<h1>Welcome to my full stack message board!</h1>")
})