/*jshint esversion: 6 */
const express = require('express');
const app = express();
const router = express.Router();
const db = require('../../models');
const Users = db.Users;

app.get('/users', (req, res) => {
  Users.findAll()
  .then((names) => {
    res.json(names);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.post('/users', (req, res) => {
  Users.create({
    name: req.body.name
  })
  .then((name) => {
    res.json(name);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.get('/users/:id', (req, res) => {
  Users.findById(parseInt(req.params.id))
  .then((user) => {
    res.json(user);
  })
  .catch((err) => {
    console.log(err);
  });
});


module.exports = app;