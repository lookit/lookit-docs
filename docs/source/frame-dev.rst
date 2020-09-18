

.. _Custom frames:

##################################
Developing new frames
##################################

Suppose that for your study, you need a frame that’s not part of the
standard ember-lookit-frameplayer library. Maybe you want to use a particular game
you’ve already implemented in Javascript, or you want to slightly change
how one of the existing frames works, or you want to hard-code a
particular complicated counterbalancing scheme. That’s okay! You can add
a new frame to your own version of the ember-lookit-frameplayer repository, and tell
Experimenter to use your Github fork of ember-lookit-frameplayer (rather than the standard Lookit-maintained one) when building your
study. 

The Lookit codebase is composed of two main modules:

-  `lookit-api <https://github.com/lookit/lookit-api>`__:
   The repo containing the Lookit Django app - database structure for studies, responses, 
   children, users, etc; login and account management; study management and data download 
   tools for researchers; and an API to allow fetching and updating data (e.g. from an 
   experiment)
-  `ember-lookit-frameplayer <https://github.com/lookit/ember-lookit-frameplayer>`__:
   A small Ember app that provides the rendering engine and experiment frames for Lookit 
   studies, talking to the Lookit API to fetch and update data. We use the term 'frame' to 
   describe the combination of JavaScript file
   and Handlebars HTML template that compose a particular component of an experiment.

Generally, all frame development will happen in ember-lookit-frameplayer. If you want to 
develop a new frame, or make improvements to existing frames, you will likely want to run ember-lookit-frameplayer locally so that you can see and test out your changes instantly. This way, you don't have to repeatedly push your changes to GitHub and re-build your study 
to see how it works. 

To start developing your own frames, first follow the "Setup for local development" steps.

.. toctree::
   :maxdepth: 2
   :hidden:

   frame-dev-setup
   frame-dev-creation
   frame-dev-video-capture
   frame-dev-randomizers