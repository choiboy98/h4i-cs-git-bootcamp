# h4i-cs-git-bootcamp

In this simple exercise, you will create an issue, a new branch, a new file, edit the file, push the commit, and make a pull request.

### 1. Creating an Issue

![issue-1](/images/Issues-1.png)

- We create an Issue to organize the different tasks that are currently at hands. People use issues to assign tasks to different users. Without the use of Issues, it would be really hard to come up with a solid game plan in any development.

![issue-2](/images/Issues-2.png)

- When you are in the Issue page, press the green **_new issue_** button.

![issue-3](/images/Issues-3.png)

![issue-4](/images/Issues-4.png)
- When you are creating a new issue,
  - Clarify what you are trying to resolve in your title (_for now_ **your name**)
  - Further describe what the issue entails
- **This only applies if you have permission to write on the branch**
  - Now, you would assign the issue to other people, but in this case, assign it to yourself

![issue-5](/images/Issues-5.png)
- **This only applies if you have permission to write on the branch**
  - After you assign yourself, assign an **_epic_** or a **_tag_** to your issue. This will organize your issues based on these tags.

![issue-6](/images/Issues-6.png)
- Now submit your issue!

### 2. Making a new branch and moving to that branch

```
git checkout -b <your_branch_name>
```
After you create your branch, check if you are in your branch:

```
git branch
```

Great job! Any changes you make now will not affect the master branch directly!
Now that you are in your branch, let's create a new file!
There are easier ways to create a file, but we are gonna use command prompt.

### 3. Commiting your changes

To commit your changes, you will have to do the following:

```
git add -A
git commit -m "your_commit_message"
git push
```

**If it is your first time pushing to the newly created branch, you will have to do the following instead:**

```
git push --set-upstream origin <your_branch_name>
```

Notice that you just pushed your commit into **_your branch_** and not into **_master_**.

### 4. Making a pull request

To merge your branch into master, you need to make a pull request.

![branch](/images/branch.png)
- After you commit, the _Compare & pull request_ button should appear.

![pull request](/images/open.png)
- You can type in an optional (but really mandatory) comments for clearer commits and pull requests.
- In this comment, type:
```
resolves: #
```
- This will list all the issues that are available. You will find your issue and type the number in.

![commit](/images/commit.png)
- After you see that there are no merge conflicts, you can push and merge your branch.

### 5. Celebrate!

Yay!
