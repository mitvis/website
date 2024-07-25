# vis.csail.mit.edu

## How to dev mitvis website 

- Install Jekyll ([instructions](https://jekyllrb.com/docs/installation/macos/))
- Install bundler
```
gem install jekyll bundler
```
- Install dependencies
```
bundle install
```
- Serve your content
```
bundle exec jekyll serve
```
- Check localhost:4000 for your content

## Adding a paper
Add these files:
- Add `<my-paper>.md` to `_pubs`
- Add `<my-paper>.pdf` to `pubs`
- Add a thumbnail image, `<my-paper>.png`, to `imgs/thumbs`. It should be 240x120 or similar
- Add a teaser image, `<my-paper>.png`, to `imgs/teasers`.