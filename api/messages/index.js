/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const db = require('../../models');
const Messages = db.Messages;

router.post('/messages', (req, res) => {
  Messages.create({
    body: req.body.body
  })
  .then((message) => {
    res.json(message);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/messages/latest', (req, res) => {
  Messages.findAll({ limit: 10 })
  .then((message) => {
    res.json(message);
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;