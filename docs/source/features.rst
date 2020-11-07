Features
~~~~~~~~~~~~~~~~~~~~~~~~~~~


Here are some of the features and advantages researchers using Lookit
benefit from:

-  Common resources and processes:

   -  A time-tested approach to consenting families online that has been
      approved by review boards at 10+ institutions.

      .. image:: _static/img/wiki/consent_screenshot.png
         :alt: participant consent view screenshot

   -  A common interface for participants that minimizes friction when
      participating in studies from a variety of research groups.

   -  Access to a shared userbase of families with young children.
      Families are drawn by the variety of studies available, and
      recruitment for other studies benefits yours as well. Stored child
      and demographic data become available to you when a child
      participates in your study.

-  Community and documentation:

   -  Active research user community and responsive technical support.

   -  100% open source, forever: all of the source code that Lookit uses
      is publicly available; you are free to extend and use it for your
      own purposes.

   -  Free to use.

   -  Extensive and actively maintained documentation for the
      `platform <https://lookit.readthedocs.io/en/develop/>`__ and
      `experiment
      runner <https://lookit.readthedocs.io/projects/frameplayer/>`__,
      including a step-by-step tutorial to get started.

   -  :ref:`Community review and feedback <study_approval>`
      on studies prior to data collection, to improve data quality and
      ensure a high standard of family-friendly design that benefits all
      users.

-  Secure data transmission and storage. Lookit takes security
   seriously; we’ve recently completed an outside security risk
   assessment and stay up to date on security patches as vulnerabilities
   are discovered in common libraries.

-  Study management tools designed specifically for developmental
   researchers:

   -  Built-in consent video management: review consent videos in the
      web browser and confirm that the parent provided informed consent
      to participate. Information about this confirmation is stored on
      the Lookit server and only data from sessions with confirmed
      consent are available for viewing or download.

      .. image:: _static/img/wiki/consent_manager.png
         :alt: consent manager screenshot

   -  Convenient data downloads, thoughtfully designed to protect
      participant data while maximizing potential for reuse and sharing.

      -  Data dictionaries are provided for all CSV downloads to make it
         easy to share anonymized raw data upon publication.
      -  Collect information in a standard format about what uses of
         video are ok with parents, and whether video can be shared on
         Databrary.
      -  Choose whether to download participant birthdates, exact ages,
         or (by default) rounded ages.
      -  Data from sessions where consent has not been confirmed, and
         video from sessions where the parent withdrew video, is
         automatically unavailable for viewing or download.

      .. image:: _static/img/wiki/all_responses.png
         :alt: all responses view screenshot

   -  Set :ref:`study eligibility criteria <study_eligibility_criteria>`
      based on age, gestational age, gender, languages spoken, and other
      characteristics.

   -  Contact participants to invite them to another session of a
      longitudinal study, provide compensation, or ask clarifying
      questions. Email records for each study are accessible on Lookit
      and you can download them for your records.

   -  For longitudinal studies, determine which tasks and stimuli to use
      based on prior session data and child age if needed. We have run
      studies with as many as 12 longitudinal sessions within a few
      months!

   -  Start and stop data collection at any time.

      .. image:: _static/img/wiki/study_start.png
         :alt: study status change screenshot

   -  Provide :ref:`feedback <leaving_feedback>` to parents on study sessions.

   -  Preview exactly how your study will work ahead of starting data
      collection, including collecting sample data so you can set up
      analysis workflows ahead of time. You control which researchers
      can preview your study, and can share it by link with all Lookit
      researchers to get feedback if you choose.

   -  Create your own lab on Lookit to share studies among your lab
      members. Easily collaborate on studies with fine-grained
      permission roles for individual studies.

      .. image:: _static/img/wiki/editing_researcher_permissions.png
         :alt: researcher permission management screenshot

   -  :ref:`Unlisted (non-discoverable) studies <discoverability>`
      allow you to invite only specific families (e.g., in-lab
      participants or members of a registry) to participate based on a
      unique study link.

   -  Studies are deployed in their own containers, using a snapshot of
      the experiment runner codebase. Updates to the code never affect
      how your existing study works unless you choose to update!

-  Experiment runner custom-designed to support developmental research
   designs (although we’re also interested in supporting other
   experiment building systems you may be familiar with!):

   -  Growing library of `built-in
      components <https://lookit.readthedocs.io/projects/frameplayer/>`__
      for common developmental measures and pages - e.g., looking time
      and preferential looking trials, change detection trials,
      parent-controlled observation videos, surveys, video consent and
      assent

   -  :ref:`Specify protocol <study_protocol>`
      using readable JSON text format, no programming required

      .. image:: _static/img/wiki/json_editor.png
         :alt: JSON editor screenshot

   -  `Extendable for your custom games and
      measures <https://lookit.readthedocs.io/en/develop/frame-dev.html>`__;
      just fork the repo on GitHub, add your own frames, and tell Lookit
      to use your version of the code to run your study

   -  Flexibly collect video during studies, as well as event timing
      data relative to the video stream. Video clips are associated with
      the study session and are available to download and view directly
      from Lookit. Researchers have coded gaze measures (looking time,
      preferential looking) as well as verbal responses and parent
      interaction from webcam video.

      .. image:: _static/img/wiki/download_videos.png
         :alt: video download screenshot

   -  :ref:`Randomize condition assignment and counterbalancing <condition_assignment>`,
      permute trial or task order, personalize text or stimuli based on
      child characteristics, add conditional logic, and more.

Limitations
===========

Lookit won’t be the right approach for all online developmental
research! Here are some cases where other tools will likely be a better
fit:

-  Interactive, synchronous studies where an experimenter talks with the
   family over audio or video chat, or where participants interact with
   each other. Lookit does not yet have these capabilities.

-  Medical research conducted by HIPAA-covered entities. Lookit is not
   yet HIPAA compliant. (Note that HIPAA applies based on the status of
   the researcher - not just on the type of information collected.
   Academic researchers can generally collect health information without
   being covered by HIPAA.)

-  Short one-off survey studies where you want to minimize time required
   to participate and even asking families to create a login would be
   excessive

-  Studies you have already implemented for adults and want to run with
   older children and teens as well. (You *could* run a study like this
   on Lookit, but if you already have a robust setup for collecting data
   from adults, it will probably be easier to stick with that!)

-  Studies that pose appreciable risks or harm to participants or the
   world (e.g., you’d like to try teaching children about “the
   controversy” regarding climate change, and see whether they’re more
   likely to be climate change deniers in a year)
