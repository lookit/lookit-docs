.. _legal:

IRB and legal info
====================================

Step 1: user agreement
----------------------

What it is
~~~~~~~~~~

In order to use Lookit for data collection, researchers must first sign
an `institutional 
agreement <https://github.com/lookit/research-resources/blob/master/Legal/Lookit%20Institutional%20Agreement.pdf>`__
with MIT that lays out each institution’s rights and responsibilities.
This may require review by a legal or contracts office or an office of
sponsored programs depending on the institution.

The agreement itself is short and closely based on Databrary’s agreement
(with permission); the meat is in the `Terms of
use <https://lookit.mit.edu/termsofuse/>`__ you are agreeing to.
**Researchers should actually read the terms carefully:** it is real content
written by a real person and contains non-obvious information about
ethical/privacy issues you may not have encountered in the lab. Note
that we do impose standards that may in some cases be more stringent
than your own IRB’s.

To make sure we’re all on the same page, we require that at least one
researcher associated with each lab using Lookit complete `this quiz
about the Terms of Use <https://forms.gle/Eom9bTERGcc2EcY86>`__.

How to get it signed
~~~~~~~~~~~~~~~~~~~~

If you are planning a Lookit study, getting the user agreement signed
should be your first step because it takes a highly variable amount of
time (record so far is under two weeks, but budgeting six months is
sensible). It does not require any customization on your part - you just
need to send it off to someone at your institution who’s authorized to
sign on behalf of the institution or who can figure out who is.

Unfortunately the appropriate office varies by institution. If you’ve
previously set up to use Databrary, try contacting the office that
signed off on that. As examples, the following offices have approved the access
agreement:

-  Contracts - NYU, Wisconsin, Stanford
-  VP Finance - Haskins
-  Partnerships - Toronto
-  University/Industry Liason - UBC
-  Department head - Goldsmiths London
-  Provost - Yeshiva
-  Sponsored programs - American University

In general, you do NOT need to have an IRB protocol to use Lookit in
progress or approved first. In some cases, though, the office that signs
the agreement may ask that you obtain ethical approval first.

The one exception to this process is that researchers at MIT, completing
studies approved by MIT’s IRB, do not require the signature of an MIT
authorized signer. However, the MIT PI still needs to sign and return
the agreement.

If your institution requires changes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We have generally been able to accommodate requests for minor changes to
the agreement as required by universities’ legal departments, including
accepting UK ethics committee approval in addition to “US-equivalent”
IRBs. If it looks like some clause would be a deal-breaker for your
institution, please get in touch with Kim Scott (kimscott) and general
counsel lawyer Jason Baletsa (jbaletsa) at mit.edu for advice.

Sending it to Lookit
~~~~~~~~~~~~~~~~~~~~

Once you have the user agreement signed by the PI and institution’s
authorized signer, please: 

- Make sure you or someone in your group has completed `this quick quiz about the Terms of Use <https://forms.gle/Eom9bTERGcc2EcY86>`__ 
- Send the PDF of the signed agreement to lookit@mit.edu, noting that you have also completed the quiz

Step 2: Ethics approval
-----------------------

A researcher using Lookit applies to their own institution’s IRB for
approval. Except for our involvement in a small set of initial studies,
MIT is not considered to be engaged in human subjects research by
running Lookit.

You can find resources for writing your IRB protocol 
`here <https://github.com/lookit/research-resources/tree/master/Legal>`__.
In addition to giving an overview of how data collection on Lookit works
and what protections are included for participant data, you will likely
need to apply for a waiver of the usual requirement to collect written
consent from participants so that you can rely on videorecorded
statements. (The statements parents make on Lookit are better evidence
of true informed consent than commonly-approved checkboxes for online
studies, and so far this has not been an issue.)

Lookit *may* request a copy of the approved protocol at the time a study
is submitted to run on Lookit. (In general we don’t - we aren’t looking
to get into that much paperwork. This is mostly if we have any concerns
or you’re getting permission to do something unusual.)

Responsibilities of researchers
--------------------------------

-  Everyone:

   -  Protect your Lookit account credentials. **You are responsible for
      any access to participant data on Lookit via your account.** You
      should choose a strong password, change it regularly, and never
      share it. (Share access by adding another researcher to your Lab -
      not by sharing a lab account password.)
   -  Promptly report any breach or potential breach of participant
      information that you become aware of, both to Lookit and to your
      local institution.

-  PIs:

   -  You are responsible for the actions of anyone who’s conducting
      research on Lookit under your access agreement. Ensure that anyone
      added to your Lab on Lookit understands any rules in the Terms of
      Use that apply to what they’ll be doing. (E.g., make sure an RA
      tasked with approving consent and contacting families with
      compensation understands when it’s ok to withhold compensation,
      when to approve/reject consent, etc. Make sure someone helping
      with analysis understands which fields must be omitted from
      published data.) You may choose to create your own training
      materials based on the tasks they’ll actually be doing - please
      share these if so!
   -  Ensure that people who are no longer in your lab are removed from
      your Lab promptly.

-  Study admins:

   -  Ensure you have current IRB approval for your study before
      beginning ANY data collection on Lookit. Promptly pause the study
      if approval lapses.
   -  Ensure that anyone with access to participant data for this study
      is listed on the appropriate IRB protocol. Promptly remove
      permissions for anyone who is removed from the IRB.
   -  Assign :ref:`minimal appropriate roles<study_permissions>` for each person who needs access
      to your study.

Privacy policy
-----------------

Both researchers and participants are covered by the `privacy
policy <https://lookit.mit.edu/privacy/>`__.

Sub-processors and information about GDPR compliance/DPAs
-----------------------------------------------------------

AWS S3 (data storage - participant video):
https://aws.amazon.com/service-terms/

GCP (data storage, databases; temporary data storage, video (.zip
downloads); platform and study hosting/deployment):
https://cloud.google.com/security/gdpr/resource-center/contracts-and-terms

Pipe (video streaming; no copies stored): https://addpipe.com/gdpr

Sentry (error reporting; no identifiable information):
https://sentry.io/security/#hipaa-and-hitech
