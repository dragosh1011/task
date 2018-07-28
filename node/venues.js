const getData = require('./getData');
const model = require('./model/restaurants');

async function getVenues(lat, lang) {
    var venues = await getData(lat, lang);
    console.log(venues);
    if (venues && venues.length) {
        return await model.saveAll(venues);
    }

    return [];
}

module.exports = {
    getVenues
};
