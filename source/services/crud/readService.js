let storage = require('../../cache/storage');

let readData = async (id) => {

    try{
        let result = await storage.storage.getItem(id.toString());
        return (result && !isNaN(parseInt(result.id))) ? result : {errorMsg: "No record found for id "+ id};
    }catch (err){
        return ({errorMsg: err.message});
    }

};

let getAll = () => {
    return storage.storage.values();
};

module.exports = {readData, getAll};