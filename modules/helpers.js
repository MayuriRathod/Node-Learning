/*
This file consists of all helper functions of express-handlebars
*/

var register = function(Handlebars) {
    var helpers = {
    	table: function(genres) {
			let temp = '<table class="table table-hover"><thead><tr><th> NAME </th><th> Created On </th></tr></thead><tbody>';
			genres.forEach( (genre) => {
				temp = temp + '<tr><td>' + genre.name + '</td><td>' + genre.create_date + '</td></tr>';
			});
			temp = temp + '</tbody></table>';
			return temp;
		}
	};
	if (Handlebars && typeof Handlebars.registerHelper === "function") {
	    for (var prop in helpers) {
	        Handlebars.registerHelper(prop, helpers[prop]);
	    }
	} else {
	    return helpers;
	}
};

module.exports.register = register;
module.exports.helpers = register(null); 