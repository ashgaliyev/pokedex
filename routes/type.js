var express = require('express');
var router = express.Router();
var request = require('request');
var _ = require('lodash')
var apicache = require('apicache');

var url = 'http://pokeapi.co/api/v2/type/';

router.get('/:id', function(req, res, next) {
   request(url + req.params.id, function(err, response, body) {
      try {
        var typeInfo = JSON.parse(body)
        var pokemons = typeInfo.pokemon

        var limit = 10;

        if(typeof req.query.limit !== 'undefined') {
          limit = req.query.limit;
        }

        var paged = _.chunk(pokemons, limit)
        var page = 1

        if(typeof req.query.page !== 'undefined') {
          page = req.query.page;
        }

        var output = paged[page - 1].reduce(function(acc, elem) {
          acc.push({
            name: elem.pokemon.name,
            url: elem.pokemon.url
          })
          return acc;
        }, [])

        res.json({
          count: pokemons.length,
          results: output
        });

      } catch(e) {
        res.status(500).send('Fail to fetch api');
        apicache.clear();
      }
   })
});


/* GET pokemon listing. */
router.get('/', function(req, res, next) {
   request(url, function(err, response, body) {
      try {
        res.json(JSON.parse(body));
      } catch(e) {
        res.status(500).send('Fail to fetch api');
        apicache.clear();
      }
   })
});


module.exports = router;