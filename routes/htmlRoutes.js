const express = require('express');
const router = express.Router();
const path = require('path');
const indexHTML = path.join(__dirname, '../public/index.html');
const statsHTML = path.join(__dirname, '../public/stats.html');
const exerciseHTML = path.join(__dirname, '../public/exercise.html');

router.get('/stats*', (req, res) => {
    res.status(200).sendFile(statsHTML);
});

router.get('/exercise*', (req, res) => {
    res.status(200).sendFile(exerciseHTML);
});

router.get('/*', (req, res) => {
    res.status(200).sendFile(indexHTML);
});


module.exports = router;