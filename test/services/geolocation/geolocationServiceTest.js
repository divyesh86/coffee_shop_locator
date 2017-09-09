let assert = require('assert');
let config = require('../../../config/index');
let fileReaderService = require('../../../source/services/fileReader/fileReaderService');
let addressService = require('../../../source/services/geoLocation/addressToLatLongService');
let findNearestService = require('../../../source/services/geoLocation/findNearestService');

let storage = require('../../../source/cache/storage');


describe('insert records', function() {
    it('from a file', async function() {
        storage.storage.clearSync();
        let result = fileReaderService.writeToCache(config.testFilePath);
        assert.equal('Successfully saved 3 records', result.message);
    });
});


describe('fetch lat long', function() {
    it('from an address ', async function() {
        let testAddress = "986 Market St, San Francisco, CA, USA";
        let result = await addressService.fetchLatLong(testAddress);
        let expected = '{"lat":37.7826339,"lng":-122.4102865}';
        assert.equal(expected, JSON.stringify(result));
    });
});



describe('find nearest coffee shop', function() {
    it('from an address ', async function() {
        let testAddress = "988 Market St, San Francisco, CA, USA";
        let result = await findNearestService.findNearest(testAddress);
        let expected = '{"id":"1","name":" Equator Coffees & Teas","address":" 986 Market St","latitude":" 37.782394430549445","longitude":" -122.40997343121123"}';
        assert.equal(expected, JSON.stringify(result));
    });
});




