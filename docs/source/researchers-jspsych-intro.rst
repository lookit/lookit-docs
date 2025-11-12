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

The CHS jsPsych experiment runner automatically loads a set of packages from the standard jsPsych library for researchers to use. The set of jsPsych packages/versions loaded by CHS is below, along with links to documentation and change logs (version history).

.. rst-class:: jspsych-plugins-extensions

- `Core jsPsych library <https://www.jspsych.org/v8/>`__

  - v8.0.3 (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/jspsych/CHANGELOG.md>`__)

- `HTML keyboard response plugin <https://www.jspsych.org/v8/plugins/html-keyboard-response/>`__

  - v2.0.0 (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/plugin-html-keyboard-response/CHANGELOG.md>`__)
  - ``jsPsychHtmlKeyboardResponse``

- `Image keyboard response plugin <https://www.jspsych.org/v8/plugins/image-keyboard-response/>`__

  - v2.0.0 (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/plugin-image-keyboard-response/CHANGELOG.md>`__)
  - ``jsPsychImageKeyboardResponse``

- `Video keyboard response <https://www.jspsych.org/latest/plugins/video-keyboard-response/>`__

  - v2.1.0 (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/plugin-video-keyboard-response/CHANGELOG.md>`__)
  - ``jsPsychVideoKeyboardResponse``

- `HTML button response plugin <https://www.jspsych.org/v8/plugins/html-button-response>`__

  - v2.0.0 (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/plugin-html-button-response/CHANGELOG.md>`__)
  - ``jsPsychHtmlButtonResponse``

- `Image button response plugin <https://www.jspsych.org/v8/plugins/image-button-response/>`__

  - v2.0.0 (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/plugin-image-button-response/CHANGELOG.md>`__)
  - ``jsPsychImageButtonResponse``

- `Video button response plugin <https://www.jspsych.org/v8/plugins/video-button-response/>`__

  - v2.0.0 (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/plugin-video-button-response/CHANGELOG.md>`__)
  - ``jsPsychVideoButtonResponse``

- `Image hotspots <https://github.com/jspsych/jspsych-contrib/blob/main/packages/plugin-image-hotspots/docs/plugin-image-hotspots.md>`__

  - v1.0.0 (`see changelog <https://github.com/jspsych/jspsych-contrib/blob/main/packages/plugin-image-hotspots/CHANGELOG.md>`__)
  - ``jsPsychImageHotspots``

- `Video hotspots <https://github.com/jspsych/jspsych-contrib/blob/main/packages/plugin-video-hotspots/docs/plugin-video-hotspots.md>`__

  - v1.0.0 (`see changelog <https://github.com/jspsych/jspsych-contrib/blob/main/packages/plugin-video-hotspots/CHANGELOG.md>`__)
  - ``jsPsychVideoHotspots``

- `Preload plugin <https://www.jspsych.org/v8/plugins/preload/>`__

  - v2.0.0  (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/plugin-preload/CHANGELOG.md>`__)
  - ``jsPsychPreload``

- `Survey text plugin <https://www.jspsych.org/latest/plugins/survey-text/>`__

  - v2.1.0 (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/plugin-survey-text/CHANGELOG.md>`__)
  - ``jsPsychSurveyText``

- `Survey multi-choice plugin <https://www.jspsych.org/latest/plugins/survey-multi-choice/>`__

  - v2.1.0 (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/plugin-survey-multi-choice/CHANGELOG.md>`__)
  - ``jsPsychSurveyMultiChoice``

- `Fullscreen plugin <https://www.jspsych.org/latest/plugins/fullscreen/>`__

  - v2.1.0 (`see changelog <https://github.com/jspsych/jsPsych/blob/main/packages/plugin-fullscreen/CHANGELOG.md>`__)
  - ``jsPsychFullscreen``

.. admonition:: Need something else?

   If there are any specific jsPsych plugins/extensions that your experiment needs, please let us know! The best way to request access to a standard jsPsych package is by creating a ``lookit-api`` `Github issue <https://github.com/lookit/lookit-api/issues>`__, but you can also let us know on Slack.


.. _chs-jspsych-packages:

Custom CHS jsPsych packages
==================================================

In addition to the jsPsych packages listed above, the CHS jsPsych experiment runner also automatically loads some custom packages. These custom plugins/extensions were designed to "fill in the gaps" in the sort of functionality that CHS researchers typically need for child development studies. This functionality includes: standardized webcam/mic configuration steps, video-recorded consent, trial/session recording, and standardized exit surveys.

The custom CHS-jsPsych packages/versions are listed below, along with links to documentation and change logs (version history). The `CHS jsPsych documentation <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/>`__ contains more information about all of the parameters available in the CHS-jsPsych plugins/extensions.

**CHS Record package**

Current version: 4.0.0 (`see changelog <https://github.com/lookit/lookit-jspsych/blob/develop/packages/record/CHANGELOG.md>`__)

.. rst-class:: jspsych-plugins-extensions

- `Video config plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#video-configuration>`__

  - ``chsRecord.VideoConfigPlugin``

- `Video consent plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#video-consent>`__

  - ``chsRecord.VideoConsentPlugin``

- `Start session recording plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#session-recording>`__

  - ``chsRecord.StartRecordPlugin``

- `Stop session recording plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#session-recording>`__

  - ``chsRecord.StopRecordPlugin``

- `Trial recording extension <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#trial-recording>`__

  - ``chsRecord.TrialRecordExtension``

**CHS Surveys package**

Current version: v4.0.0 (`see changelog <https://github.com/lookit/lookit-jspsych/blob/develop/packages/surveys/CHANGELOG.md>`__)

.. rst-class:: jspsych-plugins-extensions

- `Consent survey plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/surveys/#consent-survey>`__

  - ``chsSurveys.ConsentSurveyPlugin``

- `Exit survey plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/surveys/#exit-survey>`__

  - ``chsSurveys.ExitSurveyPlugin``


.. _chs-jspsych-translations:

Translations
--------------------------

All of these plugins/extensions support the automatic translation of hard-coded text through a ``locale`` parameter. 

.. admonition:: Need something else?

    Do you need any types of trials (Lookit EFP "frames") or features that are not listed here, and are not available through the standard jsPsych library? Let us know! The best way to request a custom (CHS-specific) jsPsych plugin/extension or feature is by creating a ``lookit-jspsych`` `Github issue <https://github.com/lookit/lookit-jspsych/issues>`__, but you can also let us know on Slack.
