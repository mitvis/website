#!/usr/bin/env node

var reload = require('require-reload')(require),
    fs  = require('fs-extra'),
    hb  = require('handlebars'),
    hbh = require('handlebars-helpers')(),
    hbh2 = require('./helpers'),
    path = require('path'),
    sass = require('node-sass'),
    chalk = require('chalk'),
    timeF = require('d3-time-format').timeFormat('%X');

function build() {
  try {
    // Register partials
    fs.readdirSync('src/html').forEach(function(filename) {
      var basename = path.basename(filename, '.html');
      hb.registerPartial(basename,
        fs.readFileSync('src/html/' + filename, {encoding: 'utf-8'}));
    });

    // Write routes
    fs.readdirSync('src/routes').forEach(function(filename) {
      var data = reload('../src/data'),
        html = fs.readFileSync('src/routes/'+filename, {encoding: 'utf-8'}),
        scss = fs.readFileSync('src/scss/index.scss', {encoding: 'utf-8'}),
        tmpl = hb.compile(html),
        css = sass.renderSync({data: scss});
        fs.writeFileSync('build/'+filename, tmpl(data));
        fs.writeFileSync('build/styles.css', css.css);
    });

    // Copy contents of static
    fs.copy('static', 'build', err => {
      if (err) console.error(timeF(new Date), chalk.red(err), err);
      else console.log(timeF(new Date), chalk.green('Copied static to build.'));
    });
  } catch (e) {
    console.error(timeF(new Date), chalk.red(e), e);
  }
}

build();
module.exports = build;
