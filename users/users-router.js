const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../secrets');

const Users = require('./users-model');

router.get('/', (req, res) => {
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
  
  router.post('/register', (req, res) => {
    // implement registration
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
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
  
    };
  
    const options ={
      expiresIn: '1h',
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
  }
  module.exports = router;





module.exports = router;
