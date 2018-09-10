const express = require('express');

const app = express();
const FAIL_MSG = { success: false };
const CATEGORIES = ['group', 'team', 'member'];

app.get('/api/list/:category', (req, res) => {
  if (CATEGORIES.includes(req.params.category)) {
    res.send('afdasdf');
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
