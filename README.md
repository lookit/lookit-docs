# lookit-docs

Documentation for Lookit project, including use of platform and lookit-api and ember-lookit-frameplayer repos.

Lookit platform: https://lookit.readthedocs.io/en/develop/

Ember Lookit Frameplayer (experiment runner): https://lookit.readthedocs.io/projects/frameplayer/en/latest/

## Installation

Set up your environment so that you can build the HTML files and review them. 

First, create a local copy of this repository[^note].

```
/ $ git clone https://github.com/lookit/lookit-docs.git
/ $ cd lookit-docs
```

You will need Python 3.8 installed. If necessary, install it now:

```
brew install python@3.8
```

Create a virtual environment using Python 3.8, and then install the project dependencies:

```
/lookit-docs $ virtualenv denv --python=/opt/homebrew/bin/python3.8
/lookit-docs $ source denv/bin/activate
(denv) /lookit-docs $ pip install -r docs/requirements.txt
```

If you see an error about needing to install sphinx RTD theme, then run the following:

```
pip install sphinx_rtd_theme
```

You should now be able to build the documentation files using the `make html` command from inside the `docs` subdirectory:

```
(denv) /lookit-docs $ cd docs/
(denv) /docs $ make html
```

The above command should create (or overwrite) HTML files in `docs/build/html`. 

[^note]:
    If you are not part of the core Lookit team then you should *fork this repository* first (fork button in upper-right corner of this page), then clone your fork.
    ```
    / $ git clone https://github.com/<your-username>/lookit-docs.git
    / $ cd lookit-docs
    ```

## Editing the documentation

To make changes to the documentation pages, start from the `develop` branch. 

```
(denv) /lookit-docs $ git checkout develop
(denv) /lookit-docs $ git pull origin develop
```

In most cases you will make your changes on a separate branch, rather than on `develop`:

```
(denv) /lookit-docs $ git checkout -b my-branch-name
```

Edit the documentation files and review the rendered HTML files by running the `make html` command from inside the `docs` subdirectory. When finished editing, commit your changes and push to your branch on the remote repository:

```
(denv) /lookit-docs $ git commit -m 'my commit message'
(denv) /lookit-docs $ git push origin my-branch-name
```

Finally, create a Github pull request from your branch into `develop` for others to review.

## Contributing

Have you spotted an error in the documentation, or have other suggestions for improvement? We'd love your contributions! If you're not sure whether we'll want to incorporate your changes, please open an Issue in this repository so that we can discuss it first.

If you are not part of the Lookit team and would like to contribute changes to the Lookit documentation, you will follow the same steps listed above except that you will *make changes on your own fork of this repository*. Here is a summary of the process:
1. Fork this repository.
2. Set up your local environment, following the Installation steps above.
3. Make your changes, commit them, and push to your fork/branch.
4. Submit a pull request from your fork/branch targeted at the `develop` branch for this repository.
