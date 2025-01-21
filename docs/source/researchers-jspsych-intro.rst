.. _jspsych-intro:

====================================
jsPsych studies on CHS
====================================

`jsPsych <https://www.jspsych.org/latest/>`__ is an open source library for creating a wide range of behavioral experiments that run in a web browser. It consists of a core library and "plugins". Plugins are the components that make up the experiment. Each plugin lets you define different kinds of events (e.g. presenting an image or text) and it collects different kinds of data (e.g. responses and response times). The jsPsych library also supports a wide range of features that are commonly used in behavioral experiments, like looping over sets of trials, randomizing, sampling, and conditional behavior.

To get a feel for how to build a jsPsych experiment, you can check out the jsPsych `Hello World tutorial <https://www.jspsych.org/v8/tutorials/hello-world/>`__ and `RT task tutorial <https://www.jspsych.org/v8/tutorials/rt-task/>`__. We also have our own :ref:`CHS jsPsych Hello World tutorial <jspsych-tutorial-first-study>`, which demonstrates the CHS-specific features (:ref:`detailed in this section <chs-jspsych-packages>`) that we've added for jsPsych studies running on the CHS platform.

To learn more about jsPsych features, some other great places to start are the jsPsych documentation about `timelines <https://www.jspsych.org/v8/overview/timeline/>`__ and `dynamic parameters <https://www.jspsych.org/v8/overview/dynamic-parameters/>`__.


.. _jspsych-packages:

jsPsych packages
==============================

The CHS jsPsych experiment runner automatically loads a set of packages from the standard jsPsych library for researchers to use. These are:

- `Core jsPsych library <https://www.jspsych.org/v8/>`__ v8.0.3
- `HTML keyboard response plugin <https://www.jspsych.org/v8/plugins/html-keyboard-response/>`__ v2.0.0: ``jsPsychHtmlKeyboardResponse``
- `Image keyboard response plugin <https://www.jspsych.org/v8/plugins/image-keyboard-response/>`__ v2.0.0: ``jsPsychImageKeyboardResponse``
- `HTML button response plugin <https://www.jspsych.org/v8/plugins/html-button-response>`__ v2.0.0: ``jsPsychHtmlButtonResponse``
- `Image button response plugin <https://www.jspsych.org/v8/plugins/image-button-response/>`__ v2.0.0: ``jsPsychImageButtonResponse``
- `Video button response plugin <https://www.jspsych.org/v8/plugins/video-button-response/>`__ v2.0.0: ``jsPsychVideoButtonResponse``
- `Preload plugin <https://www.jspsych.org/v8/plugins/preload/>`__ v2.0.0: ``jsPsychPreload``

We will likely add more options in the future. If there are any specific jsPsych plugins/extensions that your experiment needs, please let us know! The best way to request access to a standard jsPsych package is by creating a ``lookit-api`` `Github issue <https://github.com/lookit/lookit-api/issues>`__, but you can also let us know on Slack.


.. _chs-jspsych-packages:

Custom CHS jsPsych packages
==================================================

In addition to the jsPsych packages listed above, the CHS jsPsych experiment runner also automatically loads some custom packages. These custom plugins/extensions were designed to "fill in the gaps" in the sort of functionality that CHS researchers typically need for child development studies. This functionality includes: standardized webcam/mic configuration steps, video-recorded consent, trial/session recording, and standardized exit surveys.

The `CHS jsPsych documentation <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/>`__ contains more information about all of the parameters available in the CHS jsPsych plugins/extensions listed below. 

Do you need any types of trials (Lookit EFP "frames") or features that are not listed here, and are not available through the standard jsPsych library? Let us know! The best way to request a custom (CHS-specific) jsPsych plugin/extension or feature is by creating a ``lookit-jspsych`` `Github issue <https://github.com/lookit/lookit-jspsych/issues>`__, but you can also let us know on Slack.

.. _chs-jspsych-plugins:

Plugins
---------------------

- `Video config plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#video-configuration>`__ in the CHS Record package: ``chsRecord.VideoConfigPlugin``
- `Video consent plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#video-consent>`__ in the CHS Record package: ``chsRecord.VideoConsentPlugin``
- `Start session recording plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#session-recording>`__ in the CHS Record package: ``chsRecord.StartRecordPlugin``
- `Stop session recording plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#session-recording>`__ in the CHS Record package: ``chsRecord.StopRecordPlugin``
- `Consent survey plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/surveys/#consent-survey>`__ in the CHS Surveys package: ``chsSurveys.ConsentSurveyPlugin``
- `Exit survey plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/surveys/#exit-survey>`__ in the CHS Surveys package: ``chsSurveys.ExitSurveyPlugin``

.. _chs-jspsych-extensions:

Extensions
--------------------------

jsPsych extensions are packages that extend the functionality of a plugin.

- `Trial recording extension <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#trial-recording>`__ in the CHS Record package: ``chsRecord.TrialRecordExtension``

.. _chs-jspsych-translations:

Translations
--------------------------

All of these plugins/extensions support the automatic translation of hard-coded text through a ``locale`` parameter. 
