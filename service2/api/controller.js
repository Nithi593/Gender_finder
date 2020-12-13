	'use strict';

var properties = require('../package.json');

var controllers = { 
  
  about: function(req,res){ 
      var aboutInfo = { Gender: properties.name }
      res.json(aboutInfo); 
  }
}
module.exports = controllers;
