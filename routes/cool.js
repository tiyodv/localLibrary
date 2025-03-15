const express = require("express");
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('I am so cool');
});

module.exports = router;