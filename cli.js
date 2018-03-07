#!/usr/bin/env node

var dir = require('./del.js').dir;
require('colors');
console.log('Starting');
var dc = { c: 0 };
dir(process.cwd(), () => { // first start (directory where executet)
    var path = process.cwd().grey;
    console.log(`Fully scanned "${path}"`.green);
    console.log(`Deletet ${dc.c.toString().grey} directoris`);
}, dc);
