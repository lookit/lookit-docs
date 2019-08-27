==================================
Guidelines for contributors
==================================

Interested in helping write the code behind the Lookit platform?  Thanks for supporting open source science! This page describes the process any would-be contributor should plan to use.  We have included some beginner-friendly details in case you are new to open source projects.

The content of this page applies to all three Lookit repos: ``lookit-api`` (Lookit site), ``ember-lookit-frameplayer`` (system for displaying experiments & components to use), and  ``lookit-docs`` (the documentation you're reading now).

>> **Where's the code I need?** If you only want to change something about the Lookit site, without touching experiment functionality (for instance, to add a question to the demographic survey or change how studies are sorted), you will only need to run `lookit-api` and can follow the Django project installation steps. If you want to develop experiment frames or change how the experiment player works, you will need to follow the steps for local frame development, installing *both* `lookit-api` and `ember-lookit-frameplayer` and telling them how to talk to each other. Your changes, however, will likely be limited to `ember-lookit-frameplayer`.

Prerequisites
~~~~~~~~~~~~~~~

To contribute to the `lookit-api` codebase, it will be very helpful to have a (a) a strong grasp of Python and (b) some familiarity with the Django framework. Learning Python is outside the scope of these docs, but if you want someplace to start, we highly recommend `Think Python <http://greenteapress.com/thinkpython2/html/index.html>`_. If you're already familiar with Python but haven't used the web framework Django, we highly recommend taking the time to complete `the official Django tutorial <https://docs.djangoproject.com/en/2.1/intro/tutorial01/>`_.

To contribute to the `ember-lookit-frameplayer` codebase - e.g., when creating your own experiment frames - it will be helpful to have (a) a strong grasp of Javascript and (b) some familiarity with Ember.js. However, we're really not using that much of the functionality of Ember, and if you're just making some new frames, we would recommend getting started by trying out modifications of an existing frame to get your feet wet, rather than trying to learn Ember from scratch.

To contribute to these docs, you'll just need to be able to edit `ReStructured Text  <http://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html>`_ files! You don't need to learn anything in advance - just look up syntax when you're not sure how to make a link, include an image, etc.

Getting started
~~~~~~~~~~~~~~~~~~~

At a high level, we are roughly following a Forking Workflow version of Gitflow `as described here <https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow>`_. You should plan to make feature-specific branches off of the ``develop`` branch of a local copy of the code running on your own machine. This will keep the codebase as clean as possible.  Before submitting a PR, merge in the most recent changes from the ``develop`` branch.  

First create your own fork of lookit-api, ember-lookit-frameplayer, and/or lookit-docs. Follow the directions for installation of lookit-api or ember-lookit-frameplayer if needed. 


Ignoring some files
~~~~~~~~~~~~~~~~~~~~

You may want to configure a global .gitignore on your machine and include your virtualenv(s) along with any files specific to your system.  A sample global .gitignore is available `here <https://gist.github.com/octocat/9257657>`_ -- you can tell git to globally ignore files specified in a .gitignore file via::

    git config --global core.excludesfile ~/path/to/your/.gitignore_global


Add your own feature and submit a Pull Request
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Keep your commit history clean and merge process simple by following these steps before starting on any new feature.

One time only, add the original repo as a remote to your fork, e.g., if you are contributing to `lookit-api` you would run a command like this:

SSH::

    git remote add upstream git@github.com:lookit/lookit-api.git

HTTPS::

    git remote add upstream https://github.com/lookit/lookit-api.git

Anytime a PR is merged or changes are pushed (or you're starting this process for the first time), you should run::

    git checkout develop
    git pull upstream develop

in order to make sure you are working with an up-to-date copy of the `develop` branch.

Once you have the most recent `develop` code, pick an issue (or create a new one) which your new feature will address and create a new branch off of `develop`.  Note: our project convention is to prepend `feature/` or `hotfix/` to the feature or issue name for a richer annotation of the commit history.  

If you want to create a new validation feature, for example, you might name it like this::

    git checkout -b feature/my-validation-feature

Now you can run `git branch` and should see an output like this::

    $ git branch
      develop
      master
    * feature/my-validation-feature

Proceed with writing code.  Commit frequently!  Focus on writing very clear, concise commit statements and plentiful comments.  If you have poor comments or zero tests, your PR will not be merged.

If you are aware of changes in the branch you forked from, rebase your branch from that changing branch (in our case that is `develop`) by running::

    git rebase develop
    
and then resolving all merge conflicts.

On `lookit-api`, you should then update dependencies like this::

    pip install -r requirements/defaults.txt
    python manage.py migrate
    python manage.py test
    
On `ember-lookit-frameplayer`, you should update dependencies using the package manager yarn.

Next, push all your local changes to your own fork. You should push your code (making sure to replace `feature/my-validation-feature` with whatever your branch is actually called)::

    git push --set-upstream origin feature/my-validation-feature

Prior to finalizing your commit, make sure to clean up your code to comply with PEP8. Since both black and isort are included in our development dependencies, you should just be able to run ``isort -rc . --skip venv`` to fix your imports, and similarly ``black . --exclude=venv`` to "blacken" your changes. With both commands, replace ``venv`` with the actual name of your virtual env directory so that you don't blacken/isort your dependencies.

When your branch is ready (you've tested your changes out, and your code has comments and tests), submit a Pull Request! To do this, go to GitHub, navigate to your fork (in this case the github extension should be /your-username/lookit-api), then click `new pull request`.   Change the base to `develop` and the compare to `feature/my-validation-feature`. Finally, click `Create pull request` and describe the changes you have made. Your pull request will be reviewed by Lookit staff; changes may be requested before changes are merged into the develop branch. To allow Lookit staff to add changes directly to your feature branch, follow the directions `here <https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/>`_.

IMPORTANT: WHEN YOUR PR IS ACCEPTED, stop using your branch right away (or delete it altogether).  New features (or enhanced versions of your existing feature) should be created on brand new branches (after pulling in all the fresh changes from ``develop``).

Writing your tests
~~~~~~~~~~~~~~~~~~~~

In `lookit-api`, you should generally add to or edit the `tests.py` file in the appropriate app (e.g., `exp/tests.py`). You can run tests like this::

    python manage.py test

For more information see https://docs.djangoproject.com/en/2.1/topics/testing/.

In `ember-lookit-frameplayer` you should generally edit the tests under `tests/`, but as 
you will see there is currently very little coverage. Just try to leave it better than you found it.

In `ember-lookit-frameplayer`, you should generally add a test file under `tests/unit/components/` if you have created a new frame. As you can see, we do not have a strong convention for this yet except for randomizer frames.

To learn more about how testing is supposed to work for `ember-lookit-frameplayer`, see https://guides.emberjs.com/v2.11.0/testing/.

If you are editing the documentation, please don't write tests! Just actually try building it so you'll notice if something's not formatted the way you expected.

Editing the Lookit documentation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Documentation for use of the Lookit platform (what you're reading now!), including *both* the Django site lookit-api and the Ember application ember-lookit-frameplayer used for the actual studies, lives in the `lookit-docs repo <https://github.com/lookit/lookit-docs/>`_  under ``docs``.

The file ``index.rst`` contains the table of contents (look for ``toctree``). Documentation is written using `ReStructured Text (RST) markup <http://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html>`_. It is also possible to add Markdown (.md) files and have them included in the documentation, but for consistency we are trying to keep all documentation in .rst format. If you are more familiar with Markdown, you can convert between formats using `Pandoc <https://pandoc.org/>`_, e.g.::

    pandoc -o outputfile.rst inputfile.md

If you are making substantial changes, you will want to take a look at how those changes look locally by using Sphinx to build your own local copy of the documentation. To do this, first create another virtual environment and install the requirements for Sphinx there::

    /lookit-docs $ virtualenv -p python3 denv
    /lookit-docs $ source denv/bin/activate
    (denv) /lookit-docs $ pip install -r docs/requirements.txt
    
You can then build the docs from within the ``docs`` directory::

    (denv) /lookit-docs/docs $ make html

Navigate to ``docs/build/html/index.html`` from your favorite web browser to inspect the docs.

To edit the documentation, please submit a PR to the ``lookit-docs/develop`` branch; when it's merged, the docs served by ReadTheDocs at https://lookit.readthedocs.io will be automatically updated! (Note that it is easy to have ReadTheDocs serve multiple versions of the documentation, from different branches; we just haven't reached the point of that being more useful than confusing yet.)
