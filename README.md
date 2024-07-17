# lookit-docs

Documentation for Lookit project, including use of platform and lookit-api and ember-lookit-frameplayer repos.

Lookit platform: https://lookit.readthedocs.io/en/develop/

Ember Lookit Frameplayer (experiment runner): https://lookit.readthedocs.io/projects/frameplayer/en/latest/

---

## Contributing

Have you spotted an error in the documentation, or have other suggestions for improvement? We'd love your contributions! If you're not sure whether we'll want to incorporate your changes, please open an Issue in this repository so that we can discuss it first.

If you are not part of the Lookit team and would like to contribute changes to the Lookit documentation, you will follow the same Installation and Editing steps listed below except that you will *make changes on your own fork of this repository*. Here is a summary of the process:
1. Fork this repository.
2. Set up your local environment, following the Installation steps below.
3. Make your changes, commit them, and push to your fork/branch.
4. Submit a pull request from your fork/branch targeted at the `develop` branch for this repository.

---

## Installation

The following steps will help you set up your local development environment so that you can modify the source files for the documentation, build/review the HTML files, and move your changes onto Github. Before you begin, make sure that you have a programming-friendly text editor (e.g. VS Code) and Git installed on your computer.

You will need Python 3.8 installed. Instructions for installing Python 3.8 (if necessary) for both Mac and Windows are included below.

> [!NOTE]  
> Python 3.8 is an older version, but versions of Python 3.9+ have a dependency issue that prevents building these HTML files; you can install 3.8 alongside any other Python versions you might have.

### Mac

First, create a local copy of this repository[^forkfootnote]. In a terminal, move into the parent directory where you want the 'lookit-docs' folder to be located, and run the following:

```
/ $ git clone https://github.com/lookit/lookit-docs.git
/ $ cd lookit-docs
/lookit-docs $ 
```

If necessary, install Python 3.8 now:

```
brew install python@3.8
```

Create a virtual environment called 'denv' using Python 3.8:

```
/lookit-docs $ virtualenv denv --python=/opt/homebrew/bin/python3.8
```

If that command was successful, you will see a new directory called `denv` appear in your `lookit-docs` directory. Now you can activate your virual environment like this:

```
/lookit-docs $ source denv/bin/activate
```

When your virtual environment has been activated, you will see the environment name appear in parentheses on the left side of the path shown in your terminal:

```
(denv) /lookit-docs $
```

You can de-activate it at any time by running: `deactivate`. You will need this virtual environment running in order to (1) install the rest of the project dependencies, and (2) build the HTML versions of the documentation files to review (see section "[After Installing Python](#after-installing-python)").

### Windows

Open Git Bash in the parent directory where you want to add your `lookit-docs` folder. Create a local copy of this repository[^forkfootnote] by running the following:

```
C:\path\to\parent\directory> git clone https://github.com/lookit/lookit-docs.git
C:\path\to\parent\directory> cd lookit-docs
C:\path\to\lookit-docs>
```

Below are two options for installing the Python dependencies. The first is a 'standard' installation process, and the second uses the Chocolatey Windows package manager. We recommend using Chocolatey, especially if you run into any problems related to the Windows PATH environment variable for your Python version and packages (more about this in the section "[Windows Installation Troubleshooting](#windows-installation-troubleshooting)").

#### Standard

If necessary, install Python 3.8: https://www.python.org/downloads/release/python-380/. Make sure that you add it to your Windows PATH. To check that you have access to your Python 3.8 installation, in a command window, run: 

```
C:\path\to\lookit-docs> python —-version
```

