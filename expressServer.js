/*
Demo code to test routing using express js
*/


// const path = require('path');
const express = require('express');
// const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// app.engine('.hbs', exphbs({
// 	defaultLayout: 'main',
// 	extname: '.hbs',
// 	layoutsDir: path.join(__dirname, 'views/layouts')
// }));

// app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname, 'views'));

var requestTime = function (req, res, next) {
	req.requestTime = Date.now();
	next();
}

app.use(requestTime);

app.get('/', (request, response) => {
	var responseText = "Hello World!<br>";
	responseText += '<small>Requested at: ' + request.requestTime + '</small>';
	response.send(responseText);
});

app.get('/user/:id', function(req, res, next) {
	if(req.params.id === '0') next('route');
	else next();
}, function(req, res, next) {
	// res.render('regular');
	console.log('first', req.params.id);
	req.params.id = req.params.id + 'changed';
	next();
});

app.get('/user/:id', function(req, res, next) {
	// res.render('special');
	console.log('second', req.params.id);
	// console.log('request is:', req);
	res.send(`okay ${req.params.id}`);
});

app.listen(port);