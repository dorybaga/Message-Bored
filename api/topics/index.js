/*jshint esversion: 6 */
const express = require('express');
// const app = express();
const router = express.Router();
const db = require('../../models');
const Topics = db.Topics;

router.route('/topics')
  .get((req, res) => {
    Topics.findAll()
    .then((topics) => {
      res.json(topics);
    })
    .catch((err) => {
      console.log(err);
    });
  })
  .post((req, res) => {
    Topics.create({
      name: req.body.name,
      created_by: req.body.created_by
    })
    .then((topic) => {
      res.json(topic);
    })
    .catch((err) => {
      console.log(err);
    });
  });

router.route('/topics/:id')
  .get((req, res) => {
    Topics.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((topic) => {
      console.log('topic being returned from route is*******', topic)
      res.json(topic)
    })
    .catch((err) => {
      console.log(err)
    })
  })
  .put((req, res) => {
    Topics.update({
      name: req.body.name
    }, {
      where: {
        id: req.params.id
      }
    })
    .then((newTopic) => {
      res.json(newTopic);
    })
    .catch((err) => {
      console.log(err);
    });
  });

module.exports = router;


// app.get('/topics', (req, res) => {
//   Topics.findAll()
//   .then((topics) => {
//     res.json(topics);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });


// app.post('/topics', (req, res) => {
//   Topics.create({
//     name: req.body.name
//   })
//   .then((topic) => {
//     res.json(topic);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });



// module.exports = app;