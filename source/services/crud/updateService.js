let storage = require('../../cache/storage');

let updateItem = async (id, obj) => {

    try{

        let item = await storage.storage.getItem(id.toString());
        return (item) ? await storage.storage.setItem(id.toString(), {...{id: id.toString()}, ...obj}) : {errorMsg: "Cannot update record for id "+ id};
    }catch (err){
        return ({errorMsg: err.message});
    }

};

module.exports = {updateItem};
