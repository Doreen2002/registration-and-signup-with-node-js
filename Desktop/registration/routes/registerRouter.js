const express = require('express');

const route = express.Router();

const {registerController, loginUserController} = require('../controllers/registerController.js')


route.post('/register', registerController)

route.post('/login', loginUserController)

module.exports = route;