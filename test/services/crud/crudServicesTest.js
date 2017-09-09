let assert = require('assert');
let createService = require('../../../source/services/crud/createService');
let readService = require('../../../source/services/crud/readService');
let updateService = require('../../../source/services/crud/updateService');
let deleteService = require('../../../source/services/crud/deleteService');
let storage = require('../../../source/cache/storage');


describe('create record', function() {
    it('from an object', async function() {
        //Clear the storage
        storage.storage.clearSync();
        let object = {"name": "New Coffee", "address":"986 Market St","latitude":"37.782394430549445", "longitude": "-122.40997343121123"};
        let result = await createService.createData(object);
        let expected = '{"key":"1","value":{"id":"1","ttl":0,"name":"New Coffee","address":"986 Market St","latitude":"37.782394430549445","longitude":"-122.40997343121123"}}';
        assert.equal(expected, JSON.stringify(result[0]));
    });
});

describe('read record', function() {
    it('from an id', async function() {
        let result = await readService.readData(1);
        let expected = '{"id":"1","ttl":0,"name":"New Coffee","address":"986 Market St","latitude":"37.782394430549445","longitude":"-122.40997343121123"}'
        assert.equal(expected, JSON.stringify(result));
    });
});


describe('update record', function() {
    it('from an object', async function() {
        let object = {"name": "Updated New Coffee Shop", "address":"986 Market St","latitude":"37.782394430549445", "longitude": "-122.40997343121123"};
        let result = await updateService.updateItem(1, object);
        let expected = '{"key":"1","value":{"id":"1","name":"Updated New Coffee Shop","address":"986 Market St","latitude":"37.782394430549445","longitude":"-122.40997343121123"}}';
        assert.equal(expected, JSON.stringify(result[0]));
    });
});


describe('delete record', function() {
    it('for an id', async function() {
        let result = await deleteService.removeItem(1);
        let expected = '{"id":"1","name":"Updated New Coffee Shop","address":"986 Market St","latitude":"37.782394430549445","longitude":"-122.40997343121123"}';
        assert.equal(expected, JSON.stringify(result));
    });
});


describe('read record failure', function() {
    it('when no id exists', async function() {
        let result = await readService.readData(1);
        let expected = 'No record found for id 1';
        assert.equal(expected, result.errorMsg);
    });
});


describe('update record failure', function() {
    it('from an object', async function() {
        let object = {"name": "Updated New Coffee Shop", "address":"986 Market St","latitude":"37.782394430549445", "longitude": "-122.40997343121123"};
        let result = await updateService.updateItem(1, object);
        let expected = 'Cannot update record for id 1';
        assert.equal(expected, result.errorMsg);
    });
});


describe('delete record failure', function() {
    it('for an id', async function() {
        let result = await deleteService.removeItem(1);
        let expected = 'Cannot delete record with id 1';
        assert.equal(expected, result.errorMsg);
    });
});