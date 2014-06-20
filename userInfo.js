var googleapis = require('googleapis');
var OAuth2 = googleapis.auth.OAuth2;

var newClient = function() {
	var oauth2Client = new OAuth2(
		'38526860757-k32pm3d9v0c0lg0pgff9lfndfvlkae0h.apps.googleusercontent.com', 
		'd1NYp4UbZVMdxbMi9UjMu-8q',
		'http://127.0.0.1:3033/oauth/google/callback'
	);
	return oauth2Client;
};

module.exports = function(tokens, done) {

	var oauth2Client = newClient();
	oauth2Client.setCredentials(tokens);
	
	googleapis
		.discover('plus', 'v1')
		.withAuthClient(oauth2Client)
		.execute(function(err, client) {

		client.plus.people.get({userId: 'me'}).execute(
			function(error, data) {
				if (error) {
					console.log(error);
				}
				else {
					console.log('ID: ' + data.id);
					console.log('Display Name: ' + data.displayName);
					console.log('Image URL: ' + data.image.url);
					console.log('Profile URL: ' + data.url);
					
					done(data);
				}
			});
		});
};
