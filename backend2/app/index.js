const express = require('express')
const app = express()
const db = require('../db/models')

app.get('/', async function (req, res) {
  const users = await db.sequelize.models.User.findAll();
  console.log(users[0].name);
  res.send('Hello World')
})

app.listen(3000)
