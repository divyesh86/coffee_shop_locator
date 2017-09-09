let axios = require('axios');
let config = require('../../../config/index');

/**
 * Create axios instance with a time out configuration
 */
let axiosInstance = axios.create({
    timeout: config.timeOut
});


/**
 * Forms the Quandl API URL from the constants
 * Returns a url that will be later used to fetch data
 */
let formUrl = function (address) {

    let encodedAddress = address.replace(/ /g, "+");
    return config.apiHead + encodedAddress + config.apiTail + config.geocodeKey;

};


/**
 * Extracts an array of {date, high, low} objects from the raw data returned from Quandl
 */
let fetchLatLong = async function(address){
    try{

        let url = formUrl(address);
        let rawData = await axiosInstance.get(url);
        return rawData.data.results[0].geometry.location;

    }catch (err){
        return err;
    }

};


module.exports = {fetchLatLong};