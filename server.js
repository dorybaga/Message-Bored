/*jshint esversion: 6 */

const express = require('express');
const app = express();
const bp = require('body-parser');
const db = require('./models');
const usersAPI = require('./api/users/');
const topicsAPI = require('./api/topics');

const PORT = process.env.PORT || 3000;

app.use(bp.json());
app.use(express.static('public'));
app.use('/api', usersAPI);
app.use('/api', topicsAPI);

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '/public') });
});

app.listen(PORT, () => {
    db.sequelize.sync({force:true});
  console.log(`server is running on ${PORT}`);
});