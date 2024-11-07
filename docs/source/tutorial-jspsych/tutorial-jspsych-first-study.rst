.. _jspsych-tutorial-first-study:

#####################################################
1. Setting up your first jsPsych study
#####################################################

In this section, you will be creating your first jsPsych study on CHS!

.. admonition:: Who should do this section?

    **This section is designed for researchers planning to build an internal jsPsych study that will be hosted on CHS.** If your first study will be written with the Lookit experiment runner (ember-lookit-frameplayer), then you can do the :ref:`Lookit section <lookit-tutorial-first-study>` instead for this "Create a study" step in the tutorial. Or, if your study involves a link to an experiment hosted somewhere else (i.e. an "external" study), you can skip to step 4 in the tutorial: :ref:`Managing Study Data <tutorial-manage-data>`.

`jsPsych <https://www.jspsych.org/latest/>`__ is a comprehensive open source library for creating behavioral experiments that run in a web browser. The CHS team has created a small library of custom jsPsych plugins/extensions to "fill in the gaps" in the sort of functionality CHS researchers need for child development studies. This functionality includes: standardized webcam/mic configuration steps, video-recorded consent, trial/session recording, and standardized exit surveys. Therefore jsPsych studies on CHS will typically use a mix of: 

1. Our `customized CHS jsPsych plugins and extensions <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/>`__, which were created specifically for the CHS platform, and 
2. The "official" jsPsych  `plugins <https://www.jspsych.org/latest/plugins/list-of-plugins/>`__ and `extensions <https://www.jspsych.org/latest/extensions/list-of-extensions/>`__, which are more general-purpose and fully-featured for creating a wide variety of experiments. 

This is intended to be a "quick start" tutorial, so there's little explanation about how things work, why they're written out this way, or what options you have when creating experiments/trials. If you're interested in learning more as you go along, you can always reference the documentation links above.

Step 1: Create a new CHS jsPsych study
-------------------------------------------------

Your first step is to create a new CHS study and fill in some details on the study creation form. It doesn't matter what you put here, but you will need some placeholder text/values in most fields to be able to create a study successfully. When you get to the bottom of the form, under "Study Type", choose the "jsPsych" option.

Step 2: Add a Hello World trial
-------------------------------------------------

Now you should see the Edit Study Design page, with a box that says "jsPsych Experiment Code". Click in that box - it should open into a larger window. This is your JavaScript editor, where you will put all of the code you need to create your experiment.

.. admonition:: What about the HTML?

   If you've used jsPsych before, you might be used to creating an HTML file (e.g. in Step 1 of this `jsPsych tutorial <https://www.jspsych.org/latest/tutorials/hello-world/#step-1-create-an-html-file>`__). On CHS, we've created the HTML file and loaded the jsPsych packages for you, so all you need to do is write the JavaScript.

Let's start by initializing jsPsych with the ``initJsPsych`` function:

.. code:: javascript

    const jsPsych = initJsPsych();

Then create a Hello World trial using jsPsych's `HTML button response plugin <https://www.jspsych.org/latest/plugins/html-button-response/>`__:

.. code:: javascript

    const hello_trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: 'Hello world!',
        choices: ['Next']
    };

Now that we're done creating trials (for now), we can tell jsPsych to run our experiment. We need to use the ``jsPsych.run`` function, and give it the array of trial objects that we want to run. In this case, we're only running one trial, so it looks like this: 

.. code:: javascript

    jsPsych.run([hello_trial]);


Here's the full code so far:

.. code:: javascript

    const jsPsych = initJsPsych();

    const hello_trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: 'Hello world!',
        choices: ['Next']
    };

    jsPsych.run([hello_trial]);


Click "Close" to close the JavaScript editor (your code will still be there), then click "Save Changes". On your experiment details page, click "Preview" to run through your experiment.
    

Step 3: Add a video config trial
-------------------------------------------------

That was fun! But this isn't a very realistic or useful experiment. Now let's add a video configuration trial. This trial type is used for setting up the participant's webcam and mic. It is *required* before doing any kind of webcam display or recording during the experiment, so most experiments will include this trial early on in the jsPsych "timeline" (trial sequence). 

Let's create a "video_config" trial using the custom `CHS video config plugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#video-configuration>`__. 

.. code:: javascript

    const video_config = { type: chsRecord.VideoConfigPlugin };


