.. _runner-releases:

#############################################
Lookit experiment runner updates
#############################################

The Lookit experiment runner is regularly updated in order to add new features and fix bugs. While you can find the details of all changes in the `experiment runner Github repository <https://github.com/lookit/ember-lookit-frameplayer/commits/master>`__, sometimes the changes don't have much impact on researchers, or the descriptions on Github are written from a software development perspective. For this reason, we've added this page to highlight any changes that might be of particular interest to researchers, and to explain the changes from the standpoint of the impact on researchers.

.. contents:: Notes on select releases:
   :depth: 1
   :local:
   :backlinks: none

----

Oct 4th, 2024: French and Japanese translations; video ID logging
------------------------------------------------------------------------

Commit SHA: afb2fda97f9325476da70e2bc0e4602816011c60

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/408

This latest version of the experiment runner contains the following changes to translation options:

- Adds a French (fr) translation option to the experiment runner. Thanks Balthazar Lauzon!
- Updates the Japanese (ja) translations. Thanks Sho Tsuji and Rhodri Cusack!

It also makes a few changes to the event logs in the data produced by an experiment:

- Adds the video file name (``videoId``) to the experiment data for any recording-releated events, and events that occur while recording is in progress (either trial or session recording).
- Renames the ``pipeId`` property that stores the video name to ``videoId``.

----

Jul 17, 2024: Fix webcam display in video-assent with no recording
--------------------------------------------------------------------

Commit SHA: c12289257140f2b3ca777701714785620721f7dc

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/399

This fixes a problem with the webcam display in ``video-assent`` that was introduced in the June 5th update (a5adee43e2f2498598369850dbc2d4ba1536ee6c). Specifically, the webcam display option (``showWebcam: true``) was not working when there was no recording during the trial (``recordLastPage`` and ``recordWholeProcedure`` are both ``false``). This update fixes that problem.

This update also modifies the ``video-assent`` frame to center the webcam feed in the "page" content.

----

Jun 20, 2024: Fix clipped recordings
-------------------------------------------------------------

Commit SHA: c12289257140f2b3ca777701714785620721f7dc

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/393

This change fixes a problem with the recording system where the recordings were sometimes missing the last part (1-2 seconds) of webcam data. This problem was most noticeable in the consent videos, because the end of the consent statement would be cut-off. However this problem would've had a similar affect the trial/session recordings.

If you are already using the new RecordRTC system, please update your experiment runner to this version (or newer).

----

June 5, 2024: iframe improvements; consent/assent recording bug fix
---------------------------------------------------------------------------------------

Commit SHA: a5adee43e2f2498598369850dbc2d4ba1536ee6c

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/390

This update includes two important changes: (1) ``iframe`` frame parameter changes and functionality improvements that allow for more researcher customization of the participant experience and (2) bug fixes for ``video-consent`` and ``video-assent`` frames to prevent missing consent/assent recordings. Details about these changes are included below.

**1. iframe parameter changes and functionality improvements**

  - You can now use the parameter ``nextButtonText`` to modify the "Next" button text.
  - The parameter ``optionalText`` has been renamed ``instructionText`` and displays above (rather than below) the iframe, so that participants can see the instructions before beginning the task. **IMPORTANT**: when updating existing iframes to the this Experiment Runner release (or a later version), make sure to replace the ``optionalText`` parameter name in your JSON with ``instructionText`` to ensure that your instructions are preserved.
  - To prevent participants from accidentally advancing past an iframe prematurely, a red warning message now appears above the next button the first time it's clicked. When the warning appears, the "Next" button is disabled for 2 seconds to give participants the chance to see/read the warning message and check their progress within the iframe before advancing.
  - The default warning asks participants to confirm that they've finished the iframe task before clicking this button. This warning text is customizable; you can change the message with the ``warningMessageText`` parameter.
  - The ``iframe`` documentation has been updated to reflect the above changes and provide new examples.

**2. Recording bug fix for video-consent and video-assent frames**

  - We have fixed bugs in the ``video-consent`` and ``video-assent`` frames to prevent participants from being able to start their consent recording before the recorder is ready. This fixes a problem where participants produced a blank consent video and were nonetheless able to continue on with the experiment.

----

