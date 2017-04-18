/*
Demo Application to create api to 
update darabase using mongodb and expressjs
*/

// Require needed modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Genre = require('./views/genre');
var path = require('path');
var exphbs = require('express-handlebars');
const methodOverride = require('method-override');

// Initialize express application
var app = express();
var port = 3000;

// Set handle bar engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Create mongo database connection
var url = 'mongodb://localhost/store';
mongoose.connect(url);
var db = mongoose.connection;

// Defining options object
var options = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['htm', 'html'],
	index: false
};

// Get the static files
app.use(express.static(path.join(__dirname, 'public'), options));

// Middlewares
app.use(bodyParser.json());

// Home Page
app.get('/', (req, res) => {
	res.render('hello', 
	{ user: 
		{
		  contact: {
		    email: 'hi@azat.co',
		    twitter: 'azat_co',
		    facebook: 'vkjijuol vbkohol'
		  },
		  address: {
		    city: 'San Francisco',
		    state: 'California'
		  },
		  name: 'Azat'
		}
	});	
});

app.get('/add', (req, res) => {
	res.render('addGenre');
});

app.get('/list', (req, res) => {
	Genre.getGenres( (err, genres) => {
		if(err) {
			throw err;
		}
		res.render('getGenre', {genres: genres});
		//res.json(genres);
	});
	// res.render('getGenres');
});

// To get all the genres
app.get('/api/genres', (req, res) => {
	Genre.getGenres( (err, genres) => {
		if(err) {
			throw err;
		}
		res.render('getGenre', {genres: genres});
		//res.json(genres);
	});
});

// Routing to add genre
app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err) {
			throw err;
		}
		//res.json(genre);
		res.redirect('/');
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
