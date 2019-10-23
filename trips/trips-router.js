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
    console.log('ERROR!!!!!!', err);
    res.status(500).json({ message: 'Failed to get trips.'})
  })
});

router.get('/:id', (req, res)=>{
  const { id } = req.params;
  TripModel
  .getById(id)
  .then(trip=>{
    res.status(200).json(trip);
  })
  .catch(err=>{
    res.status(500).json({ message: 'Failed to get trip.'})
    
  })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  TripModel
  .getById(id)
  .then(trip => {
    if (trip) {
      TripModel
      .update(changes, id)
      .then(updatedTrip => {
        res.status(201).json(updatedTrip);
      });
    } else {
      res.status(404).json({ message: 'Could not find trip with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update trip' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  TripModel
  .remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find trip with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete trip' });
  });
});




module.exports = router;