let storage = require('../../cache/storage');

let updateItem = async (id, obj) => {

    try{
        let idObj = {id: id.toString()};
        let mergedObj = {...idObj, ...obj};
        let result = await storage.storage.setItem(id.toString(), mergedObj);
        return (result && result.length > 0) ? result[0] : {errorMsg: "Cannot update record for id "+ id};
    }catch (err){
        return ({errorMsg: err.message});
    }

};

module.exports = {updateItem};
