########################################
Building a real study from the ground up
########################################

Now that you've gotten your feet wet and are comfortable using Lookit's experimenter interface to modify your study JSON, it's time to take a closer look at how to build your own study. In this section, you'll build a functional infant study "from the ground up," adding frames one at a time. 

Introduction: intermodal matching study
---------------

Imagine you're looking to replicate the finding that infants can detect which moving face "goes with" a speech stream, an ability known as intermodal matching. In your study, babies will watch several short videos of two women's faces - one face on the left and one on the right. Both women are talking, but babies only hear the audio from one of them in each clip. (There are four trials, and who's talking is counterbalanced - babies either hear left, right, right, left audio or right, left, left, right audio.) You plan to code the video collected on Lookit for preferential looking - whether the child is looking to the left of the screen, right of the screen, or away. Because you are eventually hoping to develop a measure that can be used to detect individual differences linked to social development, you are also including a short survey on parenting beliefs.

.. admonition:: This is a real study that was run on Lookit!

   The study stimuli and protocol have been generously shared by Halie Olson and Rebecca Saxe for use as an example. Slight modifications have been made for teaching purposes.

Creating the study and filling out study fields
-----------------------------------------------

This time, instead of copying an existing study, we're going to create our own from scratch so that we see every field. Go to `<https://staging-lookit.cos.io/exp/studies/>`_ and click the green "Create Study" button at top right:

.. image:: _static/img/tutorial/create_study_button.png
    :alt: Create Study button
    
This will bring you to a screen with a bunch of fields to fill out:

.. image:: _static/img/tutorial/create_study.png
    :alt: Study creation view

In a separate tab, open up the documentation about these fields for fuller explanations of what each one should contain: :ref:`study_fields`. Below is the study-specific information you'll need to fill out each field.

Name
  Enter "Look and Listen" here - or another name for the study if you have a cute or catchy idea! 
  
Image
  You can download a screenshot of the stimuli to use `here <http://www.mit.edu/~kimscott/intermodal/img/intermodal_thumbnail.png>`_.

Short Description
  Here's an example description of what happens during this study - you can copy or edit it. "Your child will watch several short videos of two people saying nonsense syllables. The sound will match just one of the people. We want to see which face your baby chooses to look at!"

Purpose
  Here's a draft of a description of the purpose of the study, but it's very general - it could apply to a lot of related studies. Edit it so that it explains the specific question this study asks and why the answer matters - without getting too technical. "Babies can learn language by seeing, hearing, and feeling. We want to better understand how babies pay attention to what they see and hear when people are speaking to them."

Compensation
  Here's the actual compensation description that was used - you can copy it: "After you participate, we'll email you a $4 Amazon gift card as a thank-you. (One gift card per child; child must be in the age range for the study.)"

Exit URL
  After the study let's send families to their study history, where they can see their videos right away! Use "https://lookit.mit.edu/studies/history/"

Participant Eligibility Description
  "For babies ages 4-18 months"

Criteria expression
  This study focuses on children born at or near full term: require that the child was born at 37+ weeks gestation. (Refer to the documentation to see how, and to learn about what other types of eligibility criteria you can set up here!)

Minimum Age Cutoff
  3 months, 29 days (this equals 119 days, which is the youngest that a "4 month old" by the calendar can be. This avoids confusing parents who see a warning when trying to participate with their just-turned-four-month-old born in February)

Maximum Age Cutoff
  1 year, 7 months, 4 days (this is a generous cutoff, again to avoid confusion from parents of kids who aren't quite 19 months old yet)

Duration
  "5 minutes" (you can also test this )

Discoverable
  Check the box so that when you submit your study to post on the staging server, it will show up to participants on the Studies page

Researcher Contact Information
  Enter "<Your Name> (contact: <your email and/or phone number>)"

Build Study - Add JSON
  Leave this blank for now

Study type
  Choose the default and leave `last_known_player_sha` blank.

Click the green "Create study" button at the bottom of the form to save all your work! You've got all the study metadata set... now all that's left is to write your study protocol.

Adding each frame
-----------------

Now we're going to build out the study protocol JSON, one piece at a time. Here's the basic outline of this study. It follows a basic pattern you can also see described here: :ref:`typical_study_schema`.

1. A "setup" frame to guide the family through getting their webcam set up
2. A video consent frame where the parent makes a verbal statement of informed consent
3. An intro frame giving the parent an overview of what will happen during the study
4. A video preview explanation & video preview frame, giving parents the option to review stimuli ahead of time
5. Some instructions about what to do during the study
6. Test trials where babies will see videos that show two women talking (one on either side of the screen) but only the audio from one speaker
7. A short survey about parenting beliefs
8. A standard "exit survey" where parents select a video privacy level

Setup
~~~~~

We'll start with a standard setup frame called "exp-video-config". You can see a sample of what it looks like `here <https://lookit.github.io/ember-lookit-frameplayer/classes/Exp-video-config.html>`_. 

Underneath the screenshot, you'll see an example of defining this frame in your study JSON:

.. image:: _static/img/tutorial/exp_video_config.png
    :alt: Exp-video-config frame docs
    
Copy the definition of the "video-config" frame (`"video-config": { ... }`, as shown highlighted above), and open up your study's JSON editor. Paste this into the "frames" value, like this:

.. image:: _static/img/tutorial/video_config_added_to_frames.png
    :alt: Adding the video-config example to frames
    
You will need to delete the line breaks in the "troubleshootingIntro" value for this to be proper JSON. Edit the text as well, so it references your own lab and an appropriate contact method!

That defines a frame that's now available for us to use. In order to actually use it, add it to your "sequence" as well:

.. image:: _static/img/tutorial/video_config_added_to_sequence.png
    :alt: Adding the video-config example to sequence
    
.. admonition:: The key for your frame can be whatever you want

   There's nothing magical about the "video-config" key given to this frame - you can change it to whatever you want, as long as they key in `frames` matches what you call it in `sequence`. 
   
Close the editor, save your JSON, and preview your study. You should see the setup frame, looking just like the screenshot in the docs.

Consent
~~~~~~~

Now that your participants have their webcam set up, the very first thing you need to do - before starting any study procedures - is collect informed consent. Consent frames are treated somewhat specially: you will only see any data from participants who get through your consent page, and videos collected on the consent page will be available for you to review and confirm before you can access the remaining data from the corresponding sessions.

Unless you receive specific permission from Lookit, you'll be asked to use the standard video consent (and/or assent) frames to keep the experience for participants consistent.

This study is for babies, so we don't need to collect child assent, just parental consent. Go to the frame docs and select 'exp-lookit-video-consent' on the sidebar. Just like you did for the setup frame, copy the sample frame definition (`"video-consent": {...}`) and add it to your study JSON frames and sequence, like this:

.. image:: _static/img/tutorial/adding_video_consent.png
    :alt: Adding the video-consent example to sequence

Note that you will need to add commas between the previous and new items in both "frames" and "sequence", as circled above.

Save and preview again. Now when you click "Next" from the video config page, you'll see a consent page. The sample text is pretty silly, though! Change each of the following fields to more appropriate text for this study, substituting in your own information for the things shown in `<brackets like this>`. For more information on what each of these fields is, you can click on the property names in the frame documentation as shown below:

.. image:: _static/img/tutorial/frame_docs_properties.png
    :alt: Properties as displayed in frame docs

PIName
  "<Your Name>"
  
datause
  "We are primarily interested in your child's looking behavior. A research assistant will watch your video to measure the precise amount of time looking at the screen."
  
payment
  "You will be emailed a $4 Amazon gift card for participating in this study, no matter what your child does during the experiment, as long as your child is in the age range of our study and has not participated in our study in the past 30 days.",
            
purpose
  "The purpose of this study is to better understand how much infants at different ages prefer to look at talking faces that are synchronized with what they hear compared to talking faces that are not synchronized with what they hear.",
  
PIContact
  "<Your Name> at <your email> or <your phone number>",
            
procedures
  "For this study, your child will watch short videos (about 20 seconds long). For each video, there will be two faces on the screen that may be speaking nonsense syllables – something like “La mu ba.” The audio of the nonsense syllables matching only one of the two faces will be played. We are curious which face your baby prefers to look at – the one matching the audio or the one that doesn’t match the audio. We ask that you close your eyes or hold your baby over your shoulder during this experiment so that your behavior doesn’t influence where your baby looks. Before each video, you will hear a chime while an image moves on the screen to get your baby’s attention. You may then hear about 20 seconds of the nonsense syllables while the faces appear on the screen. The entire experiment should take less than 5 minutes. You may be asked to fill out a short survey at the end of the experiment. We do not anticipate any risks associated with this study."

template
  "consent_002",

institution
  "<your institution>"

gdpr
  false,
            
research_rights_statement
  "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact <your IRB information>."

Save your JSON and take another look. Congratulations! You've got the start of your study set up, with a valid consent form that lets the family record a statement of informed consent.

intro
~~~~~

(copy and paste from frame docs; put in frames & sequence; try; customize - for now remove first two to look at more easily)

preview
~~~~~~~

(provide template now; just have them add & sub in real stimuli)
    
instructions
~~~~~~~~~~~~

(provide template; have them insert appropriate instructions)
    
test trial
~~~~~~~~~~

(provide template w/ placeholders)
    
survey
~~~~~~

(provide template and have them insert questions and answers)
    
exit-survey
~~~~~~~~~~~

Set up stimuli for test trial
------------------------------
download files, put up somewhere following structure

Record pause/unpause stim and use (possibly)
--------------------------------------------


Add counterbalancing
--------------------

Using the documentation to learn about more advanced features
--------------------------------------------------------------------------------


Notes about communicating with parents
------------------------------------------------------

importance in online testing. Instructions, debriefing, overview.

Creating stimuli
--------------------
