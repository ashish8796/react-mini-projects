const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
const db = require('./db');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const app = express();
const PORT = 5500;

app.use(cors());
app.use(bodyParser.json())
// app.use(express.json())

const user = [];

app.get('/users', (req, res) => {
  res.json(users);
})

app.post('/login', async (req, res) => {
  const { body } = req;
  try {
    // const dbResponse = await (await db).collection('login').find({ _id: mongodb.ObjectId(body._id) });
    // res.send(dbResponse);
    console.log(body)
    res.end()
  }
  catch (e) {
    console.log(e)
  }

})

app.post("/sign", (req, res) => {
  const { body } = req;
  console.log(body)

  user.push(body)
  // try {
  //   const dbResponse = await (await db).collection('users').insertOne(body);
  // }
  // catch (e) {
  //   return e
  // }

  res.status(201).send();
})

app.listen(PORT)

