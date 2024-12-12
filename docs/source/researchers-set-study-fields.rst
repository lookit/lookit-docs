.. _study fields:

##################################
Setting study details
##################################

When creating or editing a study, you can set the value of the following fields. Below is more information about each field. This form is used for both Lookit and jsPsych internal studies, and both synchronous and asychronous external studies. 


=============================
Study name
=============================

Participant-facing title of your study; must be <255 characters. Shoot for a short, catchy title; depending on how you advertise your study, you may want participants to be able to recognize and select it from the studies page. If you plan on running similar follow-up studies and want them to be easily distinguishable, avoid titles that encompass your entire research program like "Infant Language Study."

=============================
Lab
=============================

Which lab should this study be affiliated with?

=============================
Lab page priority
=============================

This value affects the order in which studies are listed on your :ref:`custom lab page<lab_custom_url>`. By default, your lab page will show all of your lab's active experiments in a random order. You may wish to change the order of the studies on your lab page, for instance to encourage more participation in a particular study, or to reflect the session order when a study consists of multiple parts. 

Setting your study's priority value to 99 (the default) will mean it is shown *first* on your page, while setting the priority to 1 will mean it is shown *last*. You can use any integers between these values for more fine-grained control over ordering. If any of your lab's studies share the same priority value, then presentation order will be random within that set. 

=============================
Scheduled
=============================
The internal experiment builders, Lookit and jsPsych, don't have the capacity for video chat studies, so this box is greyed out unless the External box is checked.  If you are running an external study, leave this box unchecked if participants will click a link and participate in a study right away, without any back-and-forth or live interaction with a researcher.  Check this box if participants will wind up scheduling and attending a video chat with a researcher.

.. _discoverability:

=============================
Discoverable
=============================
Do you want this study to be listed on the CHS studies page when it's active, and 
eligible participants in the CHS database to receive email invitations to participate? If so, check this box to make the study discoverable. Email invitations will go out to families with eligible children at a rate of up to 50 emails per day as long as the study is active and discoverable.

If the box is unchecked, the study will be 'non-discoverable' and participants will only be able to get to it by following a direct link with your study ID. This may be helpful if, for instance, you want to run a follow-up study (with in-lab or online participants) and want to send the link to a limited number of people, or if your inclusion criteria are very limited (e.g., a rare genetic disorder) and you want to recruit specifically without getting any random curious families stopping by. 

You can switch the study back and forth from discoverable to non-discoverable any time after it's approved, without triggering re-review.

We recommend **starting** studies as non-discoverable, so that you can pilot with participants you recruit before inviting everyone who's eligible to participate!

=============================
Share preview
=============================
Do you want other researchers to be able to preview your study? Check this box to make it possible for any logged-in CHS researcher to try out your study. If you check the box, you will be able to share your preview link - e.g. on the Slack channel - to ask for feedback on your study from other researchers. This is generally a good idea as we could all use another pair of eyes to check on directions, stimuli, debriefing text, etc. Getting peer feedback ahead of time will generally substantially speed up the CHS review process too. You can leave this unchecked if you're very concerned about being scooped. (My personal feeling is that no one has the time or energy to scoop you. See also: every line of our code is publicly available and has been for years...)

=============================
Study image
=============================

Thumbnail image that will be displayed to participants on CHS's studies page.  File must be an image-type and the dimensions must be square. Please keep the file size reasonable (<1 MB). If you submit too large an image file you may see an error "413 Request Entity Too Large."

Sometimes your stimuli are a good basis for creating this image, or it can be something that conceptually represents your study or shows what it looks like to participate.

As noted in the self-review checklist, if you decide to include an image of a child/family participating, please don't use pictures of white people if you have flexibility not to. (It's as good a choice as any for a single study, but the problem is that especially US researchers will "default" to white people as examples, and if everyone does that we end up with a sea of pictures of white kids on the studies page. It's a small thing, but it stinks to only see pictures of families that look like yours in cases where the researchers are studying something related to race!)