May 8, 2024: iframe improvements; maximum recording durations
------------------------------------------------------------------------------

Commit SHA: 3a0056ecf62fc819b83993949a634e3d91a177b7

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/378

There are two main changes in this update. First, the `iframe` frame now works with scheduling/booking sites and other forms. Second, for all experiments we have set a new default maximum recording duration to prevent extremely long videos. Details below and in the pull request link above.

* The `iframe` frame now allows forms to be submitted inside the iframe element. This enables researchers to use booking sites and other forms inside the iframe (e.g., Calendly).
* The `iframeSrc` parameter can now be generated through the `generateProperties` parameter, which allows researchers to add custom URL parameter names/values to their `iframeSrc` URL. This change allows the iframe URL to pass the child/response IDs to websites that require specific names for custom query parameters (e.g. Calendly, where these must be called 'a1', 'a2' etc.). See the examples in the `iframe` :ref:`documentation <elf:exp-lookit-iframe>` for more information.
* This update fixes a bug in previous experiment runner versions, where the default maximum recording duration was too high. Now the default maximum recording duration is correctly set to 7200 seconds, which is also the upper limit. Researchers can change the maximum recording duration to any value between 1 and 7200 seconds.

----

Apr 11, 2024: Add Hungarian and Basque translations
-----------------------------------------------------------

Commit SHA: 6c5bcdcb2cd97b4ddcb33aed04ab6c825bd590da

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/369

This update adds the Hungarian (hu) and Basque/Euskera (eu) translation options to the Lookit experiment runner - thanks Nevena Klobucar!

Please see the Lookit experiment runner :ref:`language parameter documentation<elf:translation>` for more information.

----

Feb 21, 2024: Fix recording bug in Chrome [CRITICAL]
-------------------------------------------------------------

Commit SHA: b6567ade6674c245c69157361111e94250ab3b77

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/365

This change fixes a problem with the new recording system in Chrome, where initiating a recording with "video/webm" as the mime type (without specifying the codec) was sometimes producing recordings that could not be replayed by the participant or viewed by researchers in the web browser. This meant that participants were sometimes not able to replay their own recordings, and researchers were sometimes unable to view consent videos on the Consent Manager page. This update fixes the problem by checking the browser's support for specific codecs and setting this accordingly when recording begins. 

.. important::

   If you are already using the new RecordRTC system, please update your experiment runner to this version (or newer) immediately.
   

----

Jan 30, 2024: New Recording System
-----------------------------------

Commit SHA: 5f358868aade7689071565d881c9dd9050620d87

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/349

**Key Information**

* We are switching how participant videos are handled by Lookit from a third-party service called 'Pipe' to a new system called 'RecordRTC' that is managed by the Lookit development team.
* This change will affect all new studies by default. Existing studies will have the opportunity to update to the new system.
* If you download participant videos, be aware that in the new system, the default file format for the videos is changing from .mp4 to .webm. We provide information on how to convert .webm files to .mp4s below, if needed.
* Please let us know if you experience any problems using the new system. It is possible to switch back to the old Pipe system for a limited time if you experience issues.

**Detailed Notes**

The latest version of the Lookit experiment runner switched from using a third-party service (called `'Pipe' <https://addpipe.com/>`__) for participant video recordings to our new 'in-house' system called 'RecordRTC'. Our reasons for removing Lookit's dependence on the external Pipe service are: 

* Simplifying participant video handling and reducing the likelihood of video rendering issues, as videos will now be processed on Lookit's own servers rather than via a third-party service.
* Lowering the website's running costs. Pipe usage accounts for a large proportion of CHS/Lookit's expenses, and these costs grow with increasing use of the website.
* Preventing problems caused by unexpected updates to Pipe that we have no control over.
* Removing third-party access to private and sensitive research data. Although this service was secure, this reduces the theoretical chances of data leaks and improper data use/access by keeping this data only on Lookit servers.

.. admonition:: All studies will eventually need to switch! 

   Moving forward, all new studies will use RecordRTC but existing studies will continue to use Pipe, unless the researcher decides to update their experiment runner version.

   The old Pipe system will be discontinued in the future (exact date TBD; we will announce ahead of time). For the time being, we are running the new and old systems in parallel. This is to allow ongoing studies to continue to use the Pipe system for the remainder of their data collection, and to allow a fallback option in case of unforeseen problems with the new system. For any studies you will be using or copying in the future, we strongly recommend that you :ref:`update your experiment runner <recortdrtc-how-to-switch>` to test this new system before the support for Pipe ends!


