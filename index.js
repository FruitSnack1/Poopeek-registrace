const express = require('express')
const app = express()
const path = require('path')

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://127.0.0.1:27017/poopeek'
const bodyParser =  require('body-parser')


app.use(express.json())
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded())

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.post('/', (req, res) =>{
  MongoClient.connect(url, async (err, client) => {
    if (err) return console.log('Unable to connect to the Server', err)
    const db = client.db("poopeek")
    db.collection('users').insertOne(
      {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        type : req.body.type,
        date : Date.now()
      }
    )
  })
  res.status(200).send('OK')
})








app.listen(80, () => console.log('Server Started'))
