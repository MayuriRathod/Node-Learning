var propertyList = [ 'forcetouch', 'geolocation', 'touchevents', 'arrow'];
var result = [];
propertyList.forEach( (property) => {
	let propertyObject = {
		'property': property,
		'value': Modernizr[property]
	};
	result.push(propertyObject);
});

//     {name: "Mayuri Rathod", className: "engineer"},
//     {name: "Himanshu Rathod", className:"accountant"}
// ];
var templateScript = Handlebars.templates.table(result);
console.log('template script', templateScript);
document.write(templateScript);