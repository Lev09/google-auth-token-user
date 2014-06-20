var zmq = require('zmq');

//put your tokens
var tokens = {
	access_token: 'ya29.LgD3AbuQX1pmAh8AAAC1bSbSkxJEXPXK4wWzMfgW0-MuT82b17850vtTr6xH5Q',
  token_type: 'Bearer',
  expires_in: 3599,
  id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZiYTZiNmZmZDdhYWEzZTQ2NWY4MzA5ZGZlMTUxNmU4ZWQwNWQ0OWQifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWQiOiIxMDU0MTkwMzIxMTIyODc1MzYxNDUiLCJzdWIiOiIxMDU0MTkwMzIxMTIyODc1MzYxNDUiLCJhenAiOiIzODUyNjg2MDc1Ny1rMzJwbTNkOXYwYzBsZzBwZ2ZmOWxmbmRmdmxrYWUwaC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF0X2hhc2giOiIzSUF5U1BIcFVUM21kdDVUTWY1WFZBIiwiYXVkIjoiMzg1MjY4NjA3NTctazMycG0zZDl2MGMwbGcwcGdmZjlsZm5kZnZsa2FlMGguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJ0b2tlbl9oYXNoIjoiM0lBeVNQSHBVVDNtZHQ1VE1mNVhWQSIsImNpZCI6IjM4NTI2ODYwNzU3LWszMnBtM2Q5djBjMGxnMHBnZmY5bGZuZGZ2bGthZTBoLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiaWF0IjoxNDAzMjY4MzMwLCJleHAiOjE0MDMyNzIyMzB9.LoQNYskhardHJV5EiZS3YdMZFTJYQpFNcZtiYXvQVROYekLyx8X9Wa9pnGQEAq_vGBUbNrKpkxkGYjjGWQ1ssQ8L45KtqJqLQvJijKCcvNAy6QnSp0vH5eLDJvXHciHn4UH0--v7JhRIV7u7qR2uTHI18PXKhE5yGHThBhOwjnE' 
};

var requester = zmq.socket('asyncreq');
requester.connect('tcp://localhost:6005');

requester.send(JSON.stringify(tokens), function(response) {
	console.log(JSON.parse(response));
});
