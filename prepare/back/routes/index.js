const express = require('express');
const router = express.Router();
// routes
const usersRouter = require('./users');

router.get('/', (req, res) => {
  res.send('board api start!!');
});

router.use('/user', usersRouter);

module.exports = router;
