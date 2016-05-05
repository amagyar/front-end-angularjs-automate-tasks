var express = require('express');
var cors = require('express-cors');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {
	var app = express();

	app.use(express.static('app/public'));

	app.set('view engine', 'ejs');
	app.set('views', 'app/views');

	app.use(cors({allowedOrigins: ['localhost']}));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(expressValidator());

	load('routes', { cwd: 'app' }).into(app);

	// Se não encontrou nenhuma rota:
	app.use(function (req, res, next) {
		res.status(404).render('erros/404', { req: req });
		if (typeof next === 'function') {
			next();
		}
	});

	// Se houve erro:
	app.use(function (error, req, res, next) {
		if (process.env.NODE_ENV == 'production') {
			res.status(500).render('erros/500');
		}

		if (typeof next === 'function') {
			next(error);
		}
	});

	return app;
}