We'll add this trial to the ``jsPsych.run`` trial sequence before the hello world trial.

.. code:: javascript

    jsPsych.run([video_config, hello_trial]);


Here's what we have now:

.. code:: javascript

    const jsPsych = initJsPsych();

    const video_config = { type: chsRecord.VideoConfigPlugin };

    const hello_trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: 'Hello world!',
        choices: ['Next']
    };

    jsPsych.run([video_config, hello_trial]);


When you save your code and preview the experiment, you should see the video config trial first, followed by the hello world trial.


Step 4: Add a video consent trial
-------------------------------------------------

Like the video config trial, CHS studies almost always include a video consent trial. Let's add that after the video config trial. 

The video consent trial uses a custom CHS plugin. It requires more parameters than we've needed so far, because this trial must contain a number of details about the experiment. Here we're adding a video consent trial with all of the required parameters, but there are some optional parameters you can change as well. See our CHS jsPsych documentation about the CHS Record package's `VideoConsentPlugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#video-consent>`__ for more information about the required and optional parameters.

Here's the full code, including the new video consent trial:

.. code:: javascript

    const jsPsych = initJsPsych();

    const video_config = { type: chsRecord.VideoConfigPlugin };

    const video_consent = {
        type: chsRecord.VideoConsentPlugin,
        PIName: "Jane Smith",
        institution: "Science University",
        PIContact: "Jane Smith at 123 456 7890",
        payment: "After you finish the study, we will email you a $5 BabyStore gift card within approximately three days. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
        procedures: "Your child will be shown pictures of lots of different cats, along with noises that cats make like meowing and purring. We are interested in which pictures and sounds make your child smile. We will ask you (the parent) to turn around to avoid influencing your child's responses.",
        purpose: "Why do babies love cats? This study will help us find out whether babies love cats because of their soft fur or their twitchy tails."
    };

    const hello_trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: 'Hello world!',
        choices: ['Next']
    };

    jsPsych.run([video_config, video_consent, hello_trial]);


Now when you save your code and preview the experiment, you should see: a video config trial, a video consent trial, and the hello world trial.


Step 5: Add an exit survey trial
-------------------------------------------------

As with the video config and consent trials, CHS studies will almost always need an "exit survey" trial at the end. This helps create a more consistent experience for CHS families, and it ensures they always have a chance to give feedback or withdraw their data. It also marks the response as "complete" in our database, so that you can access the data. 

Let's create the exit survey trial using a custom CHS jsPsych plugin. Again, we're just using the default settings, but there are also some optional parameters you can set - see the CHS Surveys package `ExitSurveyPlugin <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/surveys/#exit-survey>`__ documentation for more information. 

.. code:: javascript

    const exit_survey = { type: chsSurvey.ExitSurveyPlugin };


This trial will go at the very end of our experiment timeline.

.. code:: javascript

    jsPsych.run([video_config, video_consent, hello_trial, exit_survey]);


The full code so far:

.. code:: javascript

    const jsPsych = initJsPsych();

    const video_config = { type: chsRecord.VideoConfigPlugin };

    const video_consent = {
        type: chsRecord.VideoConsentPlugin,
        PIName: "Jane Smith",
        institution: "Science University",
        PIContact: "Jane Smith at 123 456 7890",
        payment: "After you finish the study, we will email you a $5 BabyStore gift card within approximately three days. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
        procedures: "Your child will be shown pictures of lots of different cats, along with noises that cats make like meowing and purring. We are interested in which pictures and sounds make your child smile. We will ask you (the parent) to turn around to avoid influencing your child's responses.",
        purpose: "Why do babies love cats? This study will help us find out whether babies love cats because of their soft fur or their twitchy tails."
    };

    const hello_trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: 'Hello world!',
        choices: ['Next']
    };

    const exit_survey = { type: chsSurvey.ExitSurveyPlugin };

    jsPsych.run([video_config, video_consent, hello_trial, exit_survey]);


Step 6: Add session recording
-------------------------------------------------

We now have a bare-bones CHS experiment structure: webcam/mic configuration, video-recorded consent, our "experiment" (hello world trial), and an exit survey. The only thing we're missing for typical CHS experiments is webcam recordings that are captured during the experiment. We can do that using either: (a) session recording, where a webcam recording starts at a specified point in the experiment's trial sequence and ends at another point, with any number of experimental trials in between, or (b) trial recording, where a webcam recording is created at the start of a particular trial and ends when that trial finishes.

