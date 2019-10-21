const express = require('express');

// const ProfileModel = require('./profiles-model');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hi Everyone!')
  });




module.exports = router;