.. _recortdrtc-check-system:

.. rubric:: Checking which recording system your study is using

The easiest way to check is to go to the Study Details page for your study, find the “About this version” section, and look for the commit SHA and date (see screenshot below). 

* Before January 30th 2024 (**2024-01-30**): old **Pipe** system
* On or after January 30th 2024 (**2024-01-30**): new **RecordRTC** system

.. image:: _static/img/efp-releases-about-version.png
    :alt: Study Details page with information about the study's experiment runner version.

You can also click the “Check for updates” button (see screenshot above) to see what changes, if any, have been made to the experiment runner since the version that your experiment is currently using.

By default, newly-created experiments will use our new recording system. However, with any new or existing study, you can change the experiment runner version at any time (see the section ":ref:`Switching an existing experiment to the new system <recortdrtc-how-to-switch>`" and the page ":ref:`Updating the experiment runner <updating-frameplayer-code>`").

The first commit SHA that uses the new recording version is: 5f358868aade7689071565d881c9dd9050620d87. All future updates (commits on the ``master`` branch) to our experiment runner will also use the new recording system. You can find an up-to-date list of all versions and associated commit SHAs `here <https://github.com/lookit/ember-lookit-frameplayer/commits/master>`__.

.. _recortdrtc-how-to-switch:

.. rubric:: Switching an existing experiment to the new system

If you have an existing study that uses the old Pipe system and would like to switch to using the new recording system, the easiest way to switch is to click the 'Check for updates' button on your Study Details page, and then copy/paste the most recent commit SHA into the 'Experiment runner version' box. For more details on how to do this, see the :ref:`Updating the experiment runner <updating-frameplayer-code>` page.

.. admonition:: If you change your study's experiment runner verison, remember: 

   * **You will need to rebuild your experiment runner.** You will see a 'Build experiment runner' button on your study's main page. Click this button to build your study with the new version.
   * **If your study has already been approved, it will be automatically rejected.** When you re-submit it for approval, you will be asked to list all changes made since your study was last approved. If you have only updated the experiment runner, please state that clearly so that we can get your study approved more quickly! 


.. _recordrtc-data-impact:

.. rubric:: Impact on data

We have worked to minimize the impact that this new recording system has on researchers and data, but it does introduce a few changes:

* Video file format is webm rather than mp4 (see section :ref:`'Converting webm to mp4' <recordrtc-convert-files>`)
* Video file size may be larger
* Pipe Id is no longer included in the response data. This category was previously included because the Pipe system renamed video files during processing and we needed to know both the original name and the Pipe name for troubleshooting issues. Now, video file names will be the same throughout all processes.

.. _recordrtc-convert-files:

.. rubric:: Converting webm to mp4

Webm is the 'native' format that the web browser uses when creating webcam recordings. By providing you with these raw data files, we can ensure that you're getting the most detailed video data possible. Webm files can be opened and viewed in many video playback programs, including web browsers and VLC. 

However, we are aware that the change in file formats might cause problems for some researchers who require mp4 format for their data processing and analysis. And because the webm files are larger than the files produced by the old system, you may decide to compress your video files into mp4 format so that they take up less disk space. 

**Handbrake (GUI)**

For a free GUI-based file conversion tool, we suggest using `Handbrake <https://handbrake.fr/>`__. After downloading and installing Handbrake: 

1. Open your .webm video file in Handbrake (click "Open Source", or drag and drop the file).
2. In the "Format" drop-down, select "MP4".
3. Set your file output location (Shown at the bottom next to "Save As" - change the location by clicking "Browse...").
4. Click the "Start" button at the top.  

To batch convert several files at once, you can open all the .webm files you want to convert by clicking 'Open Source' and selecting multiple files (by holding down CTRL/CMD or Shift). Then, just follow the steps above (select the file format and output location, and then click "Start").

For more information, see the `Handbrake quick start guide <https://handbrake.fr/docs/en/1.7.0/introduction/quick-start.html>`__.

