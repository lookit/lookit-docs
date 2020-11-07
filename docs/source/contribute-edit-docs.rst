==================================
Editing this documentation
==================================

Basic instructions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If there are changes you'd like to make to a single page - for instance, correcting a typo or adding an explanation of something that confused you - you can follow :ref:`the step-by-step directions in the tutorial<First PR>` to make your changes right on Github. 

Advanced instructions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you want to make bigger changes, such as reorganizing content or adding new pages, it'll be easiest to work with a local copy of the documentation.

Documentation for use of the Lookit platform (what you're reading now!) lives in the `lookit-docs repo <https://github.com/lookit/lookit-docs/>`_. You can fork this repository to create your own copy of it on Github, and then clone that fork so you have a local copy of the docs to edit in a familiar text editor.

The file ``index.rst`` contains the table of contents (look for ``toctree``). Documentation is written using `ReStructured Text (RST) markup <http://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html>`_. For consistency we are trying to keep all documentation in .rst format. If you are more familiar with Markdown, you can convert between formats using `Pandoc <https://pandoc.org/>`_, e.g.::

    pandoc -o outputfile.rst inputfile.md

If you are making substantial changes, you will want to take a look at how those changes look locally by using Sphinx to build your own local copy of the documentation. To do this, first create another virtual environment and install the requirements for Sphinx there::

    /lookit-docs $ virtualenv -p python3 denv
    /lookit-docs $ source denv/bin/activate
    (denv) /lookit-docs $ pip install -r docs/requirements.txt
    
You can then build the docs from within the ``docs`` directory::

    (denv) /lookit-docs/docs $ make html

Navigate to ``docs/build/html/index.html`` from your favorite web browser to inspect the docs.

Once you are happy with your changes, commit them using git and push the changes back up to your fork of the docs on Github. Then create a PR to the ``lookit-docs/develop`` branch; when it's merged, the docs served by ReadTheDocs at https://lookit.readthedocs.io will be automatically updated! (Note that it is easy to have ReadTheDocs serve multiple versions of the documentation, from different branches; we just haven't reached the point of that being more useful than confusing yet.)
