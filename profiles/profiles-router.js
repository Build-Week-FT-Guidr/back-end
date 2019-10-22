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


  router.get('/:id', (req, res)=>{
    const { id } = req.params;
    ProfileModel
    .getById(id)
    .then(profile=>{
      res.status(200).json(profile);
    })
    .catch(err=>{
      res.status(500).json({ message: 'Failed to get profile.'})
      
    })
  })

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    ProfileModel
    .getById(id)
    .then(profile => {
      if (profile) {
        ProfileModel
        .update(changes, id)
        .then(updatedProfile => {
          res.status(201).json(updatedProfile);
        });
      } else {
        res.status(404).json({ message: 'Could not find profile with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update profile' });
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    ProfileModel
    .remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find profile with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete profile' });
    });
  });


module.exports = router;