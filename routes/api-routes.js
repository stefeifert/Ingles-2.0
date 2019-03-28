const User = require('../models/User');
const Item = require('../models/Item');
const List = require('../models/List');
const jwt = require('jsonwebtoken');
const axios = require('axios');

module.exports = function(app) {
  app.post('/api/authenticate', function(req, res) {
    const { username, password } = req.body;
    User.findOne({ username: username })
      .then(function(user) {
        const isValidPass = user.comparePassword(password);
        if (isValidPass) {
          // NOTE: the secret should ultimately come from an environment variable and not be hard coded into the site
          const token = jwt.sign({ data: user.id }, 'superSecretKey');
          res.json({
            id: user.id,
            username: user.username,
            token: token,
          });
        } else {
          res.status(401).json({ message: 'Incorrect username or password.' });
        }
      })
      .catch(function(err) {
        res.status(401).json({ message: 'Incorrect username or password.' });
      });
  });

  app.post('/api/signup', function(req, res) {
    const userData = {
      username: req.body.username,
      password: req.body.password,
    };

    User.create(userData).then(function(dbUser) {
      const token = jwt.sign({ data: dbUser.id }, 'superSecretKey');

      res.json({ success: true, user: dbUser, token: token });
    });
  });

  app.get('/api/protected', function(req, res) {
    res.json({
      message: 'Super secret stuff. I mean really.',
      user: req.user,
    });
  });

  app.get('/api/public', function(req, res) {
    res.json({
      message: 'This is just boring, public data.',
    });
  });

  app.get('/api/locations', function(req, res) {
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.776302,%20-84.390012&radius=24140.2&type=store&keyword=ingles+market&key=${process.env.GOOGLE_PLACES_KEY}`)
    .then(response => {
      res.json(response.data.results);
    })
    .catch(err => {
      res.status(400).json({ err: err });
    });
  });



















  
};