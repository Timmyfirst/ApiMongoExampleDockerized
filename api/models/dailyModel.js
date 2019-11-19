'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DailySchema = new Schema({
  user: {
    type: String,
    required: 'nom de la personne obligatoire !'
  },
  status: {
    type: String,
    enum: ['present', 'absent'],
    default: 'absent'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('dailys', DailySchema);