.. admonition:: When should/shouldn't I use trial and session recording?

   CHS's trial and session recording features are intended for use with "normal" trials that do not already have any kind of webcam access/recording. Therefore you should NOT use trial or session recording during a ``VideoConfigPlugin`` or ``VideoConsentPlugin`` trial, and you should NOT use the trial recording and session recording features simultaneously for any trial(s).


We'll start by adding session recording that starts before our hello world trial and ends immediately afterwards. To do this, we need to make a few changes: 

1. Add a "start recording" trial using the ``StartRecordPlugin`` from the `CHS Record package <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#session-recording>`__.

    .. code:: javascript

        const startRec = { type: chsRecord.StartRecordPlugin };

2. Add a "stop recording" trial using the ``StopRecordPlugin`` from the `CHS Record package <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#session-recording>`__.

    .. code:: javascript

        const stopRec = { type: chsRecord.StopRecordPlugin };

3. Put these trials into the experiment timeline, before and after the "hello world" trial.

    .. code:: javascript

        jsPsych.run([video_config, video_consent, start, hello_trial, stop, exit_survey]);

Here's the full experiment code now:

.. code:: javascript

    const jsPsych = initJsPsych();

    const video_config = { type: chsRecord.VideoConfigPlugin };

    const video_consent = {
        type: chsRecord.VideoConsentPlugin,
        PIName: "Jane Smith",
        institution: "Science University",
        PIContact: "Jane Smith at 123 456 7890",
        payment: "After you finish the study, we will email you a $5 BabyStore gift card within approximately three days. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
        procedures: "Your child will be shown pictures of lots of different cats, along with noises that cats make like meowing and purring. We are interested in which pictures and sounds make your child smile. We will ask you (the parent) to turn around to avoid influencing your child's responses.",
        purpose: "Why do babies love cats? This study will help us find out whether babies love cats because of their soft fur or their twitchy tails."
    };

    const start = { type: chsRecord.StartRecordPlugin };

    const hello_trial = {
      type: jsPsychHtmlButtonResponse,
      stimulus: 'Hello world!',
      choices: ['Next']
    };

    const stop = { type: chsRecord.StopRecordPlugin };

    const exit_survey = { type: chsSurvey.ExitSurveyPlugin };

    jsPsych.run([video_config, video_consent, start, hello_trial, stop, exit_survey]);


Step 7: Switch to trial recording
-------------------------------------------------

We now we'll switch to trial-level recording during our hello world trial. To do this, we need to make a few changes: 

1. Remove the "start" and "stop" trials that we added in the last step. To do this, you can leave unused "start" and "stop" trials in your code and just remove them from the experiment timeline array passed to ``jsPsych.run``. Now your experiment timeline should look like this:

    .. code:: javascript

        jsPsych.run([video_config, video_consent, hello_trial, exit_survey]);


2. Add the `chsRecord.TrialRecordExtension` to the parameters that are passed into ``initJsPsych``. This is the `jsPsych initialization function <https://www.jspsych.org/latest/reference/jspsych/#initjspsych>`__, which takes an optional settings object and parameters. So far we haven't needed any of these setting parameters, but now we do need to tell jsPsych that we're planning to use the trial recording extension at some point during the experiment.

    .. code:: javascript

        const jsPsych = initJsPsych({
            extensions: [{ type: chsRecord.TrialRecordExtension }]
        });



3. Add the `chsRecord.TrialRecordExtension` to the configuration for the trial that we want to be recorded. This tells jsPsych to run trial recording for that particular trial. Here we are just adding trial recording to the "hello_world" trial.

    .. code:: javascript

        const hello_trial = {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Hello world!',
            choices: ['Next'],
            extensions: [{ type: chsRecord.TrialRecordExtension }], // add this line
        };

Here's what the whole experiment looks like now:

