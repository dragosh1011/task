var express = require('express');
var app = express();

const venues = require('./venues');

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!')
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});


app.get('/venues', async function (req, res) {
    const { lat, lang } = req.query;


    res.send(await venues.getVenues(lat, lang));
});

app.listen(3003);