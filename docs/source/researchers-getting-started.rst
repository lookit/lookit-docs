##################################
Getting started guide
##################################


We are unfortunately not yet able to accommodate most requests to run studies on Lookit! We are focusing on development with the aim of making the platform as easily and broadly usable as possible. However, a limited number of collaborative studies from beta testers are taking place. Here's how to get started if you're working on one of those studies:

0. If you are preparing a new study to run on Lookit, you will first need to get an access agreement signed and start an IRB proposal as described `in the wiki <https://github.com/lookit/research-resources/wiki/IRB-and-legal-information>`_. 

1. Try out studies at https://staging-lookit.cos.io first as a participant to get a feel for what it's like to participate and what some of the standard/existing frames look like. That's the staging server; you won't be confusing anyone who's trying to collect real data.

2. Some background reading:

   - **Please make sure you have actually read the** `Terms of Use <https://lookit.mit.edu/termsofuse/>`_. There's a bit of legal boilerplate in there, but the bulk is meaningful content about precautions you need to take to protect participant privacy, restrictions on protocols that can be run on Lookit, and what data you (and Lookit) can use and publish. It's important that as the researcher using the platform you actually understand and agree to these terms. 
   - Skim through this portion of the documentation ('Using Lookit: for researchers').
   - Skim through `the wiki <https://github.com/lookit/research-resources/wiki>`_ just  so you know what information is available there.


3. Create an outline of how you'd like your study to work, so that we can check the necessary technical functionality exists (or implement things for you) and possibly make you a little mockup to start from (we'll discuss which!). The simplest way to do this is to provide a list of experiment frames, starting from `the sample list <https://lookit.readthedocs.io/en/develop/researchers-create-experiment.html#a-lookit-study-schema-general-principles-and-instructions>`_. Some pieces are fairly standard, like video configuration, consent, or surveys. Most studies, though, will have some sort of "test trials" or experimental procedures where you'll want to carefully think through and write out how things should work. 

   You can check `the existing frames <https://lookit.github.io/ember-lookit-frameplayer/modules/frames.html>`_ to see if you think you can just use those. If you're not sure, essentially you'll want to provide enough detail that someone could program your experiment. You may be surprised at how many details you need to think about when you don't have a human running the experiment! If you want to show images or video on the page, please make a diagram specifying how they are positioned and describing how they are scaled (or not!) depending on screen resolution. Remember that monitors come in different sizes **and shapes**. If you want to play audio or videos, note what triggers them to stop and start, whether they have to complete before something else can happen, etc.

   Describe any condition assignment and counterbalancing structure in enough detail that you would be happy to replicate the study if it were someone else's. If what should happen next in the experiment depends on participant responses, make sure you cover all the possible responses. 


4. Prepare the content of your study - this is the relatively non-technical (but surprisingly time-consuming) side!

   - `Create all of the stimuli you'll need <researchers-prep-stimuli.html>`_!
   - Write the text of your study description, prepare a thumbnail image, etc. following  `the descriptions of each item you'll need to prepare <researchers-set-study-fields.html>`_. 
   - Write the text of any study overview, instructions, and debriefing as described `here <researchers-create-experiment.html#a-lookit-study-schema-general-principles-and-instructions>`_.


5. Implement your study on the staging server: Once a mockup of your study is ready or we've verified that you should be able to implement it yourself, you'll set it up or fine-tune it on the Lookit staging server.

   - Follow `these instructions <researchers-using-platform.html#logging-in>`_ to get access and log on. Also ask us to get on the Lookit Slack channel for updates!
   - We'll give you access to a study called 'Example study' that you can play around with. Try participating in the original 'Example study' as a participant on the staging server, and check that you can see and approve your consent video in the Consent Manager.
   - Clone the example study so you have your own copy you can edit. Change its title to something like 'Smith getting started study.' Build preview dependencies for your study. 
   - Try previewing your study to see what it's like. Make a minor change to the study JSON and preview again to see that you see it.
   - Edit the study to enter your own study's description, thumbnail image, etc. following `these descriptions  <researchers-using-platform.html#creating-a-study>`_.
   - Now that you have a rough idea of how this all works, read `Building your experiment <researchers-create-experiment.html#building-your-experiment>`_ in more detail (skim the section on randomizers until you're ready to get into that). Add each frame of your planned study, following the `instructions here <researchers-create-experiment.html#developing-your-study-how-to-try-it-out-as-you-go>`_ to try it out as you go.
   
   
6. When everything is ready to go, we'll go over day-to-day operation of the study, transfer your study over to the production server, and you'll hit start!