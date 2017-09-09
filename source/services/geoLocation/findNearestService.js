let addressService = require('./addressToLatLongService');
let readService = require('../../services/crud/readService');
let geolib = require('geolib');

let findNearestCoffeeShop = async function (latLongObj, coffeeShopArray) {
    try{
        let minDistance = 1000000000;
        let startObj = {latitude: latLongObj.lat, longitude: latLongObj.lng};

        let coffeeShop = {};
        coffeeShopArray.map(c => {

            let distance = findDistance(startObj, {latitude:c.latitude, longitude:c.longitude});
            if(distance < minDistance){
                minDistance = distance;
                coffeeShop = c;
            }
        });

        return coffeeShop;
    }catch (err){
        return ({errorMsg: err});
    }



};


let findDistance = function (startPointObj, endPointObj) {

    try{
        return geolib.getDistance(startPointObj, endPointObj);

    }catch (err){
        return ({errorMsg: err.message});
    }

};


let findNearest = async function(address){
    try{
        let shopList = readService.getAll();
        let latLongObj = await addressService.fetchLatLong(address);
        let result =  await findNearestCoffeeShop(latLongObj, shopList);
        return (result && !isNaN(parseInt(result.id))) ? result : {errorMsg: "Cannot find a coffee shop near "+ address};

    }catch (err){
        return ({errorMsg: err.message})
    }

};


module.exports = {findNearest};