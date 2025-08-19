# vis.csail.mit.edu

## How to dev mitvis website 

- Install dependencies
```
npm install
```
- Serve your content
```
npm run dev
```
- Check http://localhost:5173/ for your content
- Make changes and then submit a PR; tag @arvind for review/approval. 
  - (Once a PR is merged, the site will automatically build a static version of the website and deploy it to the `csail-build` branch. This branch will then eventually be slurped up to go live on CSAIL servers by a cron job.)

## Adding a group member

Edit these files:
- Add an entry in `src/data/people.json`. Ideally, your key should be your MIT Kerberos.

Add these files:
- Add a square photo to `static/imgs/people`
  - filename must match the key you used for your entry in `src/data/people.json`
  - extension must be `.jpg`

## Adding a paper

Add these files:

- Add `<my-paper>.pdf` to `static/pubs`
- Add a thumbnail image, `<my-paper>.png`, to `static/imgs/thumbs`. It should be 640x360 or similar widescreen (16:9) aspect ratio.
- Add a teaser image, `<my-paper>.png`, to `static/imgs/teasers`.
- Add `<my-paper>.md` to `src/routes/pubs`
  - Authors can either:
    - refer to group members by their `key` in `src/data/people.json` (which should be their MIT Kerberos)
    - for non-VIS group members, explicitly specify their `name`, `affiliation`, and (optional) `url`
    - An `equal: true` key can be added to authors who share equal contribution (only expected for co-first authors)
  - `themes` can reference one or more keys from `src/data/research_themes.json`
  - `tags` can reference one or more entries from `src/data/tags.json`
  - Only two types of `videos` are supported: conference `talk` and `figure` which can reference a demo, walkthrough, or any other video you would like to feature. Video values are YouTube IDs. 
  - The `type` of `materials` are any [free fontawesome icon](https://fontawesome.com/search?ic=free&o=r). Typical values are:
    - `desktop` for project websites, demo websites, etc.
    - `code` for GitHub/code repos
    - `laptop-code` for live editors
    - `file-archive` for supplementary materials