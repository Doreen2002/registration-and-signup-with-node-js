const express = require('express');

const route = express.Router();

const {createTaskController, viewTaskController } = require('../controllers/tasksController.js');

const {verifyer} = require('../controllers/verifyToken.js');


route.post('/create-task', createTaskController);

route.get('/created-task',verifyer,  viewTaskController);

module.exports = route;