var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

// GET ABOUT PAGE
router.get('/about', function(req, res, next) {
  res.render('about', 
  	{
  		title: 'About',
  		students: [
  			'JT',
  			'Dave',
  			'Erik',
  			'Paige',
  			'Brett'
  		] 
  	});
});


// GET WEATHER PAGE
router.get('/weather', function(req, res, next) {
	var apikey = 'e312dbeb8840e51f92334498a261ca1d';
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
	request.get(weatherUrl, function(error, response, body){
		body = JSON.parse(body);
		res.render('weather', 
			{
				weatherObject: body
			});
	});
});

// GET MOVIE PAGE
router.get('/movie', function(req, res, next) {
	var apiBaseUrl = 'http://api.themoviedb.org/3/';
	var imageBaseUrl = 'http://image.tmdb.org/t/p/w300';
	var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
	var npUrl  = apiBaseUrl + 'movie/now_playing' + apiKey;
	request.get(npUrl, function(error, reponse, body){
		body = JSON.parse(body);
  		res.render('movie', 
  			{
  				movieObject: body,
          imageBaseUrl: imageBaseUrl
  			}); 
  	
  	});  	
});

module.exports = router;
