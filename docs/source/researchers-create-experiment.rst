Protocol specification
===================================

.. _JSON Overview:

Preliminaries: JSON format
---------------------------

Researchers specify the protocol for a Lookit study by providing a JSON
(JavaScript Object Notation) object on the Experimenter interface, which
is interpreted according to a JSON Schema (http://json-schema.org/)
designed for Lookit studies. A `JSON
schema <http://json-schema.org/examples.html>`__ describes a class of
JSON objects, indicating what type of data to expect and require.

If you are unfamiliar with the JSON format, you may want to spend a
couple minutes reading the introduction here: http://www.json.org/.

No programming is required to design a study: JSON is a simple,
human-readable text format for describing data (see
http://www.json.org/). A JSON object is an unordered set of key – value
pairs, with the following rules

- The object itself is enclosed in curly braces.
- Keys are unique strings enclosed in double quotes.
- A key and value are separated by a colon.
- Key-value pairs are separated by commas.

A JSON value can be any of the following: a string (enclosed in double
quotes), a number, a JSON object (as described above), an array (an
ordered list of JSON values, separated by commas and enclosed by square
brackets), true, false, or null. There are no requirements for specific
formatting of a JSON document (any whitespace not part of a string is
ignored). Here is an example JSON object to illustrate these principles:

.. code:: json

   {
       "name": "Jane",
       "age": 43,
       "favoritefoods": [
           "eggplant",
           "apple",
           "lima beans"
       ],
       "allergies": {
           "peanut": "mild",
           "shellfish": "severe"
       }
   }

The keys are the strings ``name``, ``age``, ``favoritefoods``, and
``allergies``. Favorite foods are stored as an array, or ordered list;
allergies are stored as a JSON object mapping food names to severity of
reaction. The same object could also be written as follows, in a
different order and with none of the formatting:
\`\ ``{"age": 43, "allergies": {"peanut": "mild", "shellfish": "severe"}, "name": "Jane", "favoritefoods": ["eggplant", "apple", lima beans"]}``

A helpful resource to check your JSON Schema for simple errors like
missing or extra commas, unmatched braces, etc. is
`jsonlint <http://jsonlint.com/>`_.

Experiment structure
--------------------

To define what actually happens in your study, click 'Edit study' from your study detail
page, and scroll down to the 'Build study - add JSON' field:

.. image:: _static/img/edit_json.png
    :alt: Build study field on study edit page

Click on this field to bring up the experiment editor view.  Here is where you 
define the structure of your experiment using a JSON document.

Studies on Lookit are broken into a set of fundamental units called
**frames**, which can also be thought of as “pages” of the study. A
single experimental trial (e.g. looking time measurement) would
generally be one frame, as are the video consent procedure and exit survey. 
Your JSON must have two keys: ``frames`` and
``sequence``. The ``frames`` value defines the frames used in this
study: it must be a JSON object mapping frame nicknames (any unique
strings chosen by the researcher) to frame objects (defined next). The
``sequence`` value must be an ordered list of the frames to use in this
study; values in this list must be frame nicknames from the “frames”
value. 

Here is the JSON for a very minimal Lookit study:

.. code:: json

   {
       "frames": {
           "my-consent-frame": {
               "kind": "exp-video-consent",
               "prompt": "I agree to participate",
               "blocks": [
                   {
                       "title": "About the study",
                       "text": "This isn’t a real study."
                   }
               ]
           },
           "my-exit-survey": {
               "kind": "exp-lookit-exit-survey",
               "debriefing": {
                    "title": "Thank you!",
                    "text": "You participated."
               }
           }
       },
       "sequence": [
           "my-consent-frame",
           "my-exit-survey"
       ]
   }

This JSON specifies a Lookit study with two frames, consent and an exit
survey. Note that the frame nicknames ``my-consent-frame`` and
``my-exit-survey`` that are defined in ``frames`` are also used in the
``sequence``. Frames may be specified but not used in ``sequence``.
Here’s the object associated with the ``my-exit-survey`` frame:

.. code:: json

   {
               "kind": "exp-lookit-exit-survey",
               "debriefing": {
                    "title": "Thank you!",
                    "text": "You participated."
               }
    }

Within each frame object, a ``kind`` must be specified. This determines
the frame type that will be used. Additional data may be included in the
frame object to customize the behavior of the frame, for instance to
specify instruction text or the stimuli to use for a test trial. The
keys that may (or must) be included in a frame object are determined by
the frame type; each frame definition includes a JSON Schema describing
the expected data to be passed. Multiple frames of the same kind may be
included in a study – for instance, test trials using different stimuli.

The separation of frame definitions and sequence allows researchers to
easily and flexibly edit and test study protocols – for instance, the
order of frames may be altered or a particular frame removed for testing
purposes without altering any frame definitions.


Developing your study: how to try it out as you go
---------------------------------------------------

When you first create your study, you'll need to click 'Build preview runner' on the study edit page and wait 5-10 minutes for your own personal study previewer to be created. This will "freeze" the code used for your study so that updates to the Lookit experiment runner won't affect how your study works. (You can always update if you want to - see `Updating the frameplayer code <researchers-update-code>`_). You do not need to build the preview runner again unless you want to update the code it uses.

Once you've built a preview runner, you can click 'See preview' after saving your study protocol and you will be taken to a preview version of your study so that you can see what it looks like to a participant! As you write the protocol configuration for your study, you can click 'See preview' again or just refresh the preview window to see how the changes look. 

If something isn't working as expected, you can try opening up the Javascript console in your web browser (Chrome: three vertical dots -> More tools -> Developer tools; Firefox: hamburger menu -> Web Developer -> Web Console) to see if there is an error message that makes sense - e.g., a frame type that isn't defined, or an attempt to load an image that doesn't exist.

As you work on a particular frame like a survey, you probably don't want to click through every bit of your study to get to it each time you make a change! You can put the frame of interest at the very start of your study by inserting it at the very start of the 'sequence' you've defined in your protocol. Then when you're satisfied with that frame, just put it back in order. 


Finding and using specific frames
---------------------------------

For the most current documentation of individual frames available to
use, please see `the frame documentation <https://lookit.github.io/ember-lookit-frameplayer/>`_.

For each frame, you will find an **example** of using it in a JSON
schema; documentation of the **properties** which can be defined in the
schema; and, under Methods / serializeContent, a description of the
**data** this frame records. Any frame-specific **events** that are
recorded and may be included in the eventTimings object sent with the
data are also described.


.. _typical_study_schema:

Example Lookit study outline
------------------------------------------------------------

A typical Lookit study might contain the following frame types:

1.  `exp-video-config <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-video-config.html>`_ - This is a standard frame type that almost everyone should just stick at the very start of their study. It requires no customization; we'll maintain troubleshooting directions everyone can share.
2.  `exp-lookit-video-consent <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-lookit-video-consent.html>`_ - A video consent frame. Your study needs to use this frame and it should come right after video configuration, before getting into the rest of the study. You need to specify some text fields to use this, regarding study-specific procedures, compensation, etc. These will be inserted into the consent document. If you need to show your IRB exactly what your consent document will look like, enter your text snippets, preview your study, and copy the document (or use the download button to get a PDF). 
3.  `exp-lookit-text <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-lookit-text.html>`_ Now we're into optional frames that will vary by study. Most existing studies have started off with a text 'overview' of the study using a frame like this. The shorter this can be, the better - it's the equivalent of "okay, we're ready to get started, we're going to do X, Y, Z!" in the lab. Writing this text, and any instructions, tends to be more time-consuming than researchers expect: in contrast to an in-lab study, you can't easily tune what you say to the individual parent and answer just the questions they bring up. And you don't want to overwhelm them with a wall of text while they try to hold a squirmy baby! **We strongly recommend treating this as a serious writing/design exercise**, and going through a few rounds of 'play-testing' with colleagues/family to make sure everything is as clear and concise as possible. 
4.  `exp-lookit-preview-explanation <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-lookit-preview-explanation.html>`_ If you are showing children images/videos and you are going to ask the parents **not** to look at those stimuli, we strongly advise that you provide parents an opportunity to preview all of the stimuli that might be shown so they can decide if they're okay with that. This is both a reasonable courtesy (who knows what unusual phobia a child has, or what image you think is totally innocuous but turns out to offend a particular family for an unanticipated reason) and practical for data quality (parents will be less inclined to peek if they know roughly what's going on). If you want to show a preview, you'll use an "explanation" frame like this offering the parent an option to preview stimuli, followed immediately by...
5.  `exp-video-preview <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-video-preview.html>`_ - the actual video preview frame where you specify a list of videos/images and their captions. 
6.  `exp-lookit-survey <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-lookit-survey.html>`_ Perhaps you want to collect some information (here or later on) from the parent that isn't included in the child or demographic data you'll have automatic access to - how much of which languages they speak in the home, motor milestones, whether their child likes Kermit or Oscar better, etc. You can use a survey frame to do that!
7.  `exp-video-config-quality <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-video-config-quality.html>`_ Once you're almost ready to start your actual 'test' procedures, you may want to guide the parent through webcam setup optimization, especially if you need the parent and child in a particular position. We provide some default instructions intended for preferential looking but would recommend making your own images/instructions if you can - ours aren't great.
8.  `exp-lookit-instructions <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-lookit-instructions.html>`_ Instead or in addition, you may want a frame like this to give some final instructions to the parent before your 'test' procedures start! You can show text, videos, audio, show the user's webcam, etc. Make sure you have indicated here or earlier that the family is free to leave at any point and how they can do that. (Ctrl-X, F1, or closing the tab/window but then staying on the page will all bring up a "really exit?" dialog - you don't need to note all methods.) 
9.  [Study-specific frames, e.g. 
    exp-lookit-story-page, exp-lookit-preferential-looking,
    exp-lookit-dialogue-page; generally, a sequence of these frames
    would be put together with a randomizer]
    
