const express = require('express');

// const UserModel = require('./users-model');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hi Everyone!')
  });





module.exports = router;
