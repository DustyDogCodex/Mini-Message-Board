const express = require('express')
const mongodb = require('mongodb')
require('dotenv').config()

const router = express.Router()

//GET requests
router.get('/', async (req,res,next) => {
    const messages = await loadMessages()
    res.send(await messages.find({}).toArray())
})

//mongodb connection to connect to database
async function loadMessages(){
    const client = await mongodb.MongoClient.connect(process.env.DB_connection_string, {
        useNewUrlParser: true
    })

    return client.db('message-board').collection('messages')
}

module.exports = router