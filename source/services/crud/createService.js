let storage = require('../../cache/storage');

let createData = async (obj) => {
    try {
        let newKey = getNewKey();
        let idObj = {id: newKey.toString(), ttl: 0};
        let mergedObj = {...idObj, ...obj};
        return await storage.storage.setItem(newKey, mergedObj);

    }catch(err){
        return ({errorMsg: err.message});
    }

};

let getNewKey = () => {
    try{

        let keys = storage.storage.keys();
        return (keys !== null && !isNaN(parseInt(keys[keys.length - 1]))) ? (parseInt(keys[keys.length - 1]) + 1).toString() : "1";
    }catch (err){
        return ({errorMsg:err.message})
    }

};

module.exports = {createData};