You should see something like "Python 3.8.18" (don't worry about the last number). Check that you have access to the Python package manager `pip`:

```
C:\path\to\lookit-docs> pip --version
```

If pip is found, then you're ready for the next step ("[After Installing Python](#after-installing-python)").

#### With Chocolatey

Locate the Powershell program and open it as an administrator. Then, follow the instructions for installing Chocolatey (for individual): https://chocolatey.org/install

With Chocolatey installed, you should now be able to install Python 3.8 like this:

```
C:\path\to\lookit-docs> choco install python38
```

To check that you have access to your Python 3.8 installation, run: 

```
C:\path\to\lookit-docs> python —-version
```

You should see something like "Python 3.8.18" (don't worry about the last number). Check that you have access to the Python package manager `pip`:

```
C:\path\to\lookit-docs> pip --version
```

If pip is found, then you're ready for the next step ("[After Installing Python](#after-installing-python)").

#### After installing Python

Use `pip` to install the `virtualenv` package:

```
C:\path\to\lookit-docs> pip install virtualenv
```

Create a new virtual environment with the `virtualenv` command. The second argument is the name of the virtual environment. We'll call it 'denv':

```
C:\path\to\lookit-docs> virtualenv denv
```

Activate your virtual environment with:

```
C:\path\to\lookit-docs> .\denv\Scripts\activate
```

If you've successfully activated your virtual environment, you should see the name of your virtual enviroment appear in parentheses in your command/terminal:

```
(denv) C:\path\to\lookit-docs>
```

You can de-activate it at any time by running: `deactivate`. You will need this virtual environment running in order to (1) install the rest of the project dependencies, and (2) build the HTML versions of the documentation files to review (see next section).

## Finishing the installation (Mac and Windows)

After activating your virtual environment, you need to install the project dependencies inside your environment using the requirements doc. This must be done while your virtual environment is running (note the `(denv)` in your terminal/command prompt):

```
(denv) /lookit-docs $ pip install -r docs/requirements.txt
```

If you see an error about needing to install sphinx RTD theme, then run the following:

```
(denv) /lookit-docs $ pip install sphinx_rtd_theme
```

You should now be able to build the documentation files. First, move to the `docs` subdirectory, then run the `make html` command:

```
(denv) /lookit-docs $ cd docs/
(denv) /docs $ make html
```

The above command should create (or overwrite) HTML files in `docs/build/html`. 

---

## Editing the documentation

### Making a new branch

To make changes on a new branch, start from the `develop` branch. The `git checkout develop` command moves you onto the `develop` branch, and the `git pull origin develop` command updates your local branch with anything that might've changed on the Github (remote) version since you last pulled it.

```
(denv) /lookit-docs $ git checkout develop
(denv) /lookit-docs $ git pull origin develop
```

It's important that your new branch uses the most up-to-date version of the documentation as a starting point, which is why you always start this process with the lines above. Then, to create a new branch, use `git checkout -b ` followed by a name for your new branch:

```
(denv) /lookit-docs $ git checkout -b my-branch-name
```

> [!NOTE]  
> The `-b` tells Git that you are creating a *new* branch. Once your branch exists, you can switch to it without the `-b`, e.g. `git checkout my-branch-name` or `git checkout develop`.

Edit the documentation files in `docs/source`. The format of these files is reStructuredText (`.rst`, see a reference guide [here][sphinx-rst]). If you need to add/edit any images, they should be located in `docs/source/_static/img`.

At some point while editing, you will want to review the rendered HTML versions of your edited files by running the `make html` command from inside the `docs` subdirectory. Remember that, in order for the `make html` command to work, you need to have your virtual environment running and you need to be in the `docs` subfolder.

```
(denv) /lookit-docs $ cd docs/
(denv) /docs $ make html
```

The above command should create/overwrite HTML files in `docs/build/html`. Double-click on the HTML versions of the files you've been editing to see what they will look like when 'live' on the site. When you run the `make html` command, the output in the terminal/command prompt will also tell you whether there were any errors/warnings that occurred during the build process - watch for any build errors that your changes might've introduced, and be sure to fix them!
 
When you're ready to commit your changes (i.e. add them to Git's version history), you will need to stage your modified file(s) for commit, and then actually commit them, along with a message about what you've changed:

```
(denv) /lookit-docs $ git add .
(denv) /lookit-docs $ git commit -m 'my commit message'
```

To move the changes made on your local repository to the Github (remote) repository, you will run the `git push` command:

```
(denv) /lookit-docs $ git push origin my-branch-name
```

Finally, create a new Github pull request with `develop` as the 'base' branch and your branch as the 'compare' branch. The pull request can then be reviewed and merged into `develop`.

> [!NOTE] 
> After opening a pull request, you can still make more changes! Just repeat the process with your additional edits:
> 1. On your branch, edit files locally and test the changes.
> 2. Commit your changes.
> 3. Push your changes to the Github repostiory.
> If you have already opened a pull request, that pull request will automatically be updated with any changes that you push to your branch on Github.

### Making changes on someone else's branch

If you'd like to make edits on a branch that someone else has already created and pushed to Github, you first need to get a local copy ("fetch") of the branch from Github, then you can switch to ("check out") that branch:

```
(denv) /lookit-docs $ git fetch
(denv) /lookit-docs $ git checkout branch-name
```

Once you're on the branch, you can follow the same steps as above for making changes. If you ever want to update your local branch with changes that someone else has made on that same branch (and pushed to Github), you can "pull" the latest version from Github:

```
(denv) /lookit-docs $ git pull origin branch-name
```

---

## Resources

### Windows Installation Troubleshooting

Here are some tips if you run into any of the following types of errors while trying to set up your environment:

- Permission denied: Usually this happens because you need administrator priviledges. Try closing your command prompt or powershell, re-opening it as administrator, and running the command again.
- Command/module not found: This either indicates that the program/package you're trying to use isn't installed on your computer, or it is installed but can't be found on your PATH (Windows environment variable that tells Windows where to look for programs). In the latter case, this might be because:
  - You need to close and re-open your command prompt (to get access to program paths that have recently been added to your PATH variable)
  - You need to add it to the PATH (search your system for environment variables and edit the PATH variable)
  - You need to re-order the paths listed in your PATH variable (the computer will start at the beginning of the path list and work down, so move the relevant path up in the list)
- Git is installed but 'git' commands aren't recognized: Try running all of your 'git' commands in a Git Bash window (in the file explorer, go to your lookit-docs directory, then right click and 'Open Git Bash here'), and use a separate command prompt to run the non-Git commands (Python/package installation and `make html` command).
- Relative path not allowed: If you see this error when running e.g. `make html`, you may need to modify the command, e.g. `.\make html`.
- In your command prompt, if you're able to access Python (e.g. `python --version` works) but you can't run any of the Python package commands (`pip`, `virtualenv`), then try adding `python -m ` to the start of the command, e.g. `python -m pip install virtualenv` and `python -m virtualenv denv`. Since this could be a symptom of problems with installation locations and your PATH variable, you could also try installing Python using Chocolatey.
- File/path not found: You may need to use back slashes rather than forward slashes in your file path, and you may need to use two slashes rather than one (e.g. `cd C:\\my\\file\\path`).

### Git/Github Tips

While making edits, you might find it useful to use the `git status` command. This will tell you (1) what branch you're on, and (2) what files have been added, modified, or staged for commit.

```
(denv) /lookit-docs $ git status
```

Another useful command is `git diff`. This will give you the specific differences (line changes) across all files that have not been staged for commit on your branch:

```
(denv) /lookit-docs $ git diff
```

You can also add a file name/path, which will just show you the changes made to that file:

```
(denv) /lookit-docs $ git diff README.md
```

[Cheat sheet of useful commands (Github)](https://education.github.com/git-cheat-sheet-education.pdf)

[Git commands and glossary (Atlassian)](https://www.atlassian.com/git/glossary#commands)

[Intro to Git (W3 Schools)](https://www.w3schools.com/git/git_intro.asp?remote=github)

[Creating a pull request (Github)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)


### Sphinx

The Sphinx documentation can be found here: https://www.sphinx-doc.org/en/master/index.html

And information about the reStructureText format can be found here: https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html

<!---
Below are references for embedded/reusable links and footnotes (see https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)
-->

[sphinx-rst]: https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html

[^forkfootnote]:
    If you are not part of the core Lookit team then you should *fork this repository* first (fork button in upper-right corner of this page), then clone your fork:
    ```
    / $ git clone https://github.com/<your-username>/lookit-docs.git
    / $ cd lookit-docs
    ```