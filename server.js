#!/usr/bin/env node

import { rpsls } from './lib/rpsls.js';
import { rps } from './lib/rpsls.js';
import minimist from 'minimist';
import express from 'express'

const app = express();

var argv = minimist(process.argv.slice(2));
const PORT = argv.port || 5000;

app.get('/app/rps/', function(req, res) {
    res.status(200).send(JSON.stringify(rps()).replace(/\//g, replacementString)).end();
});

app.get('/app/rpsls/', function(req, res) {
    res.status(200).send(JSON.stringify(rpsls()).replace(/\//g, replacementString)).end();
});

app.get('/app/rps/play', function(req, res) {
    res.status(200).send(JSON.stringify(rps(req.query.shot)).replace(/\//g, replacementString)).end();
});

app.get('/app/rpsls/play', function(req, res) {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)).replace(/\//g, replacementString)).end();
});

app.get('/app/rps/play:shot', function(req, res) {
    res.status(200).send(JSON.stringify(rps(req.params.shot)).replace(/\//g, replacementString)).end();
});

app.get('/app/rpsls/play:shot', function(req, res) {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)).replace(/\//g, replacementString)).end();
});

app.get("/app", function(req, res) {
    res.status(200).send("200 OK").end();
});


app.all('*', (req, res) => {
    res.status(404).send('404 NOT FOUND').end();
});

app.listen(PORT, function(err){
    if (err) console.log(err);
 });