const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Workout = require('../models/Workout.js');

router.get('/workouts', (req, res) => {
    console.log(new Workout({exercises: req.body.exercises, distance: req.body.distance }));
    res.status(200).json('made it to workouts!');
});

module.exports = router;