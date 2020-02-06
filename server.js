var ghost = require('ghost');
var express = require('express');
var urlService = require('./node_modules/ghost/core/frontend/services/url');
var parentApp = express();

console.log('in server');
// Run a single Ghost process
ghost()
	.then(function(ghostServer) {
		// console.log(`TCL: ghostServer`, ghostServer.config);
		// for making subdir work
		parentApp.use(urlService.utils.getSubdir(), ghostServer.rootApp);
		ghostServer.start(parentApp);
	})
	.catch(error => {
		console.error(`Ghost server error: ${error.message} ${error.stack}`);
		process.exit(1);
	});
