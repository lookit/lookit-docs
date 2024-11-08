.. _Contributor Guidelines:

==================================
Contributor Guidelines
==================================

Interested in helping write the code behind the CHS platform?  Thanks for supporting open source science! This page describes the process any would-be contributor should plan to use.  We have included some beginner-friendly details in case you are new to open source projects.

The content of this page applies to all four CHS repos: ``lookit-api`` (CHS site), ``ember-lookit-frameplayer`` (Lookit experiment runner), ``lookit-jspsych`` (jsPsych experiment runner), and ``lookit-docs`` (the documentation you're reading now).

.. admonition:: Where's the code I need?

   If you only want to change something about the CHS site, without touching experiment functionality (for instance, to add a question to the demographic survey or change how studies are sorted), you will only need to run ``lookit-api`` and can follow the Django project installation steps. If you want to develop Lookit experiment frames or change how that experiment runner, you will need to follow the steps for local Lookit experiment runner development, installing *both* ``lookit-api`` and ``ember-lookit-frameplayer`` and telling them how to talk to each other. Your changes, however, will likely be limited to ``ember-lookit-frameplayer``. For the lookit-jspsych experiment runner, you will also need to install *both* ``lookit-api`` and ``lookit-jspsych``, and set up your local ``lookit-api`` to import your local ``lookit-jspsych`` packages. However, if you you want to develop your own jsPsych plugins (trials), you can do without installing any CHS code - just follow the jsPsych documentaton for `setting up your environment <https://www.jspsych.org/latest/developers/configuration/>`_ and `developing plugins <https://www.jspsych.org/latest/developers/plugin-development/>`_.

Prerequisites
~~~~~~~~~~~~~~~

To contribute to the `lookit-api` codebase, it will be very helpful to have a (a) a strong grasp of Python and (b) some familiarity with the Django framework. Learning Python is outside the scope of these docs, but if you want someplace to start, we highly recommend `Think Python <http://greenteapress.com/thinkpython2/html/index.html>`_. If you're already familiar with Python but haven't used the web framework Django, we highly recommend taking the time to complete `the official Django tutorial <https://docs.djangoproject.com/en/2.1/intro/tutorial01/>`_.

To contribute to the `ember-lookit-frameplayer` codebase - e.g., when creating your own experiment frames - it will be helpful to have (a) a strong grasp of Javascript and (b) some familiarity with Ember.js. However, we're really not using that much of the functionality of Ember, and if you're just making some new frames, we would recommend getting started by trying out modifications of an existing frame to get your feet wet, rather than trying to learn Ember from scratch.

Getting started
~~~~~~~~~~~~~~~~~~~

At a high level, we are roughly following a Forking Workflow version of Gitflow `as described here <https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow>`__.

You should plan to make feature-specific branches off of the ``develop`` branch (for ``lookit-api``, ``lookit-docs``), ``master`` branch (for ``ember-lookit-frameplayer``), or ``main`` branch (for ``lookit-jspsych``) of a local copy of the code running on your own machine. This will keep the codebase as clean as possible.

First create your own fork of ``lookit-api``, ``ember-lookit-frameplayer``, ``lookit-jspsych``, and/or ``lookit-docs``. Follow the directions for installation of ``lookit-api`` or ``ember-lookit-frameplayer`` if needed. 


Ignoring some files
~~~~~~~~~~~~~~~~~~~~

You may want to configure a global .gitignore on your machine and include your virtualenv(s) along with any files specific to your system.  A sample global .gitignore is available `here <https://gist.github.com/octocat/9257657>`__ -- you can tell git to globally ignore files specified in a .gitignore file via::

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

On ``lookit-api``, you should then update dependencies like this::

    pip install -r requirements/defaults.txt
    python manage.py migrate
    python manage.py test
    
On ``ember-lookit-frameplayer``, you should update dependencies using the package manager yarn.

Next, push all your local changes to your own fork. You should push your code (making sure to replace ``feature/my-validation-feature`` with whatever your branch is actually called)::

    git push --set-upstream origin feature/my-validation-feature

Prior to finalizing your commit, make sure to clean up your code to comply with PEP8. Since both black and isort are included in our development dependencies, you should just be able to run ``isort -rc . --skip venv`` to fix your imports, and similarly ``black . --exclude=venv`` to "blacken" your changes. With both commands, replace ``venv`` with the actual name of your virtual env directory so that you don't blacken/isort your dependencies.

When your branch is ready (you've tested your changes out, and your code has comments and tests), submit a Pull Request! To do this, go to GitHub, navigate to your fork (in this case the github extension should be /your-username/lookit-api), then click ``new pull request``.   Change the base to ``develop`` and the compare to ``feature/my-validation-feature``. Finally, click `Create pull request` and describe the changes you have made. Your pull request will be reviewed by CHS staff; changes may be requested before changes are merged into the develop branch. To allow CHS staff to add changes directly to your feature branch, follow the directions `here <https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/>`_.

IMPORTANT: WHEN YOUR PR IS ACCEPTED, stop using your branch right away (or delete it altogether).  New features (or enhanced versions of your existing feature) should be created on brand new branches based off the most up-to-date versions of the repository's 'base' branch (i.e. ``develop`` for ``lookit-api`` and ``lookit-docs``, ``master`` branch for ``ember-lookit-frameplayer``, or ``main`` branch for ``lookit-jspsych``).

Writing your tests
~~~~~~~~~~~~~~~~~~~~

In ``lookit-api``, you should generally add to or edit the ``tests.py`` file in the appropriate app (e.g., ``exp/tests.py``). You can run tests like this::

    python manage.py test

For more information see https://docs.djangoproject.com/en/2.1/topics/testing/.

In ``ember-lookit-frameplayer`` you should generally edit the tests under ``tests/``, but as 
you will see there is currently very little coverage. Just try to leave it better than you found it.

In ``ember-lookit-frameplayer``, you should generally add a test file under ``tests/unit/components/`` if you have created a new frame. As you can see, we do not have a strong convention for this yet except for randomizer frames.

To learn more about how testing is supposed to work for ``ember-lookit-frameplayer``, see https://guides.emberjs.com/v2.11.0/testing/.

For ``lookit-jspsych``, we use the `Jest framework <https://jestjs.io/>`_ and have re-used much of the `jsPsych test configuration <https://www.jspsych.org/latest/developers/configuration/#testing>`_. If you add or modify any ``lookit-jspsych`` code, you will likely need to add/edit tests that live alongside the source code in the ``.spec.ts`` files.


Creating a Lookit experiment runner release
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ember-lookit-frameplayer repo is semantically versioned. 

The release process is relatively manual for now because the expected workflow isn't finalized (it's currently almost entirely a one-person project).

Work should be completed and tested on a feature branch, then merged into develop.

To create a new major or minor release:
---------------------------------------

1. When a set of features is ready to release, create a release branch off of develop named ``release/vX.Y.Z`` 

2. Change version number in package.json in the release branch.

3. Turn on readthedocs builds for the release branch.

4. Make PRs from the release branch to master and develop, and merge commit.

5. Create a new release on GitHub, exactly matching the version name used above. Include release notes explaining what has been added/changed. For major versions (backwards-incompatible changes), include  step-by-step instructions for updating study protocols (e.g., "1. If your study contains a frame with ``kind: "exp-lookit-oldsurvey"``, replace "exp-lookit-oldsurvey" with "exp-lookit-survey". It will work the same way, the name has just changed.")

To create a new bugfix release for the latest version:
------------------------------------------------------

Follow the steps above except don't turn on readthedocs builds. 

To create a new bugfix release for an older version:
----------------------------------------------------

1. Create a new release branch off of the target release branch (e.g., ``release/v3.1.5``). Increment the version in the new branch name (e.g., ``release/v3.1.6``). 

2. Apply appropriate patch and increment version on new bugfix branch.

3. Create a new release on GitHub, exactly matching new version name. Include release notes explaining what has been fixed.


Creating a jsPsych experiment runner release
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coming soon!