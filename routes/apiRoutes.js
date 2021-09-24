const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Workout = require('../models');

router.get('/workouts', async (req, res) => {
  await connect;

  const workoutData = await Workout.find({}).catch((err) => {
    console.log(err);
  });

  res.status(200).json(workoutData);
});

router.put('/workouts/*', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
})

module.exports = router;
