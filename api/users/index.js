/*jshint esversion: 6 */
const express = require('express');
// const app = express();
const router = express.Router();
const db = require('../../models');
const Users = db.Users;

router.route('/users')
  .get((req, res) => {
    Users.findAll()
    .then((names) => {
      res.json(names);
    })
    .catch((err) => {
      console.log(err);
    });
  })
  .post((req, res) => {
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

  router.route('/users/login/:name')
  .get((req, res) => {
    Users.findOne({
      where: {
        name: req.params.name
      }
    })
    .then((person) => {
      console.log('PERSON', person);
      let user = {
        username: person.id
      };
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
  });

router.route('/users/:id')
  .get((req, res) => {
    Users.findById(parseInt(req.params.id))
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
  });

module.exports = router;

// app.get('/users', (req, res) => {
//   Users.findAll()
//   .then((names) => {
//     res.json(names);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });

// app.post('/users', (req, res) => {
//   Users.create({
//     name: req.body.name
//   })
//   .then((name) => {
//     res.json(name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });

// app.get('/users/:id', (req, res) => {
//   Users.findById(parseInt(req.params.id))
//   .then((user) => {
//     res.json(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });


// module.exports = app;