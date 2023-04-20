#!/usr/bin/env node

import { rpsls } from './lib/rpsls.js';
import { rps } from './lib/rpsls.js';
import minimist from 'minimist';
import express from 'express'

const app = express();

var argv = minimist(process.argv.slice(2));
const PORT = argv.port || 5000;

var replacementString = '';

app.get('/app/rps/', function(req, res) {
    let string = JSON.stringify(rps()).replace(/\\/g, replacementString)
    res.status(200).send(string.substring(1, string.length-1)).end();
});

app.get('/app/rpsls/', function(req, res) {
    let string = JSON.stringify(rpsls()).replace(/\\/g, replacementString)
    res.status(200).send(string.substring(1, string.length-1)).end();
});

app.get('/app/rps/play/', function(req, res) {
    let string = JSON.stringify(rps(req.query.shot)).replace(/\\/g, replacementString)
    res.status(200).send(string.substring(1, string.length-1)).end();
});

app.get('/app/rpsls/play/', function(req, res) {
    let string = JSON.stringify(rpsls(req.query.shot)).replace(/\\/g, replacementString)
    res.status(200).send(string.substring(1, string.length-1)).end();
});

app.get('/app/rps/play/:shot/', function(req, res) {
    let string = JSON.stringify(rps(req.params.shot)).replace(/\\/g, replacementString)
    res.status(200).send(string.substring(1, string.length-1)).end();
});

app.get('/app/rpsls/play/:shot/', function(req, res) {
    let string = JSON.stringify(rpsls(req.params.shot)).replace(/\\/g, replacementString)
    res.status(200).send(string.substring(1, string.length-1)).end();
});

app.get("/app/", function(req, res) {
    res.status(200).send("200 OK").end();
});

app.get("*", function(req, res) {
    res.status(404).send("404 NOT FOUND").end();
});



app.listen(PORT, function(err){
    if (err) console.log(err);
 });
