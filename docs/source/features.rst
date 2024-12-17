.. _features:

Features
==================================

Here are some of the features and advantages researchers using CHS
benefit from:

Common resources and processes
-------------------------------

- A time-tested approach to **consenting families online** that has been
  approved by review boards at 50+ institutions.

  .. image:: _static/img/wiki/consent_screenshot.png
     :alt: participant consent view screenshot

- A **standard family interface** that minimizes friction when
  participating in studies from a variety of research groups.

- Access to a **shared userbase** of families with young children.
  Stored child and demographic data become available to you when a child
  participates in your study.

Community and documentation
----------------------------

- Active research **user community** and responsive **technical support**.

- 100% **open source**, forever. That means all of the source code that CHS uses
  is publicly available, and you are free to extend and use it for your
  own purposes.

- **Free** to use.

- Extensive and actively maintained **documentation** (you're looking at it!),
  including a step-by-step tutorial to get started.

- :ref:`Community review and feedback <study_approval>`
  on studies prior to data collection, to improve data quality and
  ensure a high standard of family-friendly design that benefits all
  users.
  
Study management tools designed for developmental researchers
----------------------------------------------------------------

- Built-in **consent video management**: review consent videos in the
  web browser and confirm that the parent provided informed consent
  to participate. Information about this confirmation is stored on
  the CHS server and only data from sessions with confirmed
  consent are available for viewing or download.

  .. image:: _static/img/wiki/consent_manager.png
     :alt: consent manager screenshot

- Convenient **data downloads**, thoughtfully designed to protect
  participant data while maximizing potential for reuse and sharing.

  -  Data dictionaries are provided for all CSV downloads to make it
     easy to share anonymized raw data upon publication.
  -  Collect **video sharing preferences** in a standard format
  -  Data are only available once consent is confirmed!

  .. image:: _static/img/wiki/all_responses.png
     :alt: all responses view screenshot

- Set :ref:`study eligibility criteria <study_eligibility_criteria>`
  based on age, gestational age, gender, languages spoken, and other
  characteristics.

- **Contact participants** using the :ref:`CHS messaging system <contacting_participants>` to invite them to another session of a
  longitudinal study, provide compensation, or ask clarifying
  questions. Message records for each study are accessible on CHS
  and you can download them for your records.

- For **longitudinal studies**, determine which tasks and stimuli to use
  based on prior session data and child age if needed. We have run
  studies with as many as 12 longitudinal sessions within a few
  months!

- **Start and stop** data collection at any time.

  .. image:: _static/img/tutorial/study_start.png
     :alt: study status change screenshot

- Provide :ref:`feedback <leaving_feedback>` to parents on study sessions.

- **Preview** exactly how your study will work ahead of starting data
  collection, including collecting sample data so you can set up
  analysis workflows ahead of time. You control which researchers
  can preview your study, and can share it by link with all CHS
  researchers to get feedback if you choose.

- Create your own lab on CHS to share studies among your lab
  members. **Easily collaborate** on studies with fine-grained
  permission roles for individual studies.

  .. image:: _static/img/wiki/editing_researcher_permissions.png
     :alt: researcher permission management screenshot

- :ref:`Unlisted (non-discoverable) studies <discoverability>`
  allow you to **invite only specific families** (e.g., in-lab
  participants or members of a registry) to participate based on a
  unique study link.

- Lookit studies are deployed in their **own containers**, using a snapshot of
  the Lookit experiment runner codebase. Updates to the code never affect
  how your existing study works unless you choose to update!
  
An experiment runner custom-designed for developmental paradigms
-----------------------------------------------------------------

(Although we also support the jsPsych experiment runner, and we're interested in supporting other experiment building systems you may be familiar with!)

- Use a growing library of `built-in
  components <https://lookit.readthedocs.io/projects/frameplayer/>`__
  for common developmental measures and pages - e.g., looking time
  and preferential looking trials, change detection trials,
  parent-controlled observation videos, surveys, video consent and
  assent

- :ref:`Specify your protocol <study_protocol>`
  using a readable JSON text format

  .. image:: _static/img/wiki/json_editor.png
     :alt: JSON editor screenshot

- Flexibly **collect video** during studies, as well as event timing
  data relative to the video stream. Researchers have coded gaze measures (looking time,
  preferential looking) as well as verbal responses and parent
  interaction from webcam video.

  .. image:: _static/img/wiki/download_videos.png
     :alt: video download screenshot

- :ref:`Randomize condition assignment and counterbalancing <condition_assignment>`,
  shuffle trial or task order, personalize text or stimuli based on
  child characteristics, add conditional logic, and more.
  
- `Extendable for your custom games and
  measures <https://lookit.readthedocs.io/en/develop/frame-dev.html>`__;
  just fork the repo on GitHub, add your own frames, and tell Lookit
  to use your version of the code to run your study

Limitations
-----------------

CHS and Lookit won’t be the right approach for all online developmental
research! Here are some cases where other tools will likely be a better
fit:

-  Medical research conducted by HIPAA-covered entities or individuals. CHS is not
   yet HIPAA compliant. (Note that HIPAA applies based on the status of
   the researcher/healthcare provider - not just on the type of information collected.
   Academic researchers can generally collect health information without
   being covered by HIPAA, and more than one hospital-based research labs have successfully negotiated data agreements allowing them to use CHS for some types of studies.)

-  Short one-off survey studies where you want to minimize time required
   to participate, and even asking families to create a login would be
   excessive

-  Studies that pose appreciable risks or harm to participants or the
   world (e.g., you'd like to try teaching children about "the
   controversy" regarding climate change)
