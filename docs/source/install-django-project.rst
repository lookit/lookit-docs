Installation: lookit-api (Django project)
=========================================

``lookit-api`` is the codebase for everything on the CHS website, excluding the actual
studies themselves. Any functionality you see as a researcher or a
participant (e.g., signing up, adding a child, editing or deploying a
study, downloading data) is part of the ``lookit-api`` repo. 
This project is built using Django and PostgreSQL. The internal studies themselves are written with front-end experiment building frameworks (see the Lookit Ember.js portion of codebase here:
`ember-lookit-frameplayer <https://github.com/lookit/ember-lookit-frameplayer>`__ and the jsPsych portion here: `lookit-jspsych <https://github.com/lookit/lookit-jspsych>`__).
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


Prerequisites
~~~~~~~~~~~~~

Before you can begin setting your local environment, we'll need to install a couple of things.

#. Install `mkcert <https://github.com/FiloSottile/mkcert>`__.

#. Install `Docker Desktop <https://www.docker.com/products/docker-desktop/>`__.

Local Environment
~~~~~~~~~~~~~~~~~

Now the Prerequisites have been installed and Docker is running we can setup the local environment.

#. Clone lookit-api and change directory:

   .. code-block:: shell

      git clone git@github.com:lookit/lookit-api.git
      cd lookit-api

#. Create environment file:

   .. code-block:: shell
      
      cp env_dist .env

#. Make local CA and certificates for HTTPS:

   .. code-block:: shell

      make local-certs

#. Run DB migrations and add entry into Site table:

   .. code-block:: shell

      make migrate
      make site

#. Celery worker will need some permissions setup to run correctly.  To setup these permissions, we'll need to first start the Docker services:

   .. code-block:: shell

      make serve

   Once the services are up and worker has exited due to a permission constraint, we'll set the permissions in the container and restart the worker:

   .. code-block:: shell

      make broker-perms

   From time to time, the container will need to be recreated,  when this happens you may need to run "broker-perms" again. 

At this point, the services should all be up and running.  Direct your browser to https://localhost:8000 to see the local environment. In the future, to start the services you will only need to run "make serve"


Django
~~~~~~

Here are few Django related tasks that might come up every now and then. 

To migrate the existing database:

.. code-block:: shell

   make migrate

If you need to create an entry in the Site table:

.. code-block:: shell

   make site

To create a superuser:

.. code-block:: shell

   make superuser

To run tests:

.. code-block:: shell

   make tests


Rabbitmq
~~~~~~~~

The broker should come up with the rest of the Docker services.  If you get a Celery worker error due to permissions, you can run the following command to resolve the issue and restart the worker service:

.. code-block:: shell

   make broker-perms

Postgres
~~~~~~~~

Here are a couple of command that might be useful for managing the local database.

To access the database shell:

.. code-block:: shell

   make dbshell

To import a SQL file into a fresh database (one where migrations haven't been ran):

.. code-block:: shell

   cat /location/of/sql/file | make dbpipe


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

Both the jsPsych and Lookit experiment runners require AWS credentials for uploading video to AWS S3 buckets during experiments, and retrieving those video files through the website. This works slightly differently for the two experiment runners.

For the Lookit experiment runner, the video uploading credentials are stored in the lookit-api .env file are AWS S3 region: ``S3_REGION``, bucket name: ``S3_BUCKET``, secret key ID: ``S3_ACCESS_KEY_ID``, and secret access key: ``S3_SECRET_ACCESS_KEY``. The IAM user/role associated with these credentials needs permission to access and upload objects into the corresponding bucket.

For the jsPsych experiment runner, the .env file must contain the AWS S3 region: ``JSPSYCH_S3_REGION`` and bucket name: ``JSPSYCH_S3_BUCKET``. The secret credentials that are needed for uploading videos during the experiment are temporary and generated "on the fly" when a user starts the experiment.

You will also need separate AWS credentials for that the site uses for retrieving videos and generating the jsPsych temporary uploading credentials. This information is stored in the .env file, and includes a secret key ID: ``AWS_ACCESS_KEY_ID`` and a secret key: ``AWS_SECRET_ACCESS_KEY``. The AWS IAM user/role associated with these credentials must have permission to access the two video storage buckets and retrieve objects - this allows the site to display consent videos and make the session recordings available to researchers (only if they have all of the required permissions!). This IAM user/role also needs permissions for generating the temporary credentials that are needed for jsPsych experiments, which includes permission to access and upload objects into the jsPsych bucket.

After a video is uploaded to an AWS S3 bucket, it triggers an AWS Lambda function that notifies the website about the video. This is how information about videos is stored in our database. The Lambda function uses a secret key to create a signature that is added to the header of the video POST request, which the lookit-api must verify before accepting the POST request. Therefore the lookit-api requires the same secret key that is accessed by the Lambda function in order to generate the signature. This key is stored in the .env file as ``AWS_LAMBDA_SECRET_ACCESS_KEY``.

Older versions of Lookit Studies
-----------------------------------

Older versions of the Lookit experiment runner (prior to Jan 30 2024) upload videos through an out-of-network service called Pipe. If you are not worried about running studies that use this older experiment runner version, then you can skip this set up.

The older Lookit experiment runner versions require an incoming webhook handler for an event generated
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
