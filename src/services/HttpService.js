var Fetch = require('whatwg-fetch');
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
			method: 'POST',
			body: JSON.stringify(body)
		}).then(function(response){
			return response;
		});
	}
};

module.exports = service;