.. _debriefing-info:

10. `exp-lookit-exit-survey <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-lookit-exit-survey.html>`_ This is a required frame and should be the last thing in your study. This is where participants will select a privacy level for their video and indicate whether data can be shared on Databrary. (If you don't have IRB/institutional approval to share on Databrary yet, it's still fine to ask this; worst case you don't share data you had permission to share. Best case it'll smooth the process of asking your IRB retroactively if you want to!) Your participants will also have the option to withdraw video beyond the consent video entirely - this is rare (<1 percent of responses). These video settings are provided at the end, rather than the start, of the study so that parents already know roughly what happened and can better judge how comfortable they are with the video being shared. (E.g., "did my child pick his nose the whole time?")

    The 'debriefing' field of this frame is **very important**! This is a chance to explain the purpose of your study and how the family helped; at this point it's more obvious to the participant that skimming the info is fine if they're not super-interested, so you can elaborate in ways you might have avoided ahead of time in the interest of keeping instructions short. You may want to mention the various conditions kids were assigned to if you didn't before, and try to head off any concerns parents might have about how their child 'did' on the study, especially if there are 'correct' answers that will have been obvious to a parent. It's great if you can link people to a layperson-accessible article on a related topic - e.g., media coverage of one of your previous studies in this research program, a talk on Youtube, a parenting resource. 
    
    If you are compensating participants, restate what the compensation is (and any conditions), and let them know when to expect their payment! E.g.: "To thank you for your participation, we'll be emailing you a $4 Amazon gift card - this should arrive in your inbox within the next week after we confirm your consent video and check that your child is in the age range for this study. (If you don't hear from us by then, feel free to reach out!) If you participate again with another child in the age range, you'll receive one gift card per child."


