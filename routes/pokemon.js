var express = require('express');
var router = express.Router();
var request = require('request');

var url = 'http://pokeapi.co/api/v2/pokemon/';

router.get('/:id', function(req, res, next) {
   request(url + req.params.id, function(err, response, body) {
      res.json(JSON.parse(body));
   })
});

/* GET pokemon listing. */
router.get('/', function(req, res, next) {

  var limit = 10;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined') {
    limit = req.query.limit;
  }

   if(typeof req.query.page !== 'undefined' && req.query.page > 1) {
      offset = ((req.query.page - 1) * limit);
   }

   var _url = url + '?offset=' + offset + '&limit=' + limit;

   request(_url, function(err, response, body) {
      res.json(JSON.parse(body));
   })
});




module.exports = router;
