/*jshint esversion: 6 */

const express = require('express');
const app = express();
const db = require('./models');


const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '/public') });
});
app.listen(PORT, () => {
    db.sequelize.sync({force:true});
  console.log(`server is running on ${PORT}`);
});