/* 
* Node server configuration file
* Version: 0.0.1
* Date: 10/28/12
*/

module.exports = function(app, express) {

	app.configure(function() {
		console.log("configuring");
		app.use(express.logger('dev'));
		app.set('views', app.root + '/app/server/views');
		app.set('view engine', 'jade');
		//app.set('view options', {doctype: 'html', pretty : true });
		app.use(express.bodyParser());
		app.use(express.cookieParser());
		app.use(express.session({ secret: 'the-secret-is-hidden-at-klines'}));
		app.use(express.methodOverride());
		app.use(express.static(app.root + '/app/server'));
		app.use(express.static(app.root + '/app/public'));
		app.use(app.router); //always put after everything else!!! especially body parser
	});
}