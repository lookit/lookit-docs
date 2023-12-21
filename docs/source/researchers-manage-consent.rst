##################################
Coding consent
##################################

===========
Overview
===========

At the start of a Lookit study, the parent is asked to provide a verbal statement of informed consent. Unlike in the lab (or at least to a greater extent), it is technically possible for you to end up collecting data from a parent who did NOT consent to participate - e.g., someone idly clicking through who may not understand that this is a research study to do with a child. 

For this reason it is critical that you confirm informed consent before using any data from a response! This is baked into the Lookit experimenter interface: you actually do not receive access to responses, or to the associated child, account, or demographic data, until you confirm consent using the consent manager. 

Responses to your Lookit study will first appear in your study's 'Consent Manager' page, and they start out with a consent status of 'Pending'. Then a researcher working on this study can either 'Approve' or 'Reject' the consent video. Responses with approved consent become available to the researcher through the study's 'Study Responses' page.

==============================
Managing consent rulings
==============================

From your study detail page, click 'Review Consent' and you will be taken to the 'Consent Manager' view.

.. image:: _static/img/consent_manager.png
    :alt: Consent manager image
    
On the left, you will see a list of responses. By default the responses with 'Pending' consent status are displayed; you can use the dropdown menu at the top of this section to show 'Accepted' or 'Rejected' consent videos instead. Note that you may need to use the scroll bar on the right side of the list to see all of the responses listed.

.. image:: _static/img/consent_manager_response_list.png
    :alt: Response list on consent manager page
    :align: center
    :width: 40%

If you are previewing your study and have included a consent form, then the preview response will be displayed here too with "[Preview]" under the timestamp. If you are using a survey-consent frame in your study, then that will also be flagged in the response with "[Survey consent]".

-----------------------
Making consent rulings
-----------------------

When you click on a response, any consent videos from that response are shown to the right. (It is possible, although rare, for there to be multiple consent videos associated with a single response; this will become more common when some researchers are collecting both parental consent and child assent, which would be judged together.) A minimal summary of the data is shown below so that you can see whether the child is in the age range for the study and how far the family got.

Watch the video, and decide whether it shows informed consent. You can choose to 'Accept' or 'Reject' a response, and can enter a comment if desired to keep track of any additional information. You can enter a comment without changing the consent ruling (e.g., to say "Emailed this family to confirm consent"). In general, you should 'accept' consent only when the consent video shows an adult reading the consent statement audibly (or signing in ASL), but see the `Terms of Use <https://lookit.mit.edu/termsofuse/>`_ for details (for instance, you may be able to contact a family to confirm consent by email in some cases). 

Repeat for each consent video. When you are done for now, click 'Submit Rulings and Comments' to save your judgments. These changes will immediately be reflected in the number of responses available in the 'individual responses' and 'all responses' views, as well as with respect to demographic and participant data you have access to.

Consent rulings can be changed after an initial ruling is made; for instance, you can use the dropdown menu to display 'Accepted' responses and either 'Reject' or 'Revert to pending.' 

The most recent consent ruling, the time of that ruling, any comment, and the name of the researcher who made the ruling, will be included in the JSON/CSV data for this response.

-----------------------------------
Consenting and 'fake participants'
-----------------------------------

Occasionally, people make a CHS account (or multiple accounts!!) in order to try 
and collect payments without participating in good faith. In addition to the 
video itself, the account information shown below the video is designed to be 
helpful in evaluating and reporting potential fake participants.

For information on dealing with this, please see our page on :ref:`spam prevention<spam_prevention>`. 


--------------------
Response statistics
--------------------

A summary of responses is shown to the right of the consent manager, providing some very basic information about the non-consented responses that may be useful for publication of results. You can see how many responses are still pending consent confirmation; how many accepted responses there are (from how many unique children); and how many responses were rejected (from how many unique children who did not also have some response accepted).

--------------------
Withdrawn responses
--------------------

If a parent chooses to withdraw video data at the end of the study, that will be noted in the list item for the response (before the comment it will say 'Withdrawn' and the response will be crossed out). All video data beyond consent will be inaccessible to researchers, and it will be deleted automatically from Lookit servers after seven days. 

However, you are still able to make a consent ruling about the consent video; this will still impact access to the remaining non-video response data as well as associated child, demographic, and account data. 

--------------------------------
Where are my preview responses?
--------------------------------

When you preview a study, data is saved to the server the same way as when you participate. However, this data is only available for you to see if you complete at least a consent frame. 

When you're working on a study, you may often be trying out pieces of the study without going through the consent process every time. Once you want to take a look at the data collected, just make sure you include a consent frame. 