let express = require('express');
let router = express.Router();
let fileReaderService = require('../services/fileReader/fileReaderService');
let readService = require('../services/crud/readService');
let deleteService = require('../services/crud/deleteService');
let updateService = require('../services/crud/updateService');
let createService = require('../services/crud/createService');
let findNearestService = require('../services/geoLocation/findNearestService');
let config = require('../../config/index');


router.get('/init', function (req, res) {

    let result = fileReaderService.writeToCache(config.filePath);
    res.json(result);

});

router.post('/create', async function (req, res) {
    let result = await createService.createData(req.body);
    res.json(result);

});

router.get('/read/:id', async function (req, res) {

    let id = req.params.id;
    let result = await readService.readData(id);
    res.json(result);
});

router.post('/update/:id', async function (req, res) {

    let id = req.params.id;
    let obj = req.body;
    let result = await updateService.updateItem(id, obj);
    res.json(result);

});


router.delete('/:id', async function (req, res) {
    let id = req.params.id;
    let result = await deleteService.removeItem(id);
    res.json(result);

});

router.post('/findNearest', async function (req, res) {
    let body = req.body;
    let result = await findNearestService.findNearest(body.address);
    res.json(result);


});




module.exports = router;