**ffmpeg (command line)**

For converting files on the command line, we recommend using the `ffmpeg <https://www.ffmpeg.org/>`__ software. The examples below show the most basic webm -> mp4 file conversion, but the ffmpeg command offers a number of `other options <https://www.ffmpeg.org/ffmpeg.html#Main-options>`__ that you might find useful, such as adjusting the bitrate/resolution/quality. 

On a Mac, open a terminal window and install ffmpeg like this::

   brew install ffmpeg

To convert a single file::

   ffmpeg -i input-filename.webm output-filename.mp4

To batch convert a directory of files::

   for i in *.webm; do ffmpeg -i "$i" "${i%.*}.mp4"; done

The above code will save the mp4 files to the same directory. You can save them to a different directory by editing to the 'output' file path, e.g. ``"mp4_files/${i%.*}.mp4"`` will put the mp4 files into a subdirectory called 'mp4_files'.

On Windows, you will need to download the ffmpeg exe file to install it. See `the ffmpeg website <https://ffmpeg.org/download.html#build-windows>`__ for downloads and `here <https://phoenixnap.com/kb/ffmpeg-windows>`__ for more instructions.

To convert a single file::

   ffmpeg -i input-filename.webm output-filename.mp4

To batch convert a directory of files::

   for %f in (*.*) do ffmpeg -i "%f" "%~nf.mp4"

The above code will save the mp4 files to the same directory. You can save them to a different directory by editing to the 'output' file path, e.g. ``"mp4_files/%~nf.mp4"`` will put the mp4 files into a subdirectory called 'mp4_files'.


.. _recordrtc-issues:

.. rubric:: What if I experience problems with the new system?

If you experience any issues that you think might be related to the new recording system, please let us know immediately by posting in the Slack tech_support channel! Give us a short description of the problem and a link to your study. 

If you're in the middle of data collection or need to start quickly, remember that you always have the option to switch your study back to the old Pipe recording system. The commit SHA for the last version of the experiment runner that uses the Pipe system is: ba09c18f6f04d3fe6017722a0388e100378faef3. On your 'Study Details' page, you can paste this commit SHA into the 'Experiment runner version' textbox, save the changes, and rebuild your experiment runner.

Keep in mind that we are transitioning away from the old Pipe system, so the option to revert back will only be available for a limited time. You might decide to continue using the Pipe system if you have already begun collecting data and will finish soon, or if you have experienced problems with the new system that are interfering with your data collection. Otherwise, we strongly suggest using the new system so that you have time to test it with your study before we discontinue support for Pipe.

----

Jan 29, 2024: Fix survey-consent; update translations
-----------------------------------------------------------

Commit SHA: ba09c18f6f04d3fe6017722a0388e100378faef3

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/357

This update did two things:

* Fixed a problem with the ``survey-consent`` frame that made response data collected this frame unavailable through the Consent Manager page.  
* Updated the Brazilian Portuguese translations - thanks Nevena Klobucar!

----

Oct 16, 2023: Add 'iframe' frame
--------------------------------

Commit SHA: ea4169716acb6330f14ba80d79854269e7c859e1

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/340

This update added a new 'iframe' frame, which allows the researcher to embed an external webpage (e.g. Qualtrics) into an interal Lookit experiment. There are some important limitations to this approach, but it can be useful for researchers who want to record video while participants are completing the external survey/task. See the ``exp-lookit-iframe`` documentation `here <https://lookit.readthedocs.io/projects/frameplayer/en/latest/components/exp-lookit-iframe/doc.html>`_.

----

Oct 10, 2023: Fix webcam display 
----------------------------------

Commit SHA: bc5ffc1ab7b6c1d167d8434862d6bf4cc3bb4550

Github pull request: https://github.com/lookit/ember-lookit-frameplayer/pull/334

This change fixed the problem with the Pipe webcam display in the ``video-consent`` frame and other frames that display the webcam back to the participant. The problem was that the webcam video display box can cover up other elements on the page, including text and recording start/stop buttons. 

This update fixes the webcam display problem on the following frames:

* ``instructions``
* ``observation``
* ``video-assent``
* ``video-consent``
* ``webcam-display``
* ``video-config``
* ``video-config-quality``
