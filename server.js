const express = require('express');
const application = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
application.use(cors());
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
require('dotenv').config();

const db = process.env.DATABASE_PASSWORD;

const port = process.env.PORT || 8080;

// connecting to the database here
mongoose.connect(db)
    .then(console.log('Database connected'))
    .catch(error => console.log(error));

// the variable for the actual database connection here
const database = mongoose.connection;

// routes are here
application.get('/testAPI', (request, response) => {
    response.json('Test API working');
});
application.get('/register', (request, response) => {
    response.send('Register route');
});
application.post('/register', (request, response) => {
    response.json('Send response here');
    database.collection('data').insertOne(request.body);
});

// incorporating the build into the application
application.use(express.static('frontend/build'));
application.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

// listen to server
application.listen(port, () => {
    console.log('Listening here...');
});
