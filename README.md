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


## Adding a person
Edit these files:
- Add an entry in `_data/people.yml`
Add these files:
- Add a square photo to `imgs/people`
- - filename must match the key you used for your entry in `_data/people.yml`
- - extension must be `.jpg`
