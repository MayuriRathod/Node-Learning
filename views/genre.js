// Get mongoose module
const mongoose = require('mongoose');

// Prepare Genre schema
const genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

// 
const Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGenres = (callback, limit) => {
	Genre.find(callback).limit(limit);
}

// Add Genre
module.exports.addGenres = (genre, callback) => {
	Genre.create(genre, callback);
}

// Update Genre
module.exports.updateGenres = (id, genre, options, callback) => {
	var query = {_id: id};
	var update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete Genre
module.exports.removeGenre = (id, callback) => {
	var query = {_id: id};
	Genre.remove(query, callback);
}