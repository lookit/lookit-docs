Installation: ember-lookit-frameplayer (Ember app)
==================================================

``ember-lookit-frameplayer`` is a small Ember application that allows both researchers to
preview an experiment and users to participate in an experiment. This is
meant to be used in conjunction with the `Lookit API Django
project <https://github.com/lookit/lookit-api>`__, which contains the
Experimenter and Lookit applications. The Django application will proxy
to these Ember routes for previewing/participating in an experiment.

In order to run the frame player as it works on Lookit, you will need to
additionally install the Django app ``lookit-api`` and then follow the
local frame development instructions to make sure it communicates with
the Ember app. This way, for instance, an experiment frame will be able
to look up previous sessions a user has completed and use those for
longitudinal designs.

   Note: These instructions are for Mac OS. Installing on another OS?
   Please consider documenting the exact steps you take and submitting a
   PR to the lookit-api repo to update the documentation!

Prerequisites
-------------

You will need the following tools properly installed on your computer.

-  `Git <http://git-scm.com/>`__
-  `Node.js <http://nodejs.org/>`__ (with NPM)
-  `Bower <http://bower.io/>`__

Installation
------------

Before beginning, you will need to install Yarn, a package manager (like
npm).

.. code:: bash

    git clone https://github.com/lookit/ember-lookit-frameplayer.git
    cd ember-lookit-frameplayer
    yarn install --pure-lockfile
    bower install

Create or open a file named ‘.env’ in the root of the
ember-lookit-frameplayer directory, and add the following entries to use
the Pipe WebRTC-based recorder: ``PIPE_ACCOUNT_HASH`` (reference to
account to send video to) and ``PIPE_ENVIRONMENT`` (which environment,
e.g. development, staging, or production). These are available upon
request if you need to use the actual Lookit environments. (If you are
doing a very large amount of local testing, we may ask that you set up
your own Pipe account.)

Running / Development
---------------------

-  ``ember serve``
-  Visit your app at http://localhost:4200.

If you change any dependencies, make sure to update and commit the yarn.lock file in 
addition to package.json.

Code Generators
~~~~~~~~~~~~~~~

Make use of the many generators for code, try ``ember help generate``
for more details

Running Tests
~~~~~~~~~~~~~

-  ``ember test``
-  ``ember test --server``

Building
~~~~~~~~

-  ``ember build`` (development)
-  ``ember build --environment production`` (production)

Writing documentation of frames
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Documentation of individual exp-player components is automatically
generated using YUIDoc:

-  yarn run docs

At the moment, this is a manual process: whatever files are in the top
level /docs/ folder of the master branch will be served via GitHub
pages.
