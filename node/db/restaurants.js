const Schema = require('mongoose').Schema;
const connection = require('../db-connection');

const schema = new Schema(
    {
        id: String,
        name: String,
        photo: String,
        lat: Number,
        lng: Number,
        distance: Number,
        isOpen: Boolean,
        website: String
    });

module.exports = connection.model('restaurants', schema);
