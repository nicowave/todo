// server.js for todo api
// 



var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Task = require('./api/models/model'),
	bodyParser = require('body-parser');


var routes = require('./api/routes/routes'); // import routing file
routes(app); // register routes with this app



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res) {

	res.status(404).send({url: req.originalUrl + ' not found'})
});


// listen on port 3000 or port designated for enviroment
app.listen(port);


console.log('todo list RESTful API server started on: ', + port);