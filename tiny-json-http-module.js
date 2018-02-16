const tiny = require("tiny-json-http");

const url =
    "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";

const getLocation = async (url) => {
    try {
        const response = await tiny.get({ url });
        console.log(
            `City: ${response.body.results[0].formatted_address} -`,
            `Latitude: ${response.body.results[0].geometry.location.lat} -`,
            `Longitude: ${response.body.results[0].geometry.location.lng}`
        );
    } catch (error) {
        console.log(error);
    }
};

getLocation(url);