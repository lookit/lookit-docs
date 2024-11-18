Django app implementation notes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Workflow: managing study states
===============================

Why Transitions
---------------

`Transitions <https://github.com/pytransitions/transitions>`__ is an
object-oriented state machine implemented in Python.

It’s both very powerful and very simple. It’s definition is a python
dictionary so it can be easily serialized into JSON and stored in a
database or configured via YAML. It has callback functionality for state
transitions. It can create diagrams of the workflow using pygraphiz. It
also ties into django model classes very easily.

How
---

The workflow is defined in ``studies/workflow.py`` in a dictionary
called ``transitions``. Here is a
`gist <https://gist.github.com/cwisecarver/7335d99f04fa412a1004c72e2b979e34>`__
that explains how the pieces fit together.

Make a diagram
--------------

To make a workflow diagram in png format start a shell plus instance
with ``python manage.py shell_plus`` and execute the following:

.. code:: python

   # get a study you'd like to diagram
   s = Study.objects.first()
   # draw the whole graph ... in which case the study you choose doesn't matter
   s.machine.get_graph().draw('fancy_workflow_diagram.png', prog='dot')
   # ... or just the region of interest (contextual to the study you chose)
   # (previous state, active state and all reachable states)
   s.machine.get_graph(show_roi=True).draw('roi_diagram.png', prog='dot')

Logging
-------

There is a ``_finalize_state_change`` method on the ``Study`` model. It
fires after every workflow transition. It saves the model with its
updated ``state`` field and also creates a ``StudyLog`` instance making
record of the transition. This callback would be the optimal place to
add functionality that needs to happen after every workflow transition.


Permissions
===========

Generic best practices
----------------------

-  Groups are an important abstraction between users and permissions.

   -  If you assign permissions directly to a user it will be difficult
      to find out who has the permissions and difficult to remove them.

-  Creating a Group just to wrap an individual permission is fine.
-  Include the model name when defining model specific permissions.
   Permissions are referenced with app_name and permission codename.
-  Always check for individual permissions. **NEVER CHECK IF SOMEONE
   BELONGS TO A GROUP or ``is_superuser``**
-  ``is_superuser`` implicitly grants all permissions to a user. Any
   permissions check will return ``True`` if a user ``is_superuser``.

Guardian, how does it work?
---------------------------

Django provides model-level permissions. That means that you can allow
users in the Scientist group the ability to read the Report model or
users in the Admin group the ability to create, read, update, and delete
the Report model.

`Guardian <https://django-guardian.readthedocs.io/en/stable/>`__
provides object-level permissions. That means that you can allow users
in the Southern Scientists group the ability to read the a specific
Report instance about Alabama.

Guardian does this by leveraging Django’s generic foreign key field.
This means that Guardian can have a severe performance impact on queries
where you check object-level permissions. It will cause a double join
through Django’s ContentType table. If this becomes non-performant you
can switch to using `direct foreign
keys <https://django-guardian.readthedocs.io/en/stable/userguide/performance.html#direct-foreign-keys>`__.



Celery tasks
============

``build_experiment`` task
-------------------------

The business requirements for this project included the ability for
experiments to rely on versioned dependencies without causing conflicts
between experiments.

The experiment application is dependent on the ``ember-lookit-frameplayer`` repo.
Researchers have the ability to specify a custom github url for the
``ember-lookit-frameplayer`` repo. They can also specify a SHA for the commit that
they would like to use. These fields are on the Build Study Page.

What happens
------------

The build process uses `celery <http://www.celeryproject.org/>`__,
`docker <https://www.docker.com/>`__,
`ember-cli <https://ember-cli.com/>`__,
`yarn <https://yarnpkg.com/en/>`__, and `bower <https://bower.io/>`__.

When a build or preview is requested a celery task is put into the build
queue.

