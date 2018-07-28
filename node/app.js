var express = require('express');
var app = express();

const venues = require('./venues');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});


app.get('/venues', async function (req, res) {
    const { lat, lang } = req.query;

    res.header('Cache-Control', 'public, max-age=604800');
    res.send(await venues.getVenues(lat, lang));
});

app.listen(3003);