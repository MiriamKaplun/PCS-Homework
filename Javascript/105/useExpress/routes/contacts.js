var debug = require('debug')('contacts:route');
const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM contacts', (error, results, fields) => {
    if (error) throw error;

    debug(`get returning ${JSON.stringify(results)}`);

    res.send(results);
  });
});

router.post('/', (req, res, next) => {
  connection.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES(?, ?, ?, ?)',
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
    (error, results, fields) => {
      if (error) throw error;
    });
  res.send(req.body);
});

module.exports = router;
