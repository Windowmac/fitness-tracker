const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 3030 || process.env.PORT;
const mongoose = require('mongoose');
const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded( {extended: false } ));

app.use(router);

mongoose.connect(process.env.MONGO_DB_URI).then( () => {
    app.listen(PORT);
    console.log('listening on ', PORT);
});