let storage = require('../../cache/storage');

let removeItem = async (id) => {
    try {
        let result  = await storage.storage.removeItem(id.toString());
        return (result) ? result : {errorMsg: "Cannot find record with id "+ id};


    }catch(err){
        console.error(err);
        return ({errorMsg: err.message});
    }

};

module.exports = {removeItem};