.. code:: javascript

    const jsPsych = initJsPsych({
        extensions: [{ type: chsRecord.TrialRecordExtension }]
    });

    const video_config = { type: chsRecord.VideoConfigPlugin };

    const video_consent = {
        type: chsRecord.VideoConsentPlugin,
        PIName: "Jane Smith",
        institution: "Science University",
        PIContact: "Jane Smith at 123 456 7890",
        payment: "After you finish the study, we will email you a $5 BabyStore gift card within approximately three days. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
        procedures: "Your child will be shown pictures of lots of different cats, along with noises that cats make like meowing and purring. We are interested in which pictures and sounds make your child smile. We will ask you (the parent) to turn around to avoid influencing your child's responses.",
        purpose: "Why do babies love cats? This study will help us find out whether babies love cats because of their soft fur or their twitchy tails."
    };

    const hello_trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: 'Hello world!',
        choices: ['Next'],
        extensions: [{ type: chsRecord.TrialRecordExtension }],
    };

    const exit_survey = { type: chsSurvey.ExitSurveyPlugin };

    jsPsych.run([video_config, video_consent, hello_trial, exit_survey]);


Step 8: Learn more on the jsPsych website
-------------------------------------------------

Well done! You've learned how to create a jsPsych experiment on CHS! You can use this tutorial code as a starting point for your real experiment, and replace the hello world trial with some actual jsPsych experiment code. 

Check out the jsPsych "hello world" tutorial if you want to start from the basics, or the `RT task tutorial <https://www.jspsych.org/latest/tutorials/rt-task/>`__ to learn the more advanced jsPsych features. 

There are also lots of examples on the jsPsych plugin documentation pages (e.g. `html-button-response plugin <https://www.jspsych.org/latest/plugins/html-button-response/>`__, `survey plugin <https://www.jspsych.org/latest/plugins/survey/>`__), as well as in the `jsPsych repository "examples" folder <https://github.com/jspsych/jsPsych/tree/main/examples>`__.

Keep in mind that our internal CHS jsPsych experiment runner offers a limited set of jsPsych packages (core library and plugins/extensions) and package versions. In the future, we plan to expand this set. Please see our :ref:`CHS jsPsych limitations page <jspsych-limitations>` for information one what jsPsych packages are currently available.


Bonus: Translate your experiment into another language
-------------------------------------------------------

Did you know that CHS offers translation options for several languages? By default, all of the "hard-coded" text in our custom CHS jsPsych plugins is presented in English, but you can change this using the optional ``locale`` parameter. This parameter is available in both the `CHS Record <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/record/#parameters-available-in-all-plugins>`__ plugins/extensions and the `CHS Surveys <https://lookit.readthedocs.io/projects/chs-jspsych/en/latest/surveys/#parameters-available-in-all-plugins>`__ plugins.

Keep in mind that this ``locale`` parameter only affects the "hard-coded" text that is built in to our CHS plugins and extensions. It will not affect any of the text that you can already set with a parameter, e.g. the text that you provide for the video consent plugin. 

Also, all of the "official" jsPsych plugins/extensions already parameterize all of the text, which makes this translation parameter unnecessary.

Try converting your tutorial experiment into another langauge! Here's what our tutorial code looks like with a French translation:

.. code:: javascript

    const jsPsych = initJsPsych();

    const video_config = {
        type: chsRecord.VideoConfigPlugin,
        locale: "fr"
    };

    const video_consent = {
        type: chsRecord.VideoConsentPlugin,
        PIName: "Jane Smith",
        institution: "Science University",
        PIContact: "Jane Smith at 123 456 7890",
        payment: "After you finish the study, we will email you a $5 BabyStore gift card within approximately three days. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
        procedures: "Your child will be shown pictures of lots of different cats, along with noises that cats make like meowing and purring. We are interested in which pictures and sounds make your child smile. We will ask you (the parent) to turn around to avoid influencing your child's responses.",
        purpose: "Why do babies love cats? This study will help us find out whether babies love cats because of their soft fur or their twitchy tails.",
        locale: "fr"
    };

    const start = {
        type: chsRecord.StartRecordPlugin,
        locale: "fr"
    };

    const hello_trial = {
      type: jsPsychHtmlButtonResponse,
      stimulus: 'Hello world!',
      choices: ['Next']
    };

    const stop = {
        type: chsRecord.StopRecordPlugin,
        locale: "fr"
    };

    const exit_survey = {
        type: chsSurvey.ExitSurveyPlugin,
        locale: "fr"
    };

    jsPsych.run([video_config, video_consent, start, hello_trial, stop, exit_survey]);