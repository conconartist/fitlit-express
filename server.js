const express = require('express');
const cors = require("cors");
const app = express();
const userData = require('./userData.js');

app.locals.users = userData;
app.locals.sleeps = sleepData;
app.locals.hydrations = hydrationData;
app.locals.activities = activityData;

app.use(express.json());
app.use(cors());

app.set('port', 3001)

app.get('/api/v1/users', (request, response) => {
    response.status(200).json(app.locals.users)
})

app.get('/api/v1/sleeps', (request, response) => {
    response.status(200).json(app.locals.sleeps)
})

app.get('/api/v1/hydrations', (request, response) => {
    response.status(200).json(app.locals.hydrations)
})

app.get('/api/v1/activities', (request, response) => {
    response.status(200).json(app.locals.activities)
})

app.listen(app.get('port'), () => {
    console.log(`Now listening on port ${app.get('port')}!`)
})

