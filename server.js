var zmq = require('zmq');
var getUserData = require('./userInfo')
var argv = require('optimist').default({
	bind: 'tcp://*:6005'
}).argv

var responder = zmq.socket('asyncrep');
responder.bind(argv.bind, function(error) {
	if(error) {
		console.log(error);
	}
	console.log("binding on : ", argv.bind);
});

responder.on('message', function(message, response) {
	var tokens = JSON.parse(message.toString());
	console.log("Requester sends: ", tokens);
	getUserData(tokens, function(userData) {
		if (error) {
			response.send("error");
		}
		else {
			response.send(null, JSON.stringify(userData));
		}
	});
});
