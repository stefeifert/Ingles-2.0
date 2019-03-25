const db = require('../models');

module.exports = function (app) {

  app.get('/api/notes', function (req, res) {
    db.Note.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/notes', function (req, res) {
    db.Note.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}