/*
Demo application to test usage of express handlebars
*/

// Require the dependencies
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

// Initialize express application
var app = express();

// Set handle bar engine
app.engine('handlebars', exphbs({defaultLayout: 'demo'}));
app.set('view engine', 'handlebars');

// Set the port
app.set('port', process.env.PORT || 3000);

// Defining options object
var options = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['htm', 'html'],
	index: false
};

// The the static files
app.use(express.static(path.join(__dirname, 'public'), options));

// Homepage
app.get('/:_name', (req, res) => {
	res.render('hello', {name: req.params._name});
});

// Bodie page
app.get('/bodie', (req, res) => {
	res.render('bodie');
});

// June page
app.get('/june', (req, res) => {
	res.render('june');
});

app.listen(app.get('port'), () => {
	console.log('Express is hosted on http://localhost:',app.get('port'), '\n Press Ctrl+C to terminate');
})