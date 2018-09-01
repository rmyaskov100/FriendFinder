
// DEPENDENCIES

var path = require('path');

// ROUTING

module.exports = function(app){

	// HTML GET Requests
	
    app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// DEFAULT HOME, IF ROUTE IS NOT FOUND
    
    app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}