Recording webcam video
-----------------------

Some frames include functionality to record video from the participant's webcam during some or all of the frame. This will be described in the frame's documentation, including any parameters you can set to turn on/off or otherwise change the behavior of the recording. Recording may start/stop automatically in the background, or the participant may click to start and stop recording or even immediately view their recording. For test trials, the webcam is generally not displayed to the participant while recording, as it would be more interesting than almost all stimuli we could create. 

You also have the option to start or stop a multi-frame or 'session-level' recording on **any** frame, by using the `startSessionRecording <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-frame-base.html#property_startSessionRecording>`_  and `endSessionRecording <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-frame-base.html#property_endSessionRecording>`_ parameters. The recording will start at the beginning of the frame with startSessionRecording set to true, and end at the end of the frame with endSessionRecording set to true. In between, recording will continue, and all events captured will include the name of the video and the approximate time relative to the start of that video.

Frame groups
-----------------

Sometimes it may be convenient to group several frames together. To do this, set the frame ``"kind"`` to ``"group"``. You will also need to provide a ``"frameList"`` which is a list of frames that go in this group. You can optionally provide a ``"commonFrameProperties"`` object which provides default parameter-value pairs to add to each frame in the list (any parameters additionally defined in the ``frameList`` will take precedence). As with other frames, ``"parameters"`` can be defined on the frame group to allow substitution of values. 

