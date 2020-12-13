	'use strict';

var properties = require('../package.json');
var info = require('../service/info');
var controllers = { 
  
  about: function(req,res){ 
      var aboutInfo = { name:properties.name}
      res.json(aboutInfo); 
  },

  
  get_about: function(req, res){ 
     info.about(req, res, function(err,infor){ 
        if(err) res.send(err); res.json(infor); 
    });
  }}

  

module.exports = controllers;
