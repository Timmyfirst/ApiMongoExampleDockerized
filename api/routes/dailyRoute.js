'use strict';
module.exports = function(app) {
  var dailysList = require('../controllers/dailyController');

  // dailys Routes
  app.route('/dailys')
    .get(dailysList.listAllDailys)
    .post(dailysList.createADaily);


  app.route('/dailys/:dailyId')
    .get(dailysList.readADaily)
    .put(dailysList.updateADaily)
    .delete(dailysList.deleteADaily);
};
