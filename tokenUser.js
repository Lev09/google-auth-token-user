var googleapis = require('googleapis');
var OAuth2 = googleapis.auth.OAuth2;

var tokens = {
	access_token: 'ya29.LgDwCpX13ZA1vR8AAAAAWvcbLHSurQx0FL6DbF0jePjXwJwjxUKbhzbv2JdtYw',
  token_type: 'Bearer',
  expires_in: 3599,
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZiYTZiNmZmZDdhYWEzZTQ2NWY4MzA5ZGZlMTUxNmU4ZWQwNWQ0OWQifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWQiOiIxMDU0MTkwMzIxMTIyODc1MzYxNDUiLCJzdWIiOiIxMDU0MTkwMzIxMTIyODc1MzYxNDUiLCJhenAiOiIzODUyNjg2MDc1Ny1rMzJwbTNkOXYwYzBsZzBwZ2ZmOWxmbmRmdmxrYWUwaC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF0X2hhc2giOiJxNF9kb1FUdHY4WjRKWVQyYVJaM1B3IiwiYXVkIjoiMzg1MjY4NjA3NTctazMycG0zZDl2MGMwbGcwcGdmZjlsZm5kZnZsa2FlMGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJ0b2tlbl9oYXNoIjoicTRfZG9RVHR2OFo0SllUMmFSWjNQdyIsImNpZCI6IjM4NTI2ODYwNzU3LWszMnBtM2Q5djBjMGxnMHBnZmY5bGZuZGZ2bGthZTBoLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiaWF0IjoxNDAzMjYyMjc3LCJleHAiOjE0MDMyNjYxNzd9.HAybAGx-Gd3iXYg-mbFFCWmN-w8SbIsK_ekbCUggKflRFyv6YpfaDp7rxYluVUrO4K60fCTe90xOHdJmp9WQV1AdPBHFaT1KV6Iu0JcLqHJQAdV63wspTh33gZcjZEXsTlPiqoyHpBFmiVwGDKzXF5hGgkWBS4kjqNB6swd__Zg'
};

var newClient = function() {
	var oauth2Client = new OAuth2(
		'38526860757-k32pm3d9v0c0lg0pgff9lfndfvlkae0h.apps.googleusercontent.com', 
		'd1NYp4UbZVMdxbMi9UjMu-8q',
		'http://127.0.0.1:3033/oauth/google/callback'
	);
	return oauth2Client;
};

var getuserdata = function(tokens) {
	
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
	
				//console.log(data);
				console.log('ID: ' + data.id);
				console.log('Display Name: ' + data.displayName);
				console.log('Image URL: ' + data.image.url);
				console.log('Profile URL: ' + data.url);
			});
		});
};
getuserdata(tokens);
