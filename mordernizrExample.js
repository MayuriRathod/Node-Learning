/*
Example code to check usage of modernizr module
*/

const express = require('express');
const modernizr = require('modernizr');

Modernizr.build({}, function (result) {
  // console.log('result', result); // the build 
});

const app = express();
const port = 3010;

app.get('/', (req, res) => {
	res.send('random');
	// console.log('express', express);
	console.log('modernizr', Modernizr.build);
	Modernizr.testProp('promises', (result) => {
		if (result) {
			res.send('promises supported');
		} else {
			res.send('promises not supported');
		}
	});
})

app.listen(port);