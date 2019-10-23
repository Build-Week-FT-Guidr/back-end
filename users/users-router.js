const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../secrets');

const authenticated = require('./authenticate-middleware');

const Users = require('./users-model');

router.get('/', authenticated, (req, res) => {
    Users
    .find()
    .then(users=>{
      res.status(200).json(users);
    })
    .catch(err=>{
      res.status(500).json({ message: 'Failed to get users.'})
    })
  });

  router.get('/:id', (req, res)=>{
    const { id } = req.params;
    Users
    .findById(id)
    .then(user=>{
      res.status(200).json(user);
    })
    .catch(err=>{
      res.status(500).json({ message: 'Failed to get user.'})
      
    })
  })

  router.get('/:id/trips', (req, res) => {
    const { id } = req.params;
    Users
    .getUserTrips(id)
    .then(trips =>{
      res.status(200).json(trips)
    })
    .catch(err=>{
      res.status(500).json({ message: 'Failed to get user trips.'})
    })
  })

  router.get('/:id/profile', (req, res) => {
    const { id } = req.params;
    Users
    .getUserProfile(id)
    .then(profile =>{
      res.status(200).json(profile)
    })
    .catch(err=>{
      res.status(500).json({ message: 'Failed to get user profile.'})
    })
  })
  
  router.post('/:id/trips', (req, res) => {
    const  id  = req.params.id;
    const tripData = req.body;
    tripData.user_id = req.params.id;
    console.log('tripId', tripData.user_id)
  
    Users.addUserTrip(tripData, tripData.user_id)
    .then(trip => {
      res.status(201).json(trip);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new trip' });
    });
  });

  router.post('/:id/profile', (req, res) => {
    const  id  = req.params.id;
    const profileData = req.body;
    profileData.user_id = req.params.id;
  
    Users.addUserProfile(profileData, profileData.user_id)
    .then(profile => {
      res.status(201).json(profile);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new profile' });
    });
  });

  router.post('/register', (req, res) => {
    // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;
    console.log(user);
    Users.add(user)
      .then(saved => {
        console.log(saved);
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  router.post('/login', (req, res) => {
    // implement login
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          //produce token
          const token = generateToken(user)
          //add token to response
          res.status(200).json({
            message: `Welcome ${user.username}!`, token
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  function generateToken(user) {
    const payload ={
      username: user.username,
      id: user.id //
    };
  
    const options ={
      expiresIn: '1h',
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
  }
  module.exports = router;





module.exports = router;
