
const express = require('express');
const getList = require('./src/api/list');
const getSearch = require('./src/api/search');

const app = express();
const FAIL_RES = { success: false };
const CATEGORIES = ['group', 'show', 'member'];
const IMG_URL = '/static/img';

app.use(IMG_URL, express.static('./src/assets/img/profpic'));

app.get('/api/list/:category', (req, res) => {
  if (CATEGORIES.includes(req.params.category)) {
    const arr = getList(req.params.category);
    const obj = { success: true, data: arr };
    res.json(obj);
  } else {
    res.json(FAIL_RES);
  }
});

app.get('/api/search/:category/:str', (req, res) => {
  if (CATEGORIES.includes(req.params.category)) {
    let obj = getSearch(req.params.category, req.params.str);
    res.json(obj);
  } else {
    res.json(FAIL_RES);
  }
});

app.get('/', (req, res) => res.send('WELCOME'));

// app.use((err, req, res, next) => {
//   res.status(500).send('Something broke!');
// });

app.listen(2000, () => console.log('Express is running'));
