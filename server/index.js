const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

//initialise app with express application object
const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors())

const messages = require('./routes/messages')

app.use('/messages', messages)

const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req,res) => {
    res.sendFile(
        res.sendFile(path.join(__dirname, 'build', 'index.html')),
        function(err){
            if(err){
                res.status(500).send(err)
            }
        }
    )
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})