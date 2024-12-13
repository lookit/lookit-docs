Day-to-day study operation
==============================

Starting, stopping, and advertising your study
------------------------------------------------------

Once your study has been approved to start data collection, you can change whether your study is **active** (accepting new responses) and whether it is **discoverable** (advertised to CHS families).

Active vs. paused
~~~~~~~~~~~~~~~~~~

You can start and stop data collection independently and whenever you
want. On your study detail page, in the "Study Status" box, go to “Change state” -> “Start” (active) or “Pause.”

.. image:: _static/img/tutorial/study_start.png
    :alt: Changing the study state to "start" (active) or "paused".

When your study is **active**, families can participate using the direct link shown on your study page. If the study is also discoverable (see next section), changing its state to "active" means that it will be listed on the CHS "studies" page and advertised by email to eligible families.

When your study is **paused**, families can't access the study even if they have the direct link. If families follow a direct link to your study and it is paused, they will see a message `like this <https://childrenhelpingscience.com/studies/c7001e3a-cfc5-4054-a8e0-0f5e520950ab/>`__.

.. _change_discoverability:

Discoverable vs. non-discoverable
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can also independently switch your study between discoverable and non-discoverable. On the study detail page, go to "Edit Study Ad" and find the section called "'Studies' Card and Study Detail Page". You can check or un-check the "Discoverable" box at any time, and then save the changes. Your study will not need re-approval if you are only changing the :ref:`discoverability <discoverability>`.

.. image:: _static/img/study_discoverable.png
    :alt: Study discoverability checkbox.

When your study is **discoverable** and active, it is:

- Listed on the CHS "studies" page: https://childrenhelpingscience.com/studies.
- Advertised to eligible families via announcement emails that include a direct link to the study, sent each day around 4am (USA Eastern Time).
- Accessible using the direct link.

When your study is **non-discoverable** and active, it is:

- Not listed on the CHS "studies" page: https://childrenhelpingscience.com/studies.
- Not advertised by announcement emails.
- Still accessible using the direct link!

You would make your study non-discoverable if you wanted to recruit your own specific participants - e.g., only people who participated in a prior study session, or families in a database for research about a rare disorder.

We also recommend making studies non-discoverable to do some initial piloting - once your study is approved, you can make it active but non-discoverable, and recruit a few participants yourself to try it out. (This is also a good way to get a feel for your recruitment options and how effective they are!)

.. _announcement_emails:

Announcement emails
~~~~~~~~~~~~~~~~~~~~

Announcement emails are sent out to families with eligible children to let them know about new studies on CHS:

- Emails are only sent about studies that are **discoverable** and **active**.
- Emails are only sent to families whose email preference specifies that they want to hear about new studies.
- Up to 50 families with at least one eligible child are notified about each study each day. Eligibility is determined each day, so depending on your eligibility criteria you will have a day to a few weeks of sending out 50 emails/day, then a trickle of kids aging in or registering.
- Families are only notified about a study one time per child. (Emails are bundled together if they have multiple eligible children - "There's a new study for John and Jane!", but they might get a second email if another child ages in.)
- Emails are currently sent around 4am Eastern Time.

The limit of 50 is currently hard-coded. If you want to limit how many announcement emails are sent further, you can send out just one day of announcements at a time by making your study discoverable overnight, then making it non-discoverable again. Families who got a direct link in an announcement email will be able to participate in your study, but no more announcements will be sent unless you make the study discoverable again.

Making changes to your study
----------------------------------------

If you make changes to your study - updating the fields in the
study details, the Lookit experiment runner version, etc. - your study will be
automatically “rejected” and will require review by CHS staff again
before you can make it active. This is quick but does still require manual
action on our part. In general these are reviewed the same business day as submitted, often within
an hour, but this is subject to whether staff is working / in a meeting / etc. Feel free to
contact us ahead of time to coordinate a time if you need immediate turnaround.

There are a few exceptions to changes triggering review, including changes to the age range and formatting of the study protocol configuration, which are listed when you save changes to a study.

Monitoring data as it comes in
----------------------------------------

We strongly recommend reviewing consent videos and looking through data
at least twice a week to make sure you become aware of any issues
participants are having in a timely manner. (E.g., you want to know if
people are confused by your directions, if there’s any weird bug with a
new version of Firefox, etc.!)

Missing consent videos
-------------------------

If you come across a record that's missing a consent video, please (a) try refreshing the page to make sure it doesn't show up and then (b) notify CHS staff, including the response UUID. If you're using a version of the Lookit experiment runner prior to 2.2.2 / 1.4.1 (see `releases <https://github.com/lookit/ember-lookit-frameplayer/releases>`) then this is probably an instance of `this bug <https://github.com/lookit/lookit-api/issues/598>`__. We can
fix particular instances for you but recommend updating following the instructions in `this Slack post <https://lookit-mit.slack.com/archives/CDV2ULHC5/p1608305924056900>`__.

.. _compensation:

Compensating participants
----------------------------------------

