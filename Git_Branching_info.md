git clone
git add
git commit 
git pull
git push

git init
    (creates a repo but doesn't push)

master branch
    commit
        actual changes
        commit before it

git branch
    (creates a branch)

git checkout
    (switches the branch)

git log
    (shows history of commits)

git merge
    (adds previous commits to)

git push -u
    ("u" in this case is "upstring")

## - Examples:
git branch layout
    (creates layout branch in the repo)

git branch api
    (creates api branch in the repo)

git checkout layout
    (switches to the layout branch)

git checkout master
    (switches to the master branch)

git checkout api
    (switches to the api branch)

git log
    (would show all of the changes across various commits)

git checkout master
    (switches back to the master branch)

git merge api
    (adds the api changes to the master commit, because we are currently in the master branch)

git checkout layout
    (switches to the layout branch)

git push
    (returns an error if we have not yet created a layout branch, make sure we do the usual 'git add-A/git commit' first)

git checkout master
    (switches to the master branch)

git pull
    (gets the latest version of the master branch)

git checkout layout
    (switches to the layout branch)

git merge master
    (adds the current master branch to the layout branch)

git add/git commit/git push
    (so we are pushing the resolved veriosn up to github, note that we have resolved conflicts in VSC)

git checkout master
    (switches back to the master branch)

git pull
    (just to check on our last push)

git checkout feature -b/2-no-prompt
    (I don't fkin know man)

git open
    (still not sure)