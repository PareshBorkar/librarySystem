var express = require('express');
// import express from 'express'
var app = express();

app.listen(1023, function (err) {
    if (!err) {
        console.log('Express Server has started on port: 1023');
    } else {
        console.log('Error starting the server. Either the port is already in use or something is wrong with the express configuration.');
    }
});