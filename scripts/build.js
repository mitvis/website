#!/usr/bin/env node

const reload = require('require-reload')(require),
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
    const data = reload('../src/data'),
        scss = fs.readFileSync('src/scss/index.scss', {encoding: 'utf-8'}),
        css = sass.renderSync({data: scss});

    // Copy static and build css.
    fs.copySync('static', 'build', {preserveTimestamps: true});
    fs.writeFileSync('build/styles.css', css.css);

    // Register partials
    fs.readdirSync('src/html').forEach(filename => {
      const basename = path.basename(filename, '.html');
      hb.registerPartial(basename,
        fs.readFileSync(`src/html/${filename}`, {encoding: 'utf-8'}));
    });

    // Write routes
    fs.readdirSync('src/routes').forEach(filename => {
      if (filename === 'paper.html') return;
      const html = fs.readFileSync(`src/routes/${filename}`, {encoding: 'utf-8'}),
          tmpl = hb.compile(html);
      fs.writeFileSync(`build/${filename}`, tmpl(data));
    });

    // Create paper pages
    const paperTmpl = hb.compile(fs.readFileSync(`src/routes/paper.html`, {encoding: 'utf-8'}));
    const bibtex = hb.compile('{{{bibtex}}}');
    [].concat(data.papers, data.dispatches).forEach(pub => {
      fs.writeFileSync(`build/pubs/${pub.slug}.html`, paperTmpl(pub));
      fs.writeFileSync(`build/pubs/${pub.slug}.bib`, bibtex(pub));
    });
  } catch (e) {
    console.error(timeF(new Date), chalk.red(e), e);
  }
}

build();
module.exports = build;
