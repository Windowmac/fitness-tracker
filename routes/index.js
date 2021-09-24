const express = require('express');
const router = express.Router();
const apiRoutes = require('./apiRoutes.js');

router.use('/api', apiRoutes);

module.exports = router;