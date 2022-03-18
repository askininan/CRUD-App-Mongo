const express = require('express');
const route = express.Router();

const services = require('../services/render')

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes)

/**
 * @description add users
 * @method GET /add_user
 */
route.get('/add_user', services.add_user)

/**
 * @description update users
 * @method GET /update_user
 */
route.get('/update_user', services.update_user)

module.exports = route