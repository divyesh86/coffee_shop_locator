let path = require('path');
module.exports = {
    filePath:  path.resolve(__dirname,"../source/resources/locations.csv"),
    testFilePath: path.resolve(__dirname, "../test/resources/locations.csv"),
    apiHead: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
    apiTail: '&key=',
    geocodeKey: 'AIzaSyBV1oZNTWcBudTaj7IzFGwPFQzgDF0MnTg',
    timeOut: 60000
};