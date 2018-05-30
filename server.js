const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./route/routes.js');

var app = new express();

app.use(bodyParser.json());
app.use(cors());

route(app);

app.use(function(err, req, res, next) {
    if (err.status == 404)
        res.status(404).json({ error: 'PAGE DOES NOT EXIST' });
    else if (err.status ==400)
        res.json({error : "BAD JSON"});
});

//Listening to port 3001 for requests
app.listen('3001',function () {
    console.log('Listening on 3001 port');
});
//db config
mongoose.connect('mongodb://prash:prash@ds111469.mlab.com:11469/productbase?authMechanism=SCRAM-SHA-1');