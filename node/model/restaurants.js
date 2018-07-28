const Restaurants = require('../db/restaurants');

function save(data) {
    return Restaurants.create(data);
}

async function saveAll(venues) {
    return Promise.all(venues.map(getOrSave));
}

async function getOrSave(venue) {
    let item = await getById(venue.id);
    return item || await save(venue);
}

async function getById(id) {
    const items = await Restaurants.find().where('id').equals(id);
    return items[0];
}

module.exports = {
    saveAll
};