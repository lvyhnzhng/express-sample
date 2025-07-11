require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); 

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.get('/', (req, res, next) => res.send('👋 Express is live'));
app.use(express.static(path.join(__dirname, '../public')));
app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello from backend!' });
});

module.exports = app;