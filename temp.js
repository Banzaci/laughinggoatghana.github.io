/* --cleanup --verbose --remote=master */

https://dev.to/letsbsocial1/deploying-to-gh-pages-with-git-subtree

git push origin `git subtree split --prefix out gh-pages`:gh-pages --force
