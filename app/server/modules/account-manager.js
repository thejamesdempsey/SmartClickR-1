/*
* SmartClickR Account-Manager Module
* Used for handling user accounts
* Version: 0.0.1
*/


// Requirements for the Module //
var bcrypt = require('bcrypt');




var AM = {};
// Connect to the database



module.exports = AM;

// Logging in //
AM.autoLogin = function(user, pass, callback) {

}

AM.manualLogin = function(user, pass, callback) {

}

// record insertion, update & deletion methods //
AM.signup = function(newData, callback) {

}

AM.update = function(newData, callback) {


}

AM.setpasword = function(email, newPass, callback) {


}


AM.validateLink = function(email, passHash, callback) {


}

AM.saltAndHash = function(pass, callback) {
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(pass, salt, function(err, hash) {
			callback(hash);
		});
	});
}

AM.delete = function(id, callback) {


}

// Auxiliary Methods //
AM.getEmail = function(email, callback) {

}

AM.getObjectId = function(id) {
	//return object id given to an object by mongo
}


AM.getAllRecords = function(callback) {


}

// Methods used for Testing //

AM.deleteAllRecords = function(id, callback) {
	
}








