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

router.put('/workouts/*', async (req, res) => {
    const dbData = await Workout.findById(req.params[0]).catch(err => {console.log(err)});
    const newExercises = dbData.exercises.concat(req.body);
    const updated = await Workout.findByIdAndUpdate(req.params[0], { exercises: newExercises }).catch(err => {console.log(err)});
    console.log('newexercises are: ', newExercises)
    res.status(201).json(updated);
});

module.exports = router;
