#!/usr/bin/env node
var circleText = require('./index');
var args = process.argv.slice(2).join(' ');
console.log(circleText(args));
