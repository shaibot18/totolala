// var express = require("express");
// var path = require("path");
// var open = require("open");

import express from "express";
import path from "path";
import open from "open";
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

/* eslint-disable no-console*/

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users', (req, res)=>{
    res.json([
        {'id':1,"firstName":"Jun","lastNaem":"ToTo"},
        { 'id': 2, "firstName": "Tin", "lastNaem": "WW" }
    ])
});

app.listen(port, (err) => {
    if(err)
        console.log(err);
    else{
        open("http://localhost:"+port);
    }
});

