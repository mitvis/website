var build = require('./build'),
    watch = require('node-watch'),
    chalk = require('chalk'),
    timeF = require('d3-time-format').timeFormat('%X');

watch(['src', 'scripts', 'static'], {recursive: true}, function(filename) {
  console.log(timeF(new Date), chalk.green(filename, 'changed'));
  build();
});
