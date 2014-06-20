var zmq = require('zmq');

//put your tokens
var tokens = {
	access_token: 'ya29.LgDwCpX13ZA1vR8AAAAAWvcbLHSurQx0FL6DbF0jePjXwJwjxUKbhzbv2JdtYw',
  token_type: 'Bearer',
  expires_in: 3599,
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZiYTZiNmZmZDdhYWEzZTQ2NWY4MzA5ZGZlMTUxNmU4ZWQwNWQ0OWQifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWQiOiIxMDU0MTkwMzIxMTIyODc1MzYxNDUiLCJzdWIiOiIxMDU0MTkwMzIxMTIyODc1MzYxNDUiLCJhenAiOiIzODUyNjg2MDc1Ny1rMzJwbTNkOXYwYzBsZzBwZ2ZmOWxmbmRmdmxrYWUwaC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF0X2hhc2giOiJxNF9kb1FUdHY4WjRKWVQyYVJaM1B3IiwiYXVkIjoiMzg1MjY4NjA3NTctazMycG0zZDl2MGMwbGcwcGdmZjlsZm5kZnZsa2FlMGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJ0b2tlbl9oYXNoIjoicTRfZG9RVHR2OFo0SllUMmFSWjNQdyIsImNpZCI6IjM4NTI2ODYwNzU3LWszMnBtM2Q5djBjMGxnMHBnZmY5bGZuZGZ2bGthZTBoLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiaWF0IjoxNDAzMjYyMjc3LCJleHAiOjE0MDMyNjYxNzd9.HAybAGx-Gd3iXYg-mbFFCWmN-w8SbIsK_ekbCUggKflRFyv6YpfaDp7rxYluVUrO4K60fCTe90xOHdJmp9WQV1AdPBHFaT1KV6Iu0JcLqHJQAdV63wspTh33gZcjZEXsTlPiqoyHpBFmiVwGDKzXF5hGgkWBS4kjqNB6swd__Zg'
};

var requester = zmq.socket('asyncreq');
requester.connect('tcp://localhost:6005');

requester.send(JSON.stringify(tokens), function(response) {
	console.log(response);
});

requester.on('message', function(error, userData) {
	if(error) {
		console.log(error);
	}
	else {
		console.log(JSON.parse(userData));
	}
});