=============================
Preview summary
=============================

This is the text participants will see when browsing studies. Please keep your description under 100 words.

=============================
Short description
=============================

Describe what happens during your study here (1-3 sentences). This text is shown on the main studies page (under your thumbnail image and title). This should give families a concrete idea of what they will be doing - e.g., reading a story together and answering questions, watching a short video, playing a game about numbers. If you are running a scheduled study, make sure to include a description of how they will sign up and access the study session.

.. _purpose:

=============================
Purpose
============================= 
Explain the purpose of your study here (1-3 sentences). This should address what question this study answers AND why that is an interesting or important question, in layperson-friendly terms. Note: this tends to be harder than you'd think - it's not just you! Imagine all the time you spend getting comfortable explaining the point of a study in the lab (or training RAs on the same), distilled into this task. Plus you don't get to interact with the parent to gauge their interest level or familiarity first. Take your time and read this out loud as you work. Some things to check: Is it too specific - is a reasonable response "okay, you will find out whether X is true, but why does that matter?" Is it too general - could you write the same thing about a follow-up study you're planning or another study going on in your lab? 

=============================
Compensation
=============================
Provide a description of any compensation for participation, including when and how 
participants will receive it and any limitations or eligibility criteria (e.g., only one 
gift card per participant, being in age range for study, child being visible in consent 
video). Please see the `Terms of Use <https://childrenhelpingscience.com/termsofuse/>`_ for details 
on allowable compensation and restrictions. If this field is left blank (which is okay 
if you're not providing compensation beyond the joy of participation) it will not be 
displayed to participants.

Studies which compensate participants are responsible for following our :ref:`spam prevention<spam_prevention>`
policies.

=============================
Exit URL
=============================
After the participant has completed an internal study, they will be automatically redirected to the exit URL. Most studies will leave the default value, sending families to their study history page once a study finishes. Not to be confused with the study URL for external studies (see below!)

====================================
Participant eligibility description
====================================
Freeform participant-facing eligibility string, of the form 'For...' (e.g., 'For babies under 1 year old'). Make this readable so participants understand if their child can take part in the study.

This is **not** directly used to automatically check eligibility, so you can include criteria that you can't check for automatically - e.g., this study is only for kids whose favorite color is orange. 

Age limits specified here should be carefully considered with respect to the `minimum and maximum age cutoffs`_ which **are** used for automatic verification of eligibility. 


.. admonition:: How does eligibility work?

   There are two separate ways you specify eligibility criteria for your study: the "automatically checkable" parts (min/max ages, prior study participation, and criteria expression; discussed below), and the "parent-facing description" part (above).
   
   The "automatically checkable" parts are used for several things:
   
   - Showing parents a warning if they try to participate with a child who's not eligible. See screenshots of these warnings in the eligibility sections :ref:`Minimum and maximum age cutoffs <min_max_ages>`, :ref:`Must (not) have participated <study_participation_criteria>`, and :ref:`Criteria Expression <study_eligibility_criteria>`.
   - Determining which registered families to email. Announcement emails are sent out to families about discoverable studies their children are eligible for.
   - Letting parents filter the list of active studies by which ones their kids are eligible for.
   
   For now, though, because the criteria expressions aren't guaranteed to be easy to read/interpret - and because you might have additional criteria that aren't in the database anywhere - these are separate from the description displayed to parents, which you have to provide manually.  
   
=============================
Duration
=============================
Approximately how long does it take to do your study, start to finish? (Try it if you're not sure; include time to read the instructions.) You can give an estimate or range.

===============================
Researcher contact information
===============================
This should give the name of the PI for your study, and an email address where the PI or study staff can be reached with questions. Format: PIs Name (contact: youremail@lab.edu). This is displayed to participants on the study detail page before they choose to participate, as well as substituted into your consent form and exit survey, so in general the name needs to be the person who's listed as PI on your IRB protocol (although it may not need to be their personal email address). 

.. _min_max_ages:

================================
Minimum and maximum age cutoffs
================================
Integer fields specifying minimum/maximum ages of participants (inclusive). Eligibility is calculated based on the child's current age in days; this is compared to the minimum/maximum ages in days, calculated as 365*years + 30*months + days.

Participants under the age range see a warning indicating that they may not be compensated and their data may not be used, and suggesting that they wait until they're in the age range (see screenshot below). Participants over the age range just see a warning indicating that they may not be compensated and their data may not be used (see screenshot below). Participants are never actually prevented from starting the study, to remove motivation for a curious parent to fudge the child's age.

.. image:: _static/img/study_too_young_warning.png
    :alt: Family-facing study detail page with a child selected who is below the age range, and red ineligibility warning text.

.. image:: _static/img/study_too_old_warning.png
    :alt: Family-facing study detail page with a child selected who is above the age range, and red ineligibility warning text.

Note that these ages do **not** in all cases correspond exactly to the child's age in 'calendar months' or 'calendar years' (e.g., 'one month' if that month is February). In general, you want to avoid a situation where the parent thinks their child should be eligible based on the participant eligibility string (e.g., "my child is one month old, she was born February 3rd and it's March 4th!") but sees a warning when trying to participate. You can do this by narrowing the eligibility criteria in the freeform string and/or by expanding them in the cutoffs here. If one has to align better with your actual inclusion criteria, in general you want that to be the minimum/maximum age cutoffs.

Please see `this spreadsheet <https://docs.google.com/spreadsheets/d/1rbGrbyYZpVsCOUXVPGyk2Yobn-zanllbCtuyw2i3vbk/edit?usp=sharing>`__ for a table translating "calendar ages" (how a parent would describe their child's age) to days.
  
----------------------------------------
Example: study for 5- and 6-year-olds
----------------------------------------

These kids will have lived through 1 or 2 leap years (at both ends of the age range), so the range you likely want is 5 * 365 + 1 days up to 6 * 365 + 2 days. Set the age range as 5 years, 1 day to 6 years, 2 days.

--------------------------------------------------------------------------------
Example: study for 6-month-olds (i.e., between 6 and 7 months)
--------------------------------------------------------------------------------

A child turns 6 months old, by the calendar, between 181 (e.g. born in September in a non leap year) and 184 (e.g. born in March) days of age. She turns 7 months old, by the calendar, between 212 days (e.g., born in August in a non leap year) and 216 days (e.g., born in July preceding a leap year). If you really want to include anyone who's "six months old" you could set the age range to 181 to 216 days by selecting 6 months 1 day 7 months 6 days. This way no one who thinks, quite reasonably, that their baby is 6 months old will see a warning that they're not eligible. 

If you have theoretical reasons for wanting a particular exact age range in days, you could set that instead, and then communicate it to parents: e.g. "for babies around 6 months old (26 to 30 weeks)".

--------------------------------------------------------------------
Example: study for 6-month-olds (i.e., between 5.5 and 6.5 months)
--------------------------------------------------------------------

Another common standard in the literature is to report a finding in "N-month-olds," meaning babies between (N-1).5 and N.5 months of age. Actual implementations of this in terms of recruitment from databases vary, and historically we suspect in most cases researchers got what they got and then reported the range of kids they actually tested, rather than having an actual age range set in stone. 

Here you might focus on how old babies are when they "turn" six months and then frame the age range in terms of that: e.g., go from 181 - 14 to 184 + 14 days, or 167 to 198 days, and describe this as being "within two weeks before or after their six-month 'birthday'."

.. _study_participation_criteria:

=============================
Must (not) have participated
=============================

These fields allow you to specify that participants are only eligibile for this study if they **have** participated in a certain study or set of studies, and/or **have not** participated in a certain study or set of studies. This can be useful for making sure that samples do not overlap across a set of studies, or recruiting specific participants for longitudinal follow-up studies.

For each of these fields, you can click on a study to select it, and click it again to remove it. You can select multiple studies. The list of currently-selected studies will appear below the selection box.

.. image:: _static/img/study_edit_must_have_participated.png
    :alt: Study 'must have participated' and 'must not have participated' eligibility fields, with two studies selected.

If you select more than one study in the 'Must have participated' field, the child must have participated in ALL of the studies in order to be considered eligible. If you select more than one study in the 'Must not have participated' field, the child must not have participated in ANY of the studies in order to be considered eligible.

.. admonition:: What counts as 'participated'?
    :name: what-counts-as-participated

    Researchers may have different preferences and requirements about what counts as having 'participated' in a study; some researchers want to exclude children who have had any exposure to the study's stimuli, while others may only care about excluding children who have completed the whole session. Since the definition for these criteria has to be used for every study on the site, we have to use a definition of "participated" that operates in the same way for all studies.

    We have chosen to treat participation in the strictest sense: **once a child begins a study by clicking the 'Participate Now' button, they are treated as having 'participated' in that study**, regardless of how far they get through the study session. For internal studies, we also check that the participant at least reaches the first frame/trial (as opposed to clicking to start and then closing the page before it loads).

If you want children to become ineligible for your study after doing it once, you can add the study itself to the 'must not have participated' list. However, keep in mind that as soon as the family starts a study session, the child will be treated as having 'particpated' (even if they don't finish; see :ref:`What counts as 'participated'? <what-counts-as-participated>`).

If you are running an internal Lookit study then you have another option for warning families about participating in your study multiple times: you can implement a custom check at the beginning of the study session. Internal Lookit studies have access to all previous responses for that child and study through the :ref:`Lookit protocol generator function <elf:generators>`. Using this function, you can check whether the child has already 'participated' (using your own definition, e.g. completed all frames, or reached a particular point in the study), and use that information to conditionally warn families about ineligibility (see this example in the :ref:`experiment runner protocol generator documentation <elf:generators-checking-for-completion>`). If you implement your own check using the protocol generator, then you should not add the study itself to the 'must not have participated' criteria.

As with all of the eligibility criteria, if the child is not eligible due to the study's prior participation requirements, they can still choose to participate in the study, but they will see a warning below the 'Participate Now' button when the ineligible child is selected (see image below). The purpose of this warning is to make sure that families know that they may not be compensated and their data may not be used.

.. image:: _static/img/study_eligibility_warning.png
    :alt: Family-facing study detail page with an ineligible child selected and red ineligibility warning text.

.. _study_eligibility_criteria:

=============================
Criteria expression
=============================
Providing this expression allows you to specify more detailed eligibility criteria for your study than a single age range. When a parent selects a child to participate in a study, he or she will see a warning under any of the following conditions:

- The child is under the minimum age specified (see `minimum and maximum age cutoffs`_)
- The child is over the maximum age specified (see `minimum and maximum age cutoffs`_)
- The child does not meet the prior study participation requirements (see :ref:`Must (not) have participated <study_participation_criteria>`).
- The child is within the specified age range, but doesn't meet the eligibility criteria defined in this expression

If the child is not eligible based on the study's criteria expression, they will see a generic 'not eligible' warning (the same as that shown when the child is not eligible due to prior study participation requirements; see screenshot below). Note that while a warning is displayed, ineligible participants are not actually prevented from participating; this is deliberate, to remove any motivation for a curious parent to fudge the details to see what the study is like.

.. image:: _static/img/study_criteria_warning.png
    :alt: Family-facing study detail page with an ineligible child selected and red ineligibility warning text.

You may want to use the criteria expression to specify additional eligibility criteria beyond an age range - for instance, if your study is for a special population like kids with ASD or bilingual kids. In general, do **not** specify your age range here; participant eligibility checks will require the child meet the `minimum and maximum age cutoffs`_ AND these critera.

Every child in the CHS database has a number of fields associated with it, ranging from gestational age to languages spoken in the home, which can be used in determining eligibility. In the study edit and create views, you can formulate your criteria expression as a boolean expression with embedded relational expressions, using a domain specific query language. 

You can put together your expressions using the query fields below; the operators `AND`, `OR`, `NOT`, `<`, `<=`, `=`, `>`, and `>=`; and parentheses. If your expression is invalid you will see an error when you try to save your study.

----------------------------------
Query fields
----------------------------------

    +-----------------------------------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
    | Query Handle                                        | Value Type        | Examples                                                            | Notes                                                   |
    +=====================================================+===================+=====================================================================+=========================================================+
    | [`CONDITIONS <#characteristics-and-conditions>`_]   | N/A               | deaf, hearing_impairment, NOT multiple_birth                        | See below for full list of available options.           |
    +-----------------------------------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
    | speaks_[`LANGCODE <#language-codes>`_]              | N/A               | speaks_en, NOT speaks_ja, speaks_ru                                 | See below for full list of available options.           |
    +-----------------------------------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
    | n_languages                                         | integer           | 0, 1, 2                                                             | Number of languages child is exposed to                 |
    +-----------------------------------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
    | gestational_age_in_weeks                            | integer or string | gestational_age_in_weeks <= 40, gestational_age_in_weeks = na       | Values are 23 through 40 and na                         |
    +-----------------------------------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
    | gender                                              | string            | gender = f, gender !=o                                              | Male (m), Female (f), Other (o), or Not Available (na). |
    +-----------------------------------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
    | age_in_days                                         | integer           | age_in_days <= 1095, age_in_days > 365                              |                                                         |
    +-----------------------------------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+

-----------------------------
Criteria expression examples
-----------------------------

Deaf children only
    ``deaf``

Multiple-birth children who are either under 1 year old or over 3 years old
    ``multiple_birth AND (age_in_days >= 1095 OR age_in_days <= 365)``
    
Girls who are exposed to both English and Spanish
    ``gender = f AND speaks_en AND speaks_es``
    
Children born late preterm whose adjusted age is about 6 weeks
    ``(gestational_age_in_weeks = 34 AND (age_in_days >= 72 AND age_in_days < 102)) OR (gestational_age_in_weeks = 35 AND (age_in_days >= 65 AND age_in_days < 95)) OR (gestational_age_in_weeks = 36 AND (age_in_days >= 58 AND age_in_days < 88))`` 

--------------------------------
Characteristics and conditions
--------------------------------

    +------------------------+-----------------------------------------------+
    |      Query Handle      |           Condition/Characteristic            |
    +========================+===============================================+
    |autism_spectrum_disorder|Autism Spectrum Disorder                       |
    +------------------------+-----------------------------------------------+
    |deaf                    |Deaf                                           |
    +------------------------+-----------------------------------------------+
    |hearing_impairment      |Hearing Impairment                             |
    +------------------------+-----------------------------------------------+
    |dyslexia                |Dyslexia                                       |
    +------------------------+-----------------------------------------------+
    |multiple_birth          |Multiple Birth (twin, triplet, or higher order)|
    +------------------------+-----------------------------------------------+

--------------------------------
Language codes
--------------------------------

    +----+----------------------+
    |Code|       Language       |
    +====+======================+
    |en  |English               |
    +----+----------------------+
    |am  |Amharic               |
    +----+----------------------+
    |bn  |Bengali               |
    +----+----------------------+
    |bho |Bhojpuri              |
    +----+----------------------+
    |my  |Burmese               |
    +----+----------------------+
    |ceb |Cebuano               |
    +----+----------------------+
    |hne |Chhattisgarhi         |
    +----+----------------------+
    |nl  |Dutch                 |
    +----+----------------------+
    |egy |Egyptian Spoken Arabic|
    +----+----------------------+
    |fr  |French                |
    +----+----------------------+
    |gan |Gan                   |
    +----+----------------------+
    |de  |German                |
    +----+----------------------+
    |gu  |Gujarati              |
    +----+----------------------+
    |hak |Hakka                 |
    +----+----------------------+
    |ha  |Hausa                 |
    +----+----------------------+
    |hi  |Hindi                 |
    +----+----------------------+
    |ig  |Igbo                  |
    +----+----------------------+
    |id  |Indonesian            |
    +----+----------------------+
    |pes |Iranian Persian       |
    +----+----------------------+
    |it  |Italian               |
    +----+----------------------+
    |ja  |Japanese              |
    +----+----------------------+
    |jv  |Javanese              |
    +----+----------------------+
    |cjy |Jinyu                 |
    +----+----------------------+
    |kn  |Kannada               |
    +----+----------------------+
    |km  |Khmer                 |
    +----+----------------------+
    |ko  |Korean                |
    +----+----------------------+
    |mag |Magahi                |
    +----+----------------------+
    |mai |Maithili              |
    +----+----------------------+
    |ms  |Malay                 |
    +----+----------------------+
    |ml  |Malayalam             |
    +----+----------------------+
    |cmn |Mandarin              |
    +----+----------------------+
    |mr  |Marathi               |
    +----+----------------------+
    |nan |Min Nan               |
    +----+----------------------+
    |mor |Moroccan Spoken Arabic|
    +----+----------------------+
    |pbu |Northern Pashto       |
    +----+----------------------+
    |uzn |Northern Uzbek        |
    +----+----------------------+
    |or  |Odia                  |
    +----+----------------------+
    |pl  |Polish                |
    +----+----------------------+
    |pt  |Portuguese            |
    +----+----------------------+
    |ro  |Romanian              |
    +----+----------------------+
    |ru  |Russian               |
    +----+----------------------+
    |skr |Saraiki               |
    +----+----------------------+
    |sd  |Sindhi                |
    +----+----------------------+
    |so  |Somali                |
    +----+----------------------+
    |es  |Spanish               |
    +----+----------------------+
    |su  |Sunda                 |
    +----+----------------------+
    |tl  |Tagalog               |
    +----+----------------------+
    |ta  |Tamil                 |
    +----+----------------------+
    |te  |Telugu                |
    +----+----------------------+
    |th  |Thai                  |
    +----+----------------------+
    |tr  |Turkish               |
    +----+----------------------+
    |uk  |Ukrainian             |
    +----+----------------------+
    |ur  |Urdu                  |
    +----+----------------------+
    |vi  |Vietnamese            |
    +----+----------------------+
    |lah |Western Punjabi       |
    +----+----------------------+
    |wuu |Wu                    |
    +----+----------------------+
    |hsn |Xiang Chinese         |
    +----+----------------------+
    |yo  |Yoruba                |
    +----+----------------------+
    |yue |Yue                   |
    +----+----------------------+

=============================
Experiment Type
=============================

Choose the type of experiment you are creating. This will change the fields that appear on the Study Details page that you see next, because there are certain fields that depend on the type of study that you're running.

- **Lookit**: This is CHS's custom experiment builder, also called the Ember Frameplayer (EFP). It allows you to build an experiment that is hosted on CHS using JSON or JavaScript. See the Lookit Ember Framplayer documentation for more information about what you can do with this experiment builder.
- **jsPsych**: This will allow you to build an experiment that is hosted on CHS using JavaScript and jsPsych. See the jsPsych documentation for more information about what you can do with this experiment builder, as well as the CHS jsPsych documentation for information about features that we've added such as webcam recording.
- **External**: Choose this option if you want to post a link to an external website.

.. _`Building an Experiment`: researchers-create-experiment.html