If you are compensating participants, in most cases you will be 
messaging them through the CHS email interface to give them gift
cards, using the user IDs you can see in the consent manager and/or the
response data. If your institution requires direct compensation or requires 
the collection of email addresses for other compliance reasons, you can add
an additional survey page to your study to ask for the participant's email,
as long as it is clear that that information will only be used to send payment. 

Participant compensation should never depend on the child's behavior -
*even if the child fusses out and/or the data is unusable*. In general,
this means we try to pay anyone who submits a valid consent video.
Payment for the parent's/child's time is ethical; accidentally paying
the parent to take extraordinary measures to get their child to sit
through the study because they think that's necessary to get paid is not.
The exception to this guideline is that if someone tries the study
but only gets a very short way in (maybe only consent), then comes back
and does the study again, you would generally pay them just once - even
if you might have erred on the side of caution and paid them even for
the first attempt.

.. admonition:: Spam users and fraud on CHS
  
  Very rarely, you may have people take your study who are not operating in
  good faith - the most egregious example is someone attempting to participate
  without a child present, but we have also seen cases where the same person 
  makes several accounts to get paid multiple times, or where people lie about
  their location or child's age to make themselves 'eligible' for studies. 

  **Every member of your research team** who is involved in compensating families
  for participation must be aware of this issue and the steps that researchers
  are expected to take to avoid this.  Because CHS is a shared platform 
  with a shared reputation and shared participant pool, it is **everyone's** 
  responsibility to avoid paying the small number of people to try to take
  advantage of this resouce to the detriment of our research goals. 

  See :ref:`this page <spam_prevention>` for information on procedures
  related to discouraging scammer participants on Children Helping Science. 

You are free to put limits on how many times / how often people can
participate and be compensated, and to require that the child be, say,
in the age range for the study in order to participate. Basically, stuff
the parent can know before they get started is fair game. (But be
careful and err on the side of payment if there is any discrepancy
between your listed age range - e.g. “for three-year-olds” - and the
min/max used for automatic warnings; see `the
docs <https://lookit.readthedocs.io/en/develop/researchers-using-platform.html#creating-a-study>`__.)
If a parent participates with a child well outside the age range, you
might want to email them to thank them for participating, let them know
it's fine to check out the study and you hope they found it interesting
but since this is for x-month-olds you won't be able to use their data
or provide compensation.

Rarely, adults without children may check out a study and even make a
consent recording. We tell our students not to do this but you never
know :) To avoid feeling obligated to pay them (which would probably be
surprising to them too) you're welcome to state in your compensation
info that the child needs to be visible in the consent video. (You don't
actually have to enforce that for people who get the kid later, which is
reasonable - but this way if someone ONLY submits the consent video and
doesn't have a child present, you don't have to pay them.)

Parents who ran into a technical problem and want to try again
----------------------------------------------------------------

Sometimes parents may contact you to see if they can try your study
again because they had a technical problem or their child wasn’t
interested the first time. Whether you can use the data may depend on
the particular circumstances and your study design, but on a technical
level it’s fine - you can let the parent know they may see a warning
about having already participated but that they can safely ignore it.

.. _confirm_consent:

Confirming consent
----------------------------------------

You will need to review consent videos using the Consent Manager tool
and determine whether each one represents clear informed consent. (See
`the
docs <https://lookit.readthedocs.io/en/develop/researchers-manage-consent.html>`__.)
Only after confirming consent do you receive full access to the data
collected during the session.

If you come across a video where you think a parent meant to consent to
participate, but you do not have an adequate recording, you can email
the participant to ask for confirmation. See the ‘informed consent
guidelines’ in the `Terms of Use <https://childrenhelpingscience.com/termsofuse/>`__
for guidance. Here is an example of an email we have sent to confirm
consent:

   Thanks so much for participating in the Lookit study “Your baby the
   physicist” with your child! We really appreciate your time - and
   you’re one of our first participants, so we’re extra excited :)

   Unfortunately, we don’t have a video recording of you saying you
   agree to participate - we suspect it may not have been clear that you
   needed to read that out loud. If it’s okay for us to view your videos
   and use the data, could you respond with “Yes, I am this child’s
   parent or legal guardian and we both agreed to participate in this
   study”? Thanks again, and I’m very sorry for the extra hassle!

   If you did NOT mean to consent to participate in the study, no action
   is required. You can ignore this email and we will not use your data.

Sending child-related data to families
----------------------------------------

Parents are able to review their study video in the CHS interface. If
you would like to send them additional information related to their
participation, please try to do so using the “Message Participants”
interface. That interface supports html but does not allow attachments.
If you need to share files with the families, please share a link to the
file. For example, Dropbox Business allows file-sharing links to be
password-protected with an expiration date.

If a parent requests video deleted, or you need to delete video for any other reason
-------------------------------------------------------------------------------------

Please contact CHS staff and we will delete the video(s). You'll need to provide the 
response UUID.

If a parent invokes GDPR specifically in their request, again please
contact CHS (complying is straightforward but we’ll notify OGC).
