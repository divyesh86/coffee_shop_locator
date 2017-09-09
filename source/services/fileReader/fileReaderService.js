let fs = require('fs');
let storage = require('../../cache/storage');



let createArrayObj = (line) => {
    let arr = line.split(",");
    if(arr.length === 5)
        return {
            id: arr[0],
            name: arr[1],
            address: arr[2],
            latitude: arr[3],
            longitude: arr[4]
        }
};


/**
 * Create obj list to be inserted into the db
 */
let createObjList = (data) => {
    try{
         let locationArray = [];
         data.split("\n").map(function (line) {

            locationArray.push(createArrayObj(line));
        });
        return locationArray;
    }catch (err){
        console.error(err);
    }
};

let writeToCache = (filePath) => {

    let data =  fs.readFileSync(filePath, "utf-8");
    storage.storage.clearSync();
    createObjList(data).map(obj => {
        console.log(obj);
        storage.storage.setItem(obj.id, obj);
    });
    let savedResults =  storage.storage.values();
    return ({message: "Successfully saved "+ savedResults.length + " records"});

};

module.exports = {writeToCache};