Inside the task, the study and requesting user are looked up in the
database. If it’s a preview task its current state is copied into a new
variable to be saved for later, then the study is put into the state of
``previewing`` and saved. If it’s a deployment the study is put into the
state of ``deployment`` and saved. Since these states don’t actually
exist in the workflow definition this short circuits the workflow engine
so that studies currently undergoing deployment or preview can neither
move through the workflow or be previewed or deployed concurrently.

The SHAs are checked in the study model’s metadata field, if they are
empty or invalid the **HEAD** of the default branch is used. This
requires HTTPS calls to github for the 
``ember-lookit-frameplayer`` repository.

A zip file of each repo is downloaded to a temporary directory and
extracted. The ``lookit-frame-player`` archive is extracted in the
*checkout directory* (``ember_build/checkouts/{player_sha}``).

A docker image is built based on the node:8.2.1-slim image. It is
rebuilt every time because it doesn’t change very often and docker
rebuilds of unchanged images are very fast.

The container is started passing several environment variables. It
installs python3 and several other dependencies with ``apt-get``. Then
it installs yarn, bower, and ember-cli@2.8 globally with npm. Next it
mounts the ``ember-build/checkouts`` directory to ``/checkouts`` inside
the container and the ``ember-build/deployments`` directory to
``/deployments`` inside the container. It copies
``ember-build/build.sh`` and ``ember-build/environment`` into the root
(``/``) of the container and executes ``/bin/bash /build.sh``.

``build.sh`` copies the contents of the *checkout directory* into the
container (``/checkout-dir/`` inside the container) for faster file
access. A couple of ``sed`` replacements are done where there are
experiment specific data that needs to be hardcoded prior to
``ember-build`` running. The ``environment`` files are copied into the
correct places. Then ``yarn install --pure-lockfile`` and
``bower install --allow-root`` are run for 
``ember-lookit-frameplayer``. Once those have completed ``ember-build -prod``
is run to create a distributable copy of the app. The contents of the
``dist`` folder is then copied into the study output directory. The
container is now destroyed.

Once the build process is finished the files in the ``dist`` folder are
copied to a folder on Google Cloud Storage. If it’s a preview they go
into a ``preview_experiments/{study.uuid}`` folder in the bucket for the
environment (staging or production). If it’s a deployment they go into a
``experiments/{study.uuid}`` folder in the bucket for the environment
(staging or production).

When the task is finished copying the files to Google Cloud Storage an
email is sent to the study admins and Lookit admins.

If the task was a preview task the state of the study is set back to
it’s previous state. If it was a deployment the study is set to active.
If the study is marked as discoverable, it will now be displayed on the
lookit studies list page.

Finally, regardless of whether the task completed successfully a study
log will be created. The extra field (a JSON field) will contain the
logs of the image build process, the logs of the ember build process
than ran inside the docker container, any raised exception, and the any
logs generated by python during the entire task run. This is very
helpful for debugging. Line endings are encoded for ease of storage so
to read the results easily copy the contents of a study logs extra field
from the admin into an editor and replace the overly escaped linebreaks
``(\\\\n|\\n)`` with actual line breaks ``\n``. You can also use a JSON
beautifier/formatter to aid readability.

``build_zipfile_of_videos``
---------------------------

This task downloads videos from MIT’s Amazon S3 bucket, zips them up,
uploads them to Google Cloud Storage, generates a signed url good for
30m, and emails the requesting user that URL.

-  The zip filename is generated from the study uuid, a sha256 of the
   included filenames, and whether it’s consent videos or all videos.
-  If a zip file exists on Google Cloud Storage with the same name the
   file is not regenerated, an email with a link is immediately sent.
-  After the task is completed all video files are immediately removed
   from the server. They still exist on s3 and Google Cloud Storage.

``cleanup_builds``
------------------

This finds build directories older than a day and deletes them. It’s
scheduled to run every morning at 2am.

``cleanup_docker_images``
-------------------------

This finds unused docker images from previous builds and deletes them.
It’s scheduled to run every morning at 3am.

``cleanup_checkouts``
---------------------

This finds checkout (extracted archives of github repos) directories
older than a day and deletes them. It’s scheduled to run every morning
at 4am.
