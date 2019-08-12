==================================
Lookit API Local Machine Setup
==================================

Prerequisites
~~~~~~~~~~~~~
Before you can get the API running on your machine, there are a few steps you need to take to ensure everything will work
properly.

Install Docker
--------------
**For Linux Users**

Follow  `these instructions <https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04>`_.
Make sure you select the proper OS.


Install Postgres
----------------

**For Linux Users**

Before you get started, update your system with this command:

``sudo apt-get update``

Make sure you have python3 and pip installed:

``sudo apt install python3``

``sudo apt install python-pip``

Now, begin to install Postgres:

``sudo apt-get install PostgreSQL PostgreSQL-contrib``

Run the following command. It will take inside the Postgres world.

``sudo -u postgres psql postgres``

Every command now should start with postgres=#

In the postgres world, run the following commands:

``#\password postgres``

You should be prompted to enter a new password. Don’t type anything, just hit enter twice. This should clear the password.

postgres=# ``create database lookit``

postgres=# ``grant all privileges on database lookit to postgres``

If at this point you still do not have access to the lookit database, run the following commands:

``sudo vi /etc/postgresql/10/main/pg_hba.conf``

``pg_ctl reload``

A long document with # on the leftmost side of almost every line should open up. Scroll to the bottom. There will be a few lines that don’t start with #. They might be a different color and will start with either local or host. The last word in each of those lines should be trust. If it is not, switch into editing mode ( hit esc then type i and hit enter ) and change them to say trust. Then, save the file ( hit esc and then type :x before hitting enter ). You should now have access.





Install RabbitMQ
----------------

**For Linux Users**

First, run the following command:

``sudo apt install rabbitmq-server``

Now that rabbitmq server is installed, create an admin user with the following commands:

``sudo rabbitmqctl add_user admin password``

``sudo rabbitmqctl set_user_tags admin administrator``

``sudo rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"``

Make sure that the server is up and running:

``sudo systemctl stop rabbitmq-server.service``

``sudo systemctl start rabbitmq-server.service``

``sudo systemctl enable rabbitmq-server.service``

If you are having problems creating a user or getting the server running, try the following commands:

``sudo rabbitmq-plugins enable rabbitmq_management``

``sudo chown -R rabbitmq:rabbitmq /var/lib/rabbitmq/``

``sudo rabbitmqadmin declare queue --vhost=/ name=email``

``sudo rabbitmqadmin declare queue --vhost=/ name=builds``

``sudo rabbitmqadmin list queues``

When you run the last command, you should see something like this: ::

    +--------+----------+
    | name  | messages  |
    +--------+----------+
    | builds|     0     |
    | email |     0	|
    +--------+----------+


Install Ngrok
-------------

**For Linux Users**

To install, run this command:

``sudo snap install ngrok``

To connect to your local host run this command:

``ngrok http “[https://localhost:8000](https://localhost:8000)"``



Install SSL Certificates
------------------------



Setup
~~~~~






External Resources
~~~~~~~~~~~~~~~~~~~

Google Cloud
-------------

The Cloud service is where all the studies are stored.


Amazon Web Services
--------------------

This is where the consent videos are stored??

Celery
-------

This is what runs the long term tasks

Authenticator
---------------

Allows you to log into your account securely

Lookit Ember Frameplayer
------------------------

Consent manager videos

ADDPIPE
-------

ADDPIPE is used to record the video and audio. It connects to the hardware of your computer and films for you. It also
converts recorded files to ,mp4. https://addpipe.com/about

How Do These Programs Work Together?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following diagrams illustrate how different parts of the API interact with each other.

.. image:: _static/img/RabbitMQ.png

Every time the user makes a request, it is sent through microWSGI. If it is a request that will take more than a few
seconds, it is sent off to RabbitMQ which will delegate the tasks one by one to celery. If it is short enough, HTTP will
handle the request.

.. image:: _static/img/celery.png

Celery is used to build and relay tasks and make the API more efficient. Lengthy requests are sent through RabbitMQ to
celery, which will complete them on the side. The tasks sent to celery are ones that would ruin the user experience if
they backlogged the HTTPs request cycle. Programs like celery are used to keep the request cycle short.


.. image:: _static/img/docker.png

When you want to build a study, celery sends that request to Docker, which then sends the study static files back to celery.
After building the study, celery sends deployable static files to Google Cloud.





.. image:: _static/img/use-case.png

This is a diagram of all interactions possible with the Lookit API. On the rightmost side are all external resources being
used/



