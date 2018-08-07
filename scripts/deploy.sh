#!/bin/bash

# 0.1 check if jq has been installed
type jq >/dev/null 2>&1 || { echo >&2 "I require jq but it's not installed. Aborting."; exit 1; }

# 0.2 check if all files are commited
rm -Rf build
if [ ! -z "$(git status --porcelain)" ]; then
  echo "There are uncommitted files on dev. Please commit or stash first!"
  git status
  exit 1
fi

# 0.3 check if master files are commited
git checkout master
if [ ! -z "$(git status --porcelain)" ]; then
  echo "There are uncommitted files on master. Please commit or stash first!"
  git status
  git checkout dev
  exit 1
else
  echo "All tracked files are commited. Publishing to master."
fi
git checkout dev

# 0.4 fresh npm install to ensure no dev changes are included
rm -rf node_modules
npm install

# generate build files
mkdir build
npm run build

if [ -f "npm-debug.log" ]; then
  echo "An error occurred during the build process. Check npm-debug.log."
  exit 1
fi

# read version
gitsha=$(git rev-parse HEAD)
version=$(cat package.json | jq .version | sed -e 's/^"//'  -e 's/"$//')

# copy staged files to master
git checkout master
rsync -r --remove-source-files build/* .

# add, commit and push files to master
git add .
git commit -m "Update deployed files."
git push origin master

# swap back to dev branch
git checkout dev
git push origin dev