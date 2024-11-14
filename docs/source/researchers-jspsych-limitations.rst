.. _jspsych-limitations:

====================================
Limitations to CHS jsPsych studies
====================================

While building your jsPsych study on the CHS platform, you may run into problems because of certain limitations to the CHS jsPsych experiment runner. This is especially likely if you're an experienced jsPsych user with experiments that you want to move onto CHS, or if you're referencing other (non-CHS) jsPsych tutorials/examples to build your study on CHS. 

Here are some things you should keep in mind when creating jsPsych studies on CHS.

- **All of the code needed to run your experiment must be provided in the CHS JavaScript editor.** 
    * Unlike many other jsPsych hosting options, on CHS you do not write an HTML file. CHS provides your study's HTML file and loads the JavaScript and CSS files. You can think of the CHS JavaScript editor as the main ``script`` element that you'll see in most jsPsych tutorials/examples.
    * You do not have the option to load additional files, including stimuli files or custom plugins/extensions.
    * Your stimuli files must be hosted online and loaded from an external URL, for instance via institutional storage, cloud storage, or Github (see our documentation about :ref:`hosting your stimuli online <putting-stimuli-online>`).

- **The CHS jsPsych experiment runner supports a limited set of jsPsych package/versions.**
    * Please refer to our list of available :ref:`jsPsych packages/versions <jspsych-packages>`, and our list of :ref:`custom CHS jsPsych packages <chs-jspsych-packages>`.
    * If you're trying to use a jsPsych plugin that is not available on CHS, you will see the following console error when you try to run the study: "Uncaught ReferenceError: <PLUGIN NAME> is not defined".
    * If your jsPsych study uses plugins that are not available on CHS, you may be able to replace them with plugins that we do support. For instance, instructions that are presented with the ``instructions`` plugin could be presented via HTML keyboard/button response trials.
    * If you have existing study code that uses a different version of the jsPsych core library or plugins, you may be able to update/modify your jsPsych code so that it's compatible with the versions we support. The jsPsych documentation offers version migration guides in their "Support" section, and all jsPsych packages contain release notes with detailed explanations of changes.