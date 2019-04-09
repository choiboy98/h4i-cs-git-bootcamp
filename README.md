# cs-sail-git-lesson

In this simple exercise, you will create a new branch, a new file, edit the file, push the commit, and make a pull request.

### 1. Making a new branch and moving to that branch

```
git checkout -b your_name
```
After you create your branch, check if you are in your branch:

```
git branch
```

Great job! Any changes you make now will not affect the master branch directly!
Now that you are in your branch, let's create a new file!
There are easier ways to create a file, but we are gonna use command prompt.

### 2. Creating a new file

You will create a file & write your name into it at the same time.

To do so, type:

```
echo your_name > your_name.txt
```

Alternatively, you can create the file first by typing:

```
touch your_name.txt
```

and typing your name in later.

Now that you have everything set up, check the **questions.txt** and answer the questions in your newly created txt file.

### 3. Commiting your changes

To commit your changes, you will have to do the following:

```
git add -A
git commit -m "your_commit_message"
git push
```

Notice that you just pushed your commit into **_your branch_** and not into **_master_**.

### 4. Making a pull request

To merge your branch into master, you need to make a pull request.

![branch](/images/branch.png)
After you commit, the _Compare & pull request_ button should appear.

![pull request](/images/open.png)
You can type in an optional (but really mandatory) comments for clearer commits and pull requests.

![commit](/images/commit.png)
After you see that there are no merge conflicts, you can push and merge your branch.

### 5. Celebrate!

Now observe what your classmates said!
