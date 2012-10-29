/*
* Router for SmartClickr
* Version: 0.0.1
* Date: 10/28/12
*/

// modules that the router will require //

module.exports = function(app) {

// main index page //
	app.get('/', function(request, response) {
		// check if the user's credentials are saved in a cookie - Remember Me //

		response.render('index.jade', {title: 'SmartClickR | A Smarter Way to Poll'});
		console.log(request.protocol);
		// attempt automatic login //

	});


// features page //




// signup page //




// login page //




// lost-password page //






// reset-password page //







// setting page //






// username page //








// create-poll page //





// edit-poll page //





// present-poll page //





// present-poll/question# page //






// present-poll/done page //






// session-id/question# page //





// session-id/done page //






};