const request = require('request-promise');

async function getData(lat, lng) {
    const response = await request(getRequestLink(lat, lng));
    return formatResponse(JSON.parse(response));
}

function formatResponse(response) {
    const data = response.response.groups.map(group => {
        return group.items.map(item => formatVenue(item.venue));
    });

    return [].concat.apply([], data);
}

function formatVenue(venue) {
    return {
        id: venue.id,
        name: venue.name,
        photo: getPhoto(venue),
        lat: venue.location.lat,
        lng: venue.location.lng,
        distance: venue.location.distance,
        isOpen: venue.hours && venue.hours.isOpen,
        website: venue.url
    };
}


function getPhoto(venue) {
    //requested only one photo so this should pe path to it if exists
    const photo = venue.photos && venue.photos.groups && venue.photos.groups[0] && venue.photos.groups[0].items && venue.photos.groups[0].items[0];
    return photo? `${photo.prefix}${photo.width}x${photo.height}${photo.suffix}` : '';
}

function getRequestLink(lat, lng) {
    console.log(lat,lng);
    return `https://api.foursquare.com/v2/venues/explore?ll=${lat},${lng}&section=food&venuePhotos=1&oauth_token=NKRP0KY5ZDZIBMCU3TZS4BMP4ZMIQZBQPLBTCPXSIGPWFJ1L&v=20160629`;
}

module.exports = getData;