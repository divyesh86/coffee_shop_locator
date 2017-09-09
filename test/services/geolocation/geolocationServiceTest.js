let assert = require('assert');
let config = require('../../../config/index');
let fileReaderService = require('../../../source/services/fileReader/fileReaderService');
let addressService = require('../../../source/services/geoLocation/addressToLatLongService');
let findNearestService = require('../../../source/services/geoLocation/findNearestService');

let storage = require('../../../source/cache/storage');


// describe('insert records', function() {
//     it('from a file', async function() {
//         storage.storage.clearSync();
//         let result = fileReaderService.writeToCache(config.testFilePath);
//         assert.equal('', result);
//     });
// });
//
//
// describe('fetch lat long', function() {
//     it('from an address ', async function() {
//         let testAddress = "986 Market St, San Francisco, CA, USA";
//         let result = await addressService.fetchLatLong(testAddress);
//         assert.equal('', result);
//     });
// });
//
//
//
// describe('find nearest coffee shop', function() {
//     it('from an address ', async function() {
//         let testAddress = "988 Market St, San Francisco, CA, USA";
//         let result = await findNearestService.findNearest(testAddress);
//         assert.equal('', result);
//     });
// });




