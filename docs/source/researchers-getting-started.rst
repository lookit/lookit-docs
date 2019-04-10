##################################
Getting started guide
##################################


We are unfortunately not yet able to accommodate most requests to run studies on Lookit! We are focusing on development with the aim of making the platform as easily and broadly usable as possible. However, a limited number of collaborative studies from beta testers are taking place.

If you are preparing a new study to run on Lookit, you will first need to make some IRB and legal arrangements as described here: https://github.com/lookit/research-resources/wiki/IRB-and-legal-information. Then there are three main things to do, which can proceed in parallel:

1. Some reading: 

   - Please make sure you have *actually read* the `Terms of Use <https://lookit.mit.edu/termsofuse/>`_.
   - Skim through this portion of the documentation ('Using Lookit: for researchers').
   - Skim through `the wiki <https://github.com/lookit/research-resources/wiki>`_ just so you know what information is available there.

2. Preparing your study - the non-technical (but surprisingly time-consuming) side!

   - Follow the directions in Step 2 at https://github.com/lookit/research-resources/wiki/Preparing-a-study-(beta-testers) as if we are preparing a mockup study for you - even if you will be implementing the study yourself.
   - `Create all of the stimuli you'll need <researchers-prep-stimuli.html>`_!
   - Write the text of your study description, prepare a thumbnail image, etc. following the descriptions of each item you'll need to prepare `here <researchers-using-platform.html#creating-a-study>`_. 
   - Write the text of any study overview, instructions, and debriefing as described `here <researchers-create-experiment.html#a-lookit-study-schema-general-principles-and-instructions>`_.

3. Implement your study on the staging server

   - Follow `these instructions <researchers-using-platform.html#logging-in>`_ to get access and log on
   - We'll give you access to a study called 'Example study' that you can play around with. Try participating in the original 'Example study' as a participant on the staging server, and check that you can see and approve your consent video in the Consent Manager.
   - Clone the example study so you have your own copy you can edit. Change its title to something like 'Smith getting started study.' Build preview dependencies for your study. 
   - Try previewing your study to see what it's like. Make a minor change to the study JSON and preview again to see that you see it.
   - Edit the study to enter your own study's description, thumbnail image, etc. following `these descriptions  <researchers-using-platform.html#creating-a-study>`_.
   - Now that you have a rough idea of how this all works, read `Building your experiment <researchers-create-experiment.html#building-your-experiment>`_ in more detail (skim the section on randomizers until you're ready to get into that). Add each frame of your planned study, following the `instructions here <researchers-create-experiment.html#developing-your-study-how-to-try-it-out-as-you-go>`_ to try it out as you go.