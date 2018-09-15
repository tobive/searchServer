
const express = require('express');
const getList = require('./src/api/list');
const getSearch = require('./src/api/search');
const getRandom = require('./src/api/random');

const app = express();
const FAIL_RES = { success: false };
const CATEGORIES = ['group', 'show', 'member'];
const IMG_URL = '/static/img';

const PORT = process.env.PORT || 2000;

app.use(IMG_URL, express.static('./src/assets/img/profpic'));

app.get('/api/list/:category', (req, res) => {
  if (CATEGORIES.includes(req.params.category)) {
    const data = getList(req.params.category);
    const obj = { success: true, data };
    res.json(obj);
  } else {
    res.json(FAIL_RES);
  }
});

app.get('/api/random/:category', (req, res) => {
  if (CATEGORIES.includes(req.params.category)) {
    const data = getRandom(req.params.category);
    const obj = { success: true, data };
    res.json(obj);
  } else {
    res.json(FAIL_RES);
  }
});

app.get('/api/search/:category/:str', (req, res) => {
  if (CATEGORIES.includes(req.params.category)) {
    const data = getSearch(req.params.category, req.params.str);
    const obj = { success: true, data };
    res.json(obj);
  } else {
    res.json(FAIL_RES);
  }
});

app.get('/', (req, res) => res.send('WELCOME'));

// app.use((err, req, res, next) => {
//   res.status(500).send('Something broke!');
// });

app.listen(PORT, () => console.log('Express is running'));
