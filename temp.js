/* --cleanup --verbose --remote=master */

https://dev.to/letsbsocial1/deploying-to-gh-pages-with-git-subtree

next build
next export
git branch -d gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
git rm -rf .
git commit -am "First commit to gh-pages branch"
git push origin gh-pages
git checkout master
git push origin `git subtree split --prefix out gh-pages`:gh-pages --force
