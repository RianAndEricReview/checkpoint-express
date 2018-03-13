'use strict';

var express = require('express');
var router = express.Router();
const userRoutes = require('./users')
const taskRoutes = require('./tasks')

router.use('/users', userRoutes)
router.use('/tasks', taskRoutes)

module.exports = router;
