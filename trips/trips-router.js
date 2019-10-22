const express = require('express');

const TripModel = require('./trips-model');

const router = express.Router();

router.get('/', (req, res) => {
  TripModel
  .get()
  .then(trips=>{
    res.status(200).json(trips);
  })
  .catch(err=>{
    res.status(500).json({ message: 'Failed to get trips.'})
  })
});





module.exports = router;