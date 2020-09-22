##################################
Developer guide
##################################

Interested in building on Lookit, or contributing a feature or bug fix? Here are the instructions you'll need to get everything running on your local machine, as well as some notes for reference on how things have been implemented and guidelines for adding to the codebase.

The `Lookit codebase <https://github.com/lookit/>`_ has been jointly developed by MIT and the `Center for Open Science <https://cos.io/>`_. All of it is open-source (MIT License). It contains two main repositories:

* `lookit-api <https://github.com/lookit/lookit-api>`_, a Django application that houses  functionality for both participants and researchers. Participants can log in, take part in studies with their children, and view their past responses; researchers can design, administer, and download data from their studies.

* `ember-lookit-frameplayer <https://github.com/lookit/ember-lookit-frameplayer>`_, an Ember app that runs the actual studies in the web browser

The documentation you are reading now lives in `lookit-docs <https://github.com/lookit/lookit-docs>`_.

   
.. toctree::
   :maxdepth: 3
   :hidden:
   
   install-django-project
   install-ember-app
   implementation
   contributor-guidelines
