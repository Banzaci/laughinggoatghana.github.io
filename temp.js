/* --cleanup --verbose --remote=master */

git push origin `git subtree split --prefix out gh-pages` :gh-pages --force
