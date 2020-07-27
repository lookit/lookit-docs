Installation: lookit-api (Django project)
=========================================

``lookit-api`` is the codebase for Experimenter and Lookit, excluding the actual
studies themselves. Any functionality you see as a researcher or a
participant (e.g., signing up, adding a child, editing or deploying a
study, downloading data) is part of the ``lookit-api`` repo. 
This project is built using Django and PostgreSQL. (The studies
themselves use Ember.js; see Ember portion of codebase,
`ember-lookit-frameplayer <https://github.com/lookit/ember-lookit-frameplayer>`__.),
It was initially developed by the `Center for Open
Science <https://cos.io/>`__.

If you install only the ``lookit-api`` project locally, you will be able
to edit any functionality that does not require actual study
participation. For instance, you could contribute an improvement to how
studies are displayed to participants or create a new CSV format for
downloading data as a researcher.

   Note: These instructions are for Mac OS. Installing on another OS?
   Please consider documenting the exact steps you take and submitting a
   PR to the lookit-api repo to update the documentation!
   
   WARNING: These instructions are updated as of July 2020 and will likely require further
   clarification. Please get in touch on Slack if you're having trouble!

Basic installation
~~~~~~~~~~~~

- Clone the lookit-api repo: ``$ git clone https://github.com/lookit/lookit-api.git``
- Navigate to the root project directory: ``$ cd lookit-api``
- Create a virtual environment using pipenv and Python 3.8: ``$ pipenv --python 3.8``
  You can install pipenv if needed using ``pip install pipenv``. You can download Python 3.8
  from https://www.python.org/downloads/ if needed.
- Use the invoke script to go through setup: ``$ invoke setup`` This will install dependencies,
  create a local settings file, create local SSL certificates, and set up a postgresql database.
  
You can then run the server using ``$invoke server`` and should be able to log in using your
superuser credentials at https://localhost:8000/__CTRL__.

If you are not working extensively with lookit-api - i.e., if you just want to make some 
new frames - you do not need to run celery, rabbitmq, or docker.

Running Celery and Rabbitmq
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

These tools handle deferred tasks like sending emails and generating large file downloads.

- Run ``$ rabbitmq-server`` to start up the rabbitmq server.
- Run ``$ invoke celery-service`` to start celery, which will talk to rabbitmq. 

Running Docker
~~~~~~~~~~~~~~~

We use docker to build experiment runner images. If you are testing experiment builds, you will 
need to have Docker running - you can simply run ``$open /Applications/Docker.app`` or open it 
from Applications. 

Authentication
~~~~~~~~~~~~~~

OAuth authentication to OSF accounts, used for access to Experimenter,
currently does not work when running locally. You can create a local
participant account and log in using that to view participant-facing
functionality, or log in as your superuser at localhost:8000/__CTRL__ and
then navigate to Experimenter. As your superuser, you can also use the
Admin app to edit other local users - e.g., to make users researchers vs
participants.

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

During the installation phase, when running ``sh up.sh``, you may see
the following:

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

Then run ``sh up.sh again.``
