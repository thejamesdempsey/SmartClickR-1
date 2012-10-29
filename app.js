/**
* Description: SmartClickR webapp ISAT Senior Capstone Project
* Author: Daniel To, Jimmy Dempsey
* Version: 0.0.1
* Date: 10/28/12
*/

var express = require('express');
var app = express.createServer();

app.root = __dirname;
global.host = 'localhost';

//require config and the router files!!!
require('./app/config')(app,express);
require('./app/server/router')(app);

app.listen(3000, function() {
	console.log("Express Server Listening on port %d in %s mode", app.address().port, app.settings.env);
});