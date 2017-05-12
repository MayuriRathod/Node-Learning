/*
Demo Application to create api to 
update darabase using mongodb and expressjs
*/

// Require needed modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Genre = require('./views/genre');
const cors = require('cors');

// initiallize
var app = express();
var port = 3000;

// Create mongo database connection
var url = 'mongodb://localhost/store';
mongoose.connect(url);
var db = mongoose.connection;

// Middlewares
//app.use(bodyParser.json());
var originsWhitelist = [
  'http://localhost:4101'      
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));



// Home Page
app.get('/', (req, res) => {
	res.send('Hello World');
});

// To get all the genres
app.get('/api/genres', (req, res) => {
	Genre.getGenres( (err, genres) => {
		if(err) {
			throw err;
		}
		res.json(genres);
	});
});

// Routing to add genre
app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err) {
			throw err;
		}
		res.json(genre);
	});
});

// Routing to update genre
app.put('api/genres/:_id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if(err) {
			throw err;
		}
		res.json(genre);
	});
});

// Routing to delete genre
app.delete('/api/genres/:_id', (req, res) => {
	var id= req.params._id;
	Genre.removeGenre(id, (err, genre) => {
		if(err) {
			throw err;
		}
		res.json(genre);
	});
});

// Listen on port 
app.listen(3000);
console.log('Running application on port ', port);
