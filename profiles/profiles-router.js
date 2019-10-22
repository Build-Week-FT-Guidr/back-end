const express = require('express');

const ProfileModel = require('./profiles-model');

const router = express.Router();


router.get('/', (req, res) => {
    ProfileModel
    .get()
    .then(profiles=>{
      res.status(200).json(profiles);
    })
    .catch(err=>{
      res.status(500).json({ message: 'Failed to get profiles.'})
    })
  });




module.exports = router;