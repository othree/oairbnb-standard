#!/usr/bin/env node
var minimist = require('minimist')

var argv = minimist(process.argv.slice(2));

if (!argv._.length && argv._[0] !== '-') {
  process.argv.push(
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx'
  );
}

var opts = require('../options.js')
require('standard-engine').cli(opts)
