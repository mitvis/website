# vis.csail.mit.edu

## How to dev mitvis website 

- Install rbenv ([instructions](https://github.com/rbenv/rbenv))
- Install dependencies
```
bundle install
```
- Serve your content
```
bundle exec jekyll serve --livereload
```
- Check localhost:4000 for your content

## Adding a paper
Add these files:
- Add `<my-paper>.md` to `_pubs`
- Add `<my-paper>.pdf` to `pubs`
- Add a thumbnail image, `<my-paper>.png`, to `imgs/thumbs`. It should be 240x120 or similar
- Add a teaser image, `<my-paper>.png`, to `imgs/teasers`.
