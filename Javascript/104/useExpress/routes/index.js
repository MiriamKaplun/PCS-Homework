var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const contacts = [
  { first: 'Miriam', last: 'Baskin' },
  { first: 'Joe', last: 'Biden' },
  { first: 'Donald', last: 'Trump' }
];

router.get('/contacts', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    contacts
  });
});

router.get('/api/contacts', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.send(contacts);
});

router.post('/api/contacts', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  contacts.push(req.body);
  res.end();
});

module.exports = router;
