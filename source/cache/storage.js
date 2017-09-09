let storage = require('node-persist');
storage.initSync({
    dir: './persistedData',
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: 'utf8',
    logging: false,
    continuous: true,
    interval: false,
    ttl: false,
    forgiveParseErrors: false

});

module.exports = {storage};