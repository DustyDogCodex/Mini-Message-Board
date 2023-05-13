const express = require('express')
const mongodb = require('mongodb')
require('dotenv').config()

const router = express.Router()

//GET requests
router.get('/', async (req,res) => {
    const messages = await loadMessages()
    res.send(await messages.find({}).toArray())
})

//POST requests
router.post('/', async (req,res) => {
    const messages = await loadMessages()
    await messages.insertOne({
        message: req.body.text,
        createdAt: new Date()
    })
    res.status(201).send()
})

//mongodb connection to connect to database
async function loadMessages(){
    const client = await mongodb.MongoClient.connect(process.env.DB_connection_string, {
        useNewUrlParser: true
    })

    return client.db('message-board').collection('messages')
}

module.exports = router