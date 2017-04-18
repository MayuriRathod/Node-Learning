var events =  require('events');
var eventEmitter = new events.EventEmitter();

// listner1
var listner1 = () => {
	console.log('listner1');
}

var listner2 = () => {
	console.log('listner2');
}

eventEmitter.on('connection', listner2);

eventEmitter.addListener('connection', listner1);

var eventListners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListners , 'Listner(s) listening to conncetion event');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listner1);
console.log('Listner 1 will not listen now');

eventEmitter.emit('connection');

eventListners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListners , 'Listner(s) listening to conncetion event');

console.log('The End');