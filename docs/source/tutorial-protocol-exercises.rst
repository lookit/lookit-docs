##########################################
5. Study protocol specification: exercises
##########################################

Now that you've walked through the process of creating your own studies, it's time to try out what you've learned! At the end of this section, you will:

* be confident in your ability to independently set up and troubleshoot your study
* be comfortable finding information about advanced features to answer the questions "How do I do X" or "Is it possible to do X"
* have a feel for the challenges to expect in writing your instructions and preparing your stimuli

Remember, feel free to reach out in the Slack workspace or attend office hours if you have any trouble with these exercises.

1. Add another test trial
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The intermodal matching study ("Look and Listen") currently includes four test trials; in each, two women are seen speaking, but only the audio from one speech stream is included. You would like to include a silent test trial as well, where the two women are seen speaking but there is no sound, so that you can measure children's baseline visual preferences for the two speakers. (You plan to use this in some exploratory work, looking at whether it might be possible to adjust for individual baseline preferences for a more sensitive measurement of audio-based shifts in attention.)

Add a silent test trial before the other four test trials. 

* You can use the video at https://www.mit.edu/~kimscott/intermodal/mp4/silent.mp4 and https://www.mit.edu/~kimscott/intermodal/webm/silent.webm. Use the same silent video for both counterbalancing conditions.
* Put the calibration segment at the start of this trial (instead of keeping it at the start of the original first trial). 
* Make sure the intro audio makes sense - this is now trial 1 and should include the "getting started" audio. There are now a total of five trials; you can use the "video_05_HO" audio files for the last trial intro. 
* Adjust the overview and instructions to reflect the new protocol. 

.. admonition:: Note

   Watch out - this is probably going to be confusing to parents, because they'll turn around and the video will "start" but they won't hear anything! Try to make sure they'll expect the first video to be silent.
   
2. Split an instructions page into more manageable pieces
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `"final-instructions"` frame of your intermodal matching study is quite a bit for a participant to read for the first time while holding a baby. 

