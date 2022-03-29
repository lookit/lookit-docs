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
   PR to the lookit-api repo to update the documentation! For notes on Linux installation,
   there may be helpful information in a `previous version of invoke tasks.py <https://github.com/lookit/lookit-api/blob/d1b8c9b43cb7d7bda7cdbe5958236d99af42341d/tasks.py>`__.

Django
~~~~~~

These instructions will get walk you through the installation and running of the Django's local envionment.  

#. Install `Homebrew <https://brew.sh/>`__.  Run update and upgrade:

   .. code-block:: shell

      brew update && brew upgrade

#. Install `Docker <https://docs.docker.com/docker-for-mac/install/>`__ and make sure it's running.

#. Install Git and Poetry:

   .. code-block:: shell

      brew install git poetry

#. Change directory to where you want the project to live.  Next, clone repo and change directory.

   .. code-block:: shell

      git clone git@github.com:lookit/lookit-api.git
      cd lookit-api

#. Set Poetry's Python and install Python packages:

   .. code-block:: shell

      poetry env use python3.9
      poetry run pip -U pip wheel setuptools
      poetry install

#. Create database and run setup script:

   .. code-block:: shell

      poetry run invoke create-db setup

   This will create a local .env file with environment variables for local development,
   run the Django application's database migrations ("catching up" on changes to the 
   database structure) and create local SSL certificates. If you're curious about what 
   exactly is happening during this step, or run into any problems, you can reference the 
   file `tasks.py <https://github.com/lookit/lookit-api/blob/develop/tasks.py>`__.

#. Run local environment server:

   .. code-block:: shell

      poetry run ./manage.py runserver

#. Navigate to local environment at http://localhost:8000.

Rabbitmq
~~~~~~~~

These instructions will have you create and start a RabbitMQ image in Docker.

Install and start rabbitmq via docker:

.. code-block:: shell

   docker run -d --name lookit-rabbit --env-file .env -p 5672:5672 rabbitmq:3.8.16-management-alpine
   docker cp ./rabbitmq.sh lookit-rabbit:/rabbitmq.sh
   docker exec -it lookit-rabbit /bin/sh -c "sh /rabbitmq.sh"

Postgres
~~~~~~~~

This is covered above, but as sometimes databases can be ephemeral during development I felt that it deserved its own section.

Create a Postgres database using the following command:
   
.. code-block:: shell

   poetry run create-db

To reset the database:

.. code-block:: shell

   poetry run reset-db

To reset the database and load an existing sql data file:

.. code-block:: shell

   poetry run reset-db -s /location/of/sql/file


Create Superuser
~~~~~~~~~~~~~~~~

You can create a user through UI or if you'd rather have Superuser access you can create a user with the manage script.
  
Create a superuser by running:

.. code-block:: shell

   poetry run ./manage.py createsuperuser
      
Now you should be ready for anything. Going forward, you can run the server using the 
directions below.

Running the server
~~~~~~~~~~~~~~~~~~~

Again, this is covered above, but there is a case you'd need to run the development server with SSL.  This section will cover both variants. 

To run the Lookit server locally, run:

.. code-block:: shell

   poetry run ./manage.py runserver

Or to use the invoke script:

.. code-block:: shell

   poetry run invoke server

Now you can go to http://localhost:8000 to see your local Lookit server! You should be able to log in using 
the superuser credentials you created during setup.

To view the HTTPS version of the local development add the ``https`` argument to the above command:

.. code-block:: shell

   poetry run invoke server --https

If you are not working extensively with lookit-api - i.e., if you just want to make some 
new frames - you do not need to run celery, rabbitmq, or docker. For more information about 
these services and how they interact, please see the `Contributing guidelines <https://github.com/lookit/lookit-api/blob/develop/CONTRIBUTING.md>`__.

Celery 
~~~~~~~~~~~~~~

You should already have a rabbitmq server installed and running.  You can check this by:

.. code-block:: shell

   docker ps -f name=lookit-rabbit
   
If rabbitmq is not running, you can start it using:

.. code-block:: shell

   docker start lookit-rabbit

Then use the invoke command to start the celery worker:

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
by the Pipe video recording service used by ember-lookit-frameplayer when video is transferred to our S3
storage. This requires a webhook key for authentication. It can be
generated via our Pipe account and, for local testing, stored in
.env under ``PIPE_WEBHOOK_KEY``.

Pipe needs to be told where to send the webhook. First, you need to expose your local
/exp/renamevideo hook. You can use Ngrok to generate a public URL for your local instance
during testing:

.. code-block:: shell

   ngrok http https://localhost:8000
   
Then, based on the the assigned URL, you will need to manually edit the webhook on the 
dev environment of Pipe to send the ``video_copied_s3`` event to (for example) 
``https://8b48ad70.ngrok.io/exp/renamevideo/``.


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
