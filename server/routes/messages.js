const express = require('express')
const mongodb = require('mongodb')
require('dotenv').config()

const router = express.Router()

//mongodb connection to connect to database
async function loadMessages(){
    const client = await mongodb.MongoClient.connect(process.env.DB_connection_string, {
        useNewUrlParser: true
    })

    return client.db('message-board').collection('messages')
}

const messages = await loadMessages()

//GET requests
router.get('/', async (req,res) => {
    res.send(await messages.find({}).toArray())
})

//POST requests
router.post('/', async (req,res) => {
    await messages.insertOne({
        name: req.body.name,
        message: req.body.message,
        createdAt: new Intl.DateTimeFormat("en-US").format(new Date())
    })
    res.status(201).send()
})

//DELETE requests
router.delete('/:id', async (req,res) => {
    await messages.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    res.status(200).send()
})

module.exports = router