const Router = require('express');

const AppController = require('../controllers/appController');
const HmController = require('../controllers/hmController');
const cdsController = require('../controllers/cdsController');

const routes = new Router();

routes.get('/Home/Application', AppController.getApplications);
routes.get('/Home', HmController.getApplications);

routes.post('/Home/Application/Create_Application', AppController.create_new_application);
routes.post('/Home/Create_User', cdsController.cadastroUser);
routes.post('/Home/Cadastro/Create_Person', cdsController.cadastroPerson);

module.exports = routes;

/*
'use strict';

module.exports = function(app) {
	var messages = require('../controllers/msgController');
	
	// messages Routes
	// Será usado /Message para GET e POST para listar todas as mensagens e criar novas
	app.route('/messages')
		.get(messages.list_all_messages)
		.post(messages.create_a_message);

	// Será usado /messages/:msgId para GET, PUT e DELETE para ler uma mensagem especifica, atualizar uma mensagem existente ou deletar uma mensagem existente.
	app.route('/messages/:msgId')
		.get(messages.read_a_message)
		.put(messages.update_a_message)
		.delete(messages.delete_a_message);

	app.route('/Home/Application')
		.get(application.getApplications);
};
*/