Here is an example of a frame group that just contains two text frames:

.. code:: json

    "testFrameGroup": {
        "kind": "group",
        "frameList": [
            {
                "id": "first-test-trial",
                "blocks": [
                    {
                        text: "Hello and welcome to the study"
                    }
                ]
            },
            {
                "id": "second-test-trial",
                "blocks": [
                    {
                        text: "Some more info"
                    }
                ]
            }
        ],
        "commonFrameProperties": {
            "kind":  "exp-lookit-text"
        }
    }


.. _Frame parameters:

Defining frame parameters to reuse or randomize values
-------------------------------------------------------

Rather than inserting actual values for frame properties such as stimulus image locations, you may want sometimes want to use a variable the way you would in a programming language - for instance, so that you can show the same cat picture throughout a group of frames, without having to replace it in ten separate places if you decide to use a different one.
You can accomplish this (and more, including selecting randomly from or cycling through lists of values) by setting the ``"parameters"`` property on any frame (including frame groups and randomizers). For details, see the `exp-frame-base documentation <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-frame-base.html#property_parameters>`_.

Case study: randomizing the order of options in a survey
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Suppose you're including a survey where you ask participants to record whether their child performed a certain task, and you want to present the options in a random order to avoid systematically biasing the results towards either option. You start with a survey frame like this (see the frame docs for more information about this frame):

.. code:: json

    "example-survey": {
        "kind": "exp-lookit-survey",
        "formSchema": {
            "schema": {
                "type": "object",
                "title": "And now, a thrilling survey!",
                "properties": {
                    "didit": {
                        "enum": ["yes", "no"],
                        "type": "string",
                        "title": "Did your child do the thing?",
                        "default": ""
                    }
                }
            },
            "options": {
                "fields": {
                    "didit": {
                        "type": "radio",
                        "validator": "required-field"
                    }
                }
            }
        }
    },

To randomize the options, we'll need to make a few small changes. First, add ``"sort": false`` to the options for your ``didit`` field, so that AlpacaJS doesn't automatically sort the options alphabetically. 

Next, you want the ``enum`` list for ``didit`` to actually be in random order. To achieve that, you can add a property like ``DIDIT_OPTIONS`` as a frame property, and then specify that the value of ``enum`` should be a random permutation of that list, like this:

.. code:: json

    "example-survey": {
        "kind": "exp-lookit-survey",
        "formSchema": {
            "schema": {
                "type": "object",
                "title": "And now, a thrilling survey!",
                "properties": {
                    "didit": {
                        "enum": "DIDIT_OPTIONS#PERM",
                        "type": "string",
                        "title": "Did your child do the thing?",
                        "default": ""
                    }
                }
            },
            "options": {
                "fields": {
                    "didit": {
                        "sort": false,
                        "type": "radio",
                        "validator": "required-field"
                    }
                }
            }
        },
        "parameters": {
            "DIDIT_OPTIONS": ["yes", "no"]
        }
    },
    