#!/usr/bin/env node
var app = require('commander');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var pkg = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, 'package.json'), 'utf8'));

var configDir = path.join(process.env.HOME, '.linode-cli-env');
var configFile = path.join(process.env.HOME, '.linode-cli');

function list() {
  return _.without(
    fs.readdirSync(configDir),
      'config');
}

function use(config) {
  fs.unlink(
      configFile,
        function(err) {
          if (err) console.warn(err);
          fs.symlink(
            path.join(configDir, config),
            configFile,
            function(err) {
              if (err) console.warn(err);
            });
        });
}

app
  .version(pkg.version)
  .option('-u, --use [name]', 'Activate a given Linode config')
  .option('-l, --list', 'List the available Linode configs')
  .parse(process.argv);

if (app.use) {
  use(app.use);
} else if (app.list) {
  _.each(list(), function(item){
    console.log(item);
  });
}
