const express = require('express');

// const TripModel = require('./trips-model');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hi Everyone!')
  });





module.exports = router;