.. _study_design:

##################################
Setting the study design
##################################

After you've created a study of a specific type, you can set the value of some additional fields that are specific to that study type and define the behavior of your study. See each study type below to see the design fields for that type.


***************************
Lookit (Ember Frameplayer)
***************************

Study protocol configuration
=============================

This needs to be a valid JSON block describing the different frames (pages) of your study, and the sequence. This can be left blank at the time you initially create your study. For detailed information about specifying your study protocol, see `Building an Experiment`_.

Experiment runner code URL and version
==========================================

The "Experiment runner code URL" is a link to the `Ember Frame Player <https://github.com/lookit/ember-lookit-frameplayer>`_ code that will run your study.  It's an ember app that can talk to our API. All the frames in the experiment are defined in Ember, and there is an exp-player component that can cycle through these frames.  You should leave this link as is, unless you have forked the Ember Frame Player Github repository (for instance, to create custom frame types) and want to use your fork instead.

The "Experiment runner version" is a Github commit SHA that refers to a specific version of the Ember Frame Player that you want to use. Typically when you create a new study, you will want to leave this blank, which means that your study will use the latest version of the experiment runner. This field is available in case you need to roll back to a previous version, for instance if an update to the Ember Frame Player caused a problem for your experiment.


******************
jsPsych
******************

jsPsych Experiment Code
=============================

This is where you enter your jsPsych experiment code. This is the JavaScript code used to generate a jsPsych study, not the surrounding HTML. Please see our CHS jsPsych documentation and :ref:`tutorial <jspsych-tutorial-first-study>` for more information about what jsPsych plugins and versions are automatically loaded for you to use, and how to load stimuli files.

.. _`Building an Experiment`: researchers-create-experiment.html


******************
External studies
******************

.. _study-url:

Study URL 
=============================

The link that families should be redirected to when they click the "Participate now" button on a study detail page. For unscheduled/unmoderated studies, this will be the study itself (e.g. a Qualtrics survey). For moderated studies, it should be a link to a scheduling system (e.g. Calendly). 

When the family clicks the "Participate now" button for external studies, the link will automatically include two pieces of information as URL query parameters: the hashed child ID ('child') and the response ID ('response'). This will allow you to automatically capture and record this information on the study/scheduling page, so that you can link the study responses and child's CHS account without having to ask the family to enter additional information. For example, if your Study URL is "\https://example.com", then the family will be directed to a link that has this format:

  \https://example.com/?child=SG7JLN&response=d5c8f502-6588-46c8-84fa-a9657a44fe47

It is up to the researcher to capture and record the "child" and "response" URL query parameter values on the external website. Many online experiment/survey tools have documentation on how to do this (e.g. `Qualtrics <https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/standard-elements/passing-information-through-query-strings/#PassingInformationIntoASurvey>`_). You can include your own URL query parameters in your Study URL and they will be retained along with the CHS parameters.

Scheduling Platform
=============================

Choose from a set of options to help us understand how researchers schedule participants for moderated/scheduled studies, and to build tools for common study types.

Study Platform
=============================

Choose from a set of study platforms to help us understand & build tools for common study types.


