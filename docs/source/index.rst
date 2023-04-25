Welcome to Lookit's documentation!
==========================================

Here you will find detailed information about how to use Lookit to conduct developmental research online, as well as how to contribute to the codebase.

If you're new to Lookit, check out the :ref:`Getting started <start_here>` guide. The best way to get up to speed on setting up your study is to work through the :ref:`tutorial<tutorial>`.

What is Lookit?
----------------
Lookit is an online platform for developmental research. Families can sign up or log in, provide some basic information about their children, and then take part in studies from a variety of labs when it's convenient for them.

There are current three main categories of study types on Lookit:

1. Internal studies, using the Lookit experiment builder. The Lookit experiment builder can be used to collect looking measures from preverbal children as well as verbal responses, pointing, etc. from older children. These studies have no videoconferencing or scheduling: parents and children simply do activities in the web browser, and information about the session (e.g., survey responses, timing, condition assignment) along with webcam video of the session is sent to the Lookit server where it can be accessed by authorized researchers.

2. External, asynchronous (unscheduled, unmoderated) studies. Reseachers provide a link to a study hosted elsewhere (e.g. Qualtrics), and families see these studies advertised together with the Lookit-internal studies. Demographic information about children who participate in a specific study is made available to the corresponding researchers, and many experiment platforms make it possible to store an anonymous session ID, in order to match Lookit data to the external study data.

3. External, sychronous (scheduled, moderated) studies. Researchers provide a link to a scheduling system, and arrange a time to meet a family for a session over video chat. Families can see which studies are scheduled vs. unscheduled, and researchers can access & link Lookit data in the same ways as for other external studies.

All study types use the Lookit platform to design, test, and manage studies, including study submission/posting, contacting participants and accessing participant data. For Lookit-internal studies, common tasks such as checking for informed verbal consent before accessing any data from a session are also built into the workflow.

Families may take part in studies from multiple labs over time. Having one central platform allows families to access many interesting studies for all the children in their family in one place, and researchers benefit from economies of scale in software development and recruitment.


.. toctree::
   :maxdepth: 2
   :hidden:
   :glob:
   :caption: Overview

   Getting started guide <researchers-start-here>
   Features <features>
   About <vision-for-lookit>
   Progress updates <progress-updates>
   FAQ <faq>
   other-learning-materials
   Publications <publications>

.. toctree::
   :maxdepth: 2
   :hidden:
   :glob:
   :caption: Using Lookit

   researchers-log-in
   researchers-manage-org
   researchers-manage-studies
   researchers-study-permissions

.. toctree::
   :maxdepth: 2
   :hidden:
   :glob:
   :caption: Creating your study

   researchers-set-study-fields
   researchers-create-experiment
   researchers-update-code
   researchers-prep-stimuli
   researchers-style-guide
   researchers-lag-issues

.. toctree::
   :maxdepth: 2
   :hidden:
   :glob:
   :caption: Reviewing your study

   community-study-approval-process
   community-study-review-basic-requirements
   community-study-review-checklists-self
   community-study-review-checklists-peer

.. toctree::
   :maxdepth: 2
   :hidden:
   :glob:
   :caption: Collecting data

   researchers-manage-consent
   researchers-experiment-data
   researchers-day-to-day-study-operation.md
   community-participant-recruitment.md
   researchers-use-api


.. toctree::
   :maxdepth: 3
   :hidden:
   :glob:
   :caption: Tutorial

   tutorial-access
   tutorial-contributing
   tutorial-first-study
   tutorial-second-study
   tutorial-protocol-exercises
   tutorial-manage-data
   tutorial-next-steps

.. toctree::
   :maxdepth: 2
   :hidden:
   :glob:
   :caption: Community and procedures

   community-involvement
   community-irb-and-legal-information

.. toctree::
   :maxdepth: 2
   :hidden:
   :glob:
   :caption: Contributing

   contribute-edit-docs
   contribute-github-issue
   contribute-architecture-overview
   frame-dev
   contributor-guidelines
   install-django-project
   install-ember-app
   implementation-django-notes
