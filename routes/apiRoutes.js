const express = require('express');
const router = express.Router();

router.get('/workouts', (req, res) => {
    res.status(200).json('made it to workouts!');
});

module.exports = router;