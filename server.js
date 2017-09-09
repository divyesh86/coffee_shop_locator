'use strict';

//first we import our dependencies...
let express = require('express');
let bodyParser = require('body-parser');
let requests = require('./source/routes/api');
let NodeCache = require( "node-cache" );
let myCache = new NodeCache({ stdTTL: 0, checkperiod: 0 });

//and create our instances
let app = express();

//set our port to either a predetermined port number if you have set it up, or 3001
let port = process.env.API_PORT || 3001;


//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


//Use our router configuration when we call /api
app.use('/api', requests);

//starts the source and listens for requests
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});
