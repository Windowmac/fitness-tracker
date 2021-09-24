const express = require('express');
const router = express.Router();

router.get('/workouts', (req, res) => {
    console.log('made it to workouts!')
});