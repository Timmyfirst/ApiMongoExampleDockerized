'use strict';

var mongoose = require('mongoose'),
  Daily = mongoose.model('dailys');

exports.listAllDailys = function(req, res) {
  Daily.find({}, function(err, daily) {
    if (err)
      res.send(err);
    res.json(daily);
  });
};

exports.createADaily = function(req, res) {
  var newDaily = new Daily(req.body);
  newDaily.save(function(err, daily) {
    if (err)
      res.send(err);
    res.json(daily);
  });
};

exports.readADaily = function(req, res) {
  Daily.findById(req.params.dailyId, function(err, daily) {
    if (err)
      res.send(err);
    res.json(daily);
  });
};

exports.updateADaily = function(req, res) {
  Daily.findOneAndUpdate({_id: req.params.dailyId}, req.body, {new: true}, function(err, daily) {
    if (err)
      res.send(err);
    res.json(daily);
  });
};

exports.deleteADaily = function(req, res) {
  Daily.remove({
    _id: req.params.dailyId
  }, function(err, daily) {
    if (err)
      res.send(err);
    res.json({ message: 'Daily successfully deleted' });
  });
};
