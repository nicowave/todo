// routes.js
// 

'use strict';


module.exports = function(app) {

	var todoList = require('../controllers/controller');

	// CRUD operations that DO NOT need the 'taskId' parameter
	app.route('/tasks')
		.get(todoList.list_all_tasks)
		.post(todoList.create_a_task);


	// CRUD operations that use 'taskId' parameter
	app.route('/tasks/:taskId')
		.get(todoList.read_a_task)
		.put(todoList.update_a_task)
		.delete(todoList.delete_a_task);

};


