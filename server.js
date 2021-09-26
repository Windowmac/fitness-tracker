const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 80;
const mongoose = require('mongoose');
const router = require('./routes');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded( {extended: false } ));

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

mongoose.connect(process.env.MONGO_DB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then( () => {
    app.listen(PORT);
    console.log('listening on ', PORT);
});