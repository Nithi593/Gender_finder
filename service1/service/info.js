var request = require('request');


const APIURL = 'https://api.genderize.io?name={name}';

var info = {

   about: function(req, res, next) {

       request(APIURL  ,

       function (error, response, body) {

           if (!error && response.statusCode == 200) {

               response = JSON.parse(body);

               res.send(response);

           } else {

               console.log(response.statusCode + response.body);

               res.send({info: NULL});

           }

       });

   }

};

module.exports = info;
