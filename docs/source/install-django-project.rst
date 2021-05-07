Installation: lookit-api (Django project)
=========================================

``lookit-api`` is the codebase for Experimenter and Lookit, excluding the actual
studies themselves. Any functionality you see as a researcher or a
participant (e.g., signing up, adding a child, editing or deploying a
study, downloading data) is part of the ``lookit-api`` repo. 
This project is built using Django and PostgreSQL. (The studies
themselves use Ember.js; see Ember portion of codebase,
`ember-lookit-frameplayer <https://github.com/lookit/ember-lookit-frameplayer>`__.),
It was initially developed by the `Center for Open Science <https://cos.io/>`__.

If you install only the ``lookit-api`` project locally, you will be able
to edit any functionality that does not require actual study
participation. For instance, you could contribute an improvement to how
studies are displayed to participants or create a new CSV format for
downloading data as a researcher.

.. note::
   These instructions are for Mac OS. Installing on another OS?
   Please consider documenting the exact steps you take and submitting a
   PR to the lookit-api repo to update the documentation!

Requirements
~~~~~~~~~~~~

This is the software you will need to have installed to run lookit-api locally.


#. If you haven't already, `install Brew <https://brew.sh>`__ and install Graphviz:
   
   .. code-block:: shell

      brew install graphviz
#. Install and start rabbitmq via brew:

   .. code-block:: shell

      brew install rabbitmq && brew services start rabbitmq

#. You will need to have `Docker installed <https://docs.docker.com/docker-for-mac/install/>`__ and running.
#. Create Postgres db using the following command:
   
   .. code-block:: shell

      docker run --name lookit-postgres -d -e POSTGRES_HOST_AUTH_METHOD="trust" -e POSTGRES_DB="lookit" -p 5432:5432 postgres:9.6

#. To help with installing a specific version of python, we'll need to `install asdf <https://asdf-vm.com/#/core-manage-asdf?id=install>`__. 
#. Add Python plugin using the following command.  Here's `documentation <https://github.com/danhper/asdf-python>`__ to help with errors:

   .. code-block:: shell

      asdf plugin-add python

#. At the root of the project, install python.  The `asdf Python plugin docs <https://github.com/danhper/asdf-python>`__ can help install older versions of python:

   .. code-block:: shell

      asdf install

#. Install `Poetry <https://python-poetry.org/docs/#installation>`__.

#. Install Python libraries:

   .. code-block:: shell

      poetry install

#. Use invoke to run setup:

   .. code-block:: shell

      poetry run invoke setup
  
#. Create a superuser by running:

   .. code-block:: shell

      poetry run ./manage.py createsuperuser
  
Now you should be ready for anything.  Going forward, you can run the server by:

.. code-block:: shell

   poetry run invoke server

Now you can go to http://localhost:8000 to see your local Lookit server! You should be able to log in using 
the superuser credentials you created during setup.

To view the HTTPS version of the local development add the ``https`` argument to the above command:

.. code-block:: shell

   poetry run invoke server --https

If you are not working extensively with lookit-api - i.e., if you just want to make some 
new frames - you do not need to run celery, rabbitmq, or docker.

Running Celery 
~~~~~~~~~~~~~~

You should already have a rabbitmq server installed and running.  You can check this by:

.. code-block:: shell

   brew services list

Use the invoke command to start the celery worker:

.. code-block:: shell

   poetry run invoke celery-service

Authentication
~~~~~~~~~~~~~~

You can create participant and researcher accounts through the regular signup flow on 
your local instance. To access Experimenter you will need to add two-factor authentication
to your account following the prompts. In order to access the admin interface 
(https://localhost:8000/__CTRL__),
which provides a convenient way to access and edit records, you will need to log in using
the superuser you created earlier using manage.py. 

Handling video
~~~~~~~~~~~~~~

This project includes an incoming webhook handler for an event generated
by the Pipe video recording service when video is transferred to our S3
storage. This requires a webhook key for authentication. It can be
generated via our Pipe account and, for local testing, stored in
project/settings/local.py as ``PIPE_WEBHOOK_KEY``. 

Pipe needs to be told where to send the webhook: 
You can use Ngrok to generate a public URL that 
/exp/renamevideo 
#TODO here

However, Pipe will
continue to use the handler on the production/staging site unless you
edit the settings to send it somewhere else (e.g., using ngrok to send
to localhost for testing).

Common Issues
~~~~~~~~~~~~~

During installation, you may see the following:

::

   psql: FATAL:  role "postgres" does not exist

To fix, run something like the following from your home directory:

::

   $../../../usr/local/Cellar/postgresql/9.6.3/bin/createuser -s postgres

If your version of postgres is different than 9.6.3, replace with the
correct version above. Running this command should be a one-time thing.

.. raw:: html

   <hr>

You might also have issues with the installation of ``pygraphviz``, with
errors like

::

   running install
   Trying pkg-config
   Package libcgraph was not found in the pkg-config search path.
   Perhaps you should add the directory containing `libcgraph.pc'
   to the PKG_CONFIG_PATH environment variable
   No package 'libcgraph' found

or

::

   pygraphviz/graphviz_wrap.c:2954:10: fatal error: 'graphviz/cgraph.h' file not found
   #include "graphviz/cgraph.h"
          ^
   1 error generated.
   error: command 'clang' failed with exit status 1

To fix, try running something like:

::

   $ brew install graphviz
   $ pip install --install-option="--include-path=/usr/local/include" --install-option="--library-path=/usr/local/lib" pygraphviz

Then re-run setup.
