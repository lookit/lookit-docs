.. _Custom frames:

##################################
Developing new frames
##################################

You may find you have a need for some experimental component not already
included in Lookit. The goal of this section is to walk through
extending the base functionality with your own code.

We use the term ‘frame’ to describe the combination of JavaScript file
and Handlebars HTML template that compose a **block** of an experiment
(see “Building your experiment”).

Experimenter is composed of two main modules:

-  `lookit-api <https://github.com/lookit/lookit-api>`__:
   The repo containing the Experimenter Django app. The Lookit Django
   app is also in this repo.
-  `ember-lookit-frameplayer <https://github.com/lookit/ember-lookit-frameplayer>`__:
   A small Ember app that allows the API in lookit-api to talk to the
   exp-player and provides the rendering engine and experiment frames for Lookit studies

Generally, all ‘frame’ development will happen in ember-lookit-frameplayer.

To start developing your own frames, you will want to first follow the
“Setup for local frame development” steps. To use the frame definitions
you have created when posting a study on Lookit, you can specify your
own ember-lookit-frameplayer repo to use (see “Using the experimenter interface”).

.. toctree::
   :maxdepth: 2
   :hidden:

   frame-dev-setup
   frame-dev-creation
   frame-dev-video-capture
   frame-dev-randomizers