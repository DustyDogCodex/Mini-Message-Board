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
        createdAt: new Intl.DateTimeFormat('en-US')
    })
    res.status(201).send()
})

//DELETE requests
router.delete('/:id', async (req,res) => {
    const messages = await loadMessages()
    await messages.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    res.status(200).send()
})

//mongodb connection to connect to database
async function loadMessages(){
    const client = await mongodb.MongoClient.connect(process.env.DB_connection_string, {
        useNewUrlParser: true
    })

    return client.db('message-board').collection('messages')
}

module.exports = router