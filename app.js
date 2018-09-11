
const express = require('express');
const getList = require('./src/api/list');

const app = express();
const FAIL_MSG = { success: false };
const CATEGORIES = ['group', 'show', 'member'];
const IMG_URL = '/static/img';

app.use(IMG_URL, express.static('./src/assets/img/profpic'));

app.get('/api/list/:category', (req, res) => {
  if (CATEGORIES.includes(req.params.category)) {
    const arr = getList(req.params.category);
    const obj = { success: true, data: arr };
    res.json(obj);
  } else {
    res.json(FAIL_MSG);
  }
});

app.get('/api/search/:category/:str', (req, res) => {
  if (CATEGORIES.includes(req.params.category)) {
    res.send(req.params.str);
  } else {
    res.json(FAIL_MSG);
  }
});

app.get('/', (req, res) => res.send('WELCOME'));

app.listen(2000, () => console.log('Express is running'));
