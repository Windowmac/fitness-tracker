const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const exerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
  })
const workoutSchema = new Schema({
    day: Date,
    exercises: [exerciseSchema],
    distance: Number
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;