First, pare it down as much as you can. Then, split it across 3-4 frames (each with type `"exp-lookit-instructions"`). Make sure the "next" button on each frame says something appropriate (they shouldn't all say "start the videos"). 

.. admonition:: Extra credit

   Do you think it's easier or harder to understand the instructions this way? What else might you do to make the study more family-friendly? Share your thoughts on the #researchers Slack channel.

3. Add another experimental condition
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In your first study ("My Awesome Tutorial Study"), children hear a story containing statistical evidence about a psychosomatic tummyache. At the end of the story, they're asked why Bunny's tummy hurts - because of eating a sandwich, or because of feeling scared? We made sure to counterbalance the order of those options, but if children do answer that the tummyache is because of feeling scared, we won't know whether they used the evidence in the story or just thought that was more likely all along.

Add a baseline condition, where instead of the whole story, children will only hear about the last day. Right now you have a sequence of test trials with the following images (and audio): `bunny01, bunny02, bunny11, bunny12, bunny13, bunny14, bunny15, bunny16, QUESTION_IMAGE/QUESTION_AUDIO, bunnyend01`.

First, take a look at the randomizers listed `here <https://lookit.github.io/ember-lookit-frameplayer/modules/randomizers.html>`_ and think about how you might set this up.

.. raw:: html
  
    <details style="margin-left:50px;">
        <summary>Hint 1</summary>
        <p>Find the "storybook-causal" section of your study JSON. Inside you have a "frameList" which currently lists each storybook page. Try inserting a single "select" randomizer frame instead of the individual elements of that list - i.e., make a frame with kind `choice` and sampler `select`. This select randomizer can have its own "frameOptions" (like your original "frameList") and "commonFrameProperties". Use the documentation to learn how to tell it to use a particular subset of the frames in "frameOptions".</p>
    </details>
    
    <details style="margin-left:50px;">
        <summary>Hint 2</summary>
        <p>Set "whichFrames" in your inner "select" randomizer to something like "STORY_PAGE_LIST". Then add "STORY_PAGE_LIST" as a key in each of the "parameterSets" in your outer "random-parameter-set" randomizer. To do ALL the frames in order, you can use the value -1 for whichFrames (see the `section on this parameter  <https://lookit.github.io/ember-lookit-frameplayer/classes/Select.html#property_whichFrames>`_). To do just the first two frames in "frameOptions", you would use [0, 1].</p>
    </details>
    
    <details style="margin-left:50px;">
        <summary>Hint 3</summary>
        <p>You still want to counterbalance the order of the options in the test question, so you have a 2 x 2 design - bunnya01/bunnyb01 x baseline/causal. You can do this by making four parameterSets in your random-parameter-set randomizer.</p>
    </details>

4. Make the study debriefing condition-dependent
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now that there are two pretty different conditions in your causal inference study, you may want to give personalized debriefing information to families based on which condition they were in! 

Move the "exit-survey" into the "select" randomizer you're using for the storybook pages, and change the debriefing text to say "THIS WAS THE CAUSAL EVIDENCE CONDITION." Add a second version to the list of frameOptions with the debriefing text "THIS WAS THE BASELINE CONDITION." (Please note that this would NOT actually be good debriefing text!) Edit the frames used in each condition so that participants will see only the correct exit-survey for their condition. Try it out and make sure everything lines up. Make sure to remove the original "exit-survey" frame from the "sequence" in your study JSON!


5. Troubleshoot a frame that doesn't work as expected
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In either of your studies, try adding the following frame to the "frames" in your study protocol, and add `"video-assent"` right after the consent frame in your `"sequence"`. This frame is intended to collect child assent (in addition to parental consent in the consent frame) for older children. There should be three pages to look through, but there are some errors in the frame specification and it will not work as written. 

Preview the study to see what's wrong and edit the configuration for this frame until it works as intended. You will need to reference the documentation for the exp-lookit-video-assent frame.

.. admonition:: Reminder

   You can use the Javascript console in your web browser to look for error messages that might be relevant!

.. code:: json

    "video-assent": {
        "kind": "exp-lookit-video-assent",
        "pages": [
            {
                "text": "In this study, you'll see a lot of pictures of shapes.",
                "audio": "sample_01",
                "imgSrc": "square.png",
                "altText": "Some shapes"
            },
            {
                "audio": "We will have some questions for you about what shapes you see.",
                "imgSrc": "tall.png"
            },
            {
                "showWebcam": true,
                "textBlocks": [
                    {
                        "text": "During the study, your webcam will record a video of you. We will watch this video later so we can write down your answers to the questions."
                    }
                ]
            }
        ],
        "baseDir": "https://www.mit.edu/~kimscott/placeholderstimuli/",
        "videoTypes": [
            "webm",
            "mp4"
        ],
        "minimumAgeToAssent": 7,
        "participationQuestion": "Do you want to participate in this study?"
    }
   
6. Find guidance on an advanced feature
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You'd like to include a training section where parents are asked a multiple-choice question about how the experiment works before beginning, and if they get it wrong, they're directed to an additional video overview before getting started. Find the section of the documentation you would refer to for details about how to do this.

7. Draft a parent-facing study description
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Write a :ref:`purpose` field for a Lookit study. The study can be:

* Something you're planning to run on Lookit
* Something you've run in your lab before, or a favorite study from another lab that you're familiar with
* Or if you don't have anything in mind: try writing a purpose field for a study about `infant-directed speech preference <https://psyarxiv.com/s98ab>`_.

Post your draft description of the study purpose in the Lookit Slack workspace (#researchers) for feedback (yes, really!). 

Look for other tutorial participants' drafts to give feedback on too! As you read, consider:

* Is it clear what the research question is?
* If the lab ran a follow-up study, would the same description probably cover it?
* Is it clear why the research question matters? ("X has not been studied before" is not a reason something matters.)
