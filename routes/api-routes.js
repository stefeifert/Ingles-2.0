const User = require('../models/User');
const Item = require('../models/Item');
const List = require('../models/List');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const Bogo = require('../models/Bogo');

module.exports = function(app) {
  app.post('/api/authenticate', function(req, res) {
    const { username, password } = req.body;
    User.findOne({ username: username })
      .then(function(user) {
        const isValidPass = user.comparePassword(password);
        if (isValidPass) {
          // NOTE: the secret should ultimately come from an environment variable and not be hard coded into the site
          const token = jwt.sign({ data: user.id }, process.env.JWT_SECRET);
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
      const token = jwt.sign({ data: dbUser.id }, process.env.JWT_SECRET);

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
    const {lat, lng} = req.query;
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=64140.2&keyword=ingles&key=${process.env.GOOGLE_PLACES_KEY}`)
    .then(response => {
      const markets = response.data.results.filter(market => {
        return market.name.match(/Ingles Market/) !== null;
      });
      res.json(markets);
    })
    .catch(err => {
      res.status(400).json({ err: err });
    });
  });

  app.get('/api/products', function (req, res) {
    Item.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

 
    app.get('/api/products/:id', (req, res) =>{
      Item.findOne({_id: req.params.id},
          function(err, item) {
              if(err) {
              res.json(err);
              }
              else {
              res.json(item);
              }
          });
  });

  app.post('/api/bogolist', function(req, res) {
    Bogo.create(req.body).then(function(rows) {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error })
    });
  });

  app.get('/api/bogolist', function (req, res) {
    Bogo.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });



 
  // app.post('/api/blogpost', function (req, res) {
  //   BlogPost.create(req.body)
  //     .then(function (data) {
  //       res.json(data);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // });

















  
};