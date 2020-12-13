'use strict';

var controller = require('./controller');

module.exports = function(app) {

   app.route('/about')

       .get(controller.about);

   app.route('/apiabout')
       .get(controller.get_about);

};
