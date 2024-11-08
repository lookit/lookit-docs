Installation: ember-lookit-frameplayer (Ember app)
==================================================

``ember-lookit-frameplayer`` is the Lookit experiment runner. It is a small Ember application that allows researchers to design experiments, and then
preview or participate in the experiment. This is
meant to be used in conjunction with the `Lookit API Django
project <https://github.com/lookit/lookit-api>`__, which contains the
rest of the code for the CHS site. The Django application will proxy
to these Ember routes for previewing/participating in a Lookit experiment.

In order to run the Lookit experiment runner as it works on CHS, you will need to
additionally install the Django app ``lookit-api`` and then follow the
local frame development instructions to make sure it communicates with
the Ember app. This way, for instance, an experiment frame will be able
to look up previous sessions a user has completed and use those for
longitudinal designs.

.. note::
   These instructions are for Mac OS. Installing on another OS?
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

Note: The ember-lookit-frameplayer uses Node v12, so if you encounter issues while running "yarn install --pure-lockfile", make sure to use nvm to switch node/npm versions. 

.. code:: bash

   nvm install 12 && nvm use 12

Create or open a file named ‘.env’ in the root of the
ember-lookit-frameplayer directory, and add the following entries to use
the Pipe WebRTC-based recorder: ``PIPE_ACCOUNT_HASH`` (reference to
account to send video to) and ``PIPE_ENVIRONMENT`` (which environment,
e.g. development, staging, or production). These are available upon
request if you need to use the actual Lookit environments. (If you are
doing a very large amount of local testing, we may ask that you set up
your own Pipe account.) Your .env file should look like this:

.. code::

   PIPE_ACCOUNT_HASH='<account hash here>'
   PIPE_ENVIRONMENT=<environment here>

In order to the HTML5 video recorder, you’ll need to set up to
use https locally. Open ``ember-lookit-frameplayer/.ember-cli`` and
make sure it includes ``ssl: true``:

.. code:: js

   "disableAnalytics": false,
   "ssl": true

Create ``server.key`` and ``server.crt`` files in the root
``ember-lookit-frameplayer`` directory as follows:

.. code-block:: bash

   mkdir ssl
   openssl genrsa -des3 -passout pass:x -out ssl/server.pass.key 2048
   openssl rsa -passin pass:x -in ssl/server.pass.key -out ssl/server.key
   rm ssl/server.pass.key
   openssl req -new -key ssl/server.key -out ssl/server.csr -subj /CN=localhost
   openssl x509 -req -sha256 -days 365 -in ssl/server.csr -signkey ssl/server.key -out ssl/server.crt

Running / Development
---------------------

.. code:: bash

   yarn start

Visit your app at http://localhost:4200.

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
