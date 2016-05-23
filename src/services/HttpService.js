var fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:8080';

var service = {
	get: function(url){
		return fetch(baseUrl+url)
			.then(function(response){
				return response.json();
			});
	},
	post: function(url, body){
		return fetch(baseUrl+ url, {
			headers: {
				'Accept': 'text/plain',
				'Content-Type': 'application/json'
			},
			method: 'post',
			body: JSON.stringify(body)
		}).then(function(response){
			return response;
		});
	}
}

module.exports = service;