FAQ
=====

What is the name of this platform? LoOkIt, Look!t, LooKit?
----------------------------------------------------------

It is called ``Lookit``. Like the exclamation. In particular it is not
called ``LookIt`` or ``Lookit!``, although the latter does sound extra
exciting!

We’ll respond to whatever you call us*, this is just for folks writing
up results or designing recruitment materials, to avoid confusion.

\*Maybe not LooKit, that sounds like a different thing.

Does my study need to be approved by MIT’s IRB?
-----------------------------------------------

Nope! You need ethical approval only from your own institution. You’re
responsible for getting that, although there is example language here
for common elements of Lookit studies.

Separately, your lab and institution will need to sign a one-time
institutional agreement with MIT.

Who is the institutional agreement with?
----------------------------------------

MIT

Who should I list as a contact in case our contracts/sponsored programs/legal/etc. office has questions?
--------------------------------------------------------------------------------------------------------

Melissa Kline Struhl, lookit@mit.edu

(Note: In early 2024 while Melissa is on maternity leave, these messages will still be recieved by 
another member of the CHS team.)

Is there an IRB protocol at MIT that covers Lookit staff’s use of the data on the platform?
-------------------------------------------------------------------------------------------

No, because we only use the data for a limited set of purposes that
aren’t considered human subjects research by MIT. See the `determination
letter <https://github.com/lookit/research-resources/blob/master/Legal/MIT%20non%20human%20research%20determination%20letter.pdf>`__
and `corresponding
protocol <https://github.com/lookit/research-resources/raw/master/Legal/Standard%20Application%20Lookit%20protocol%20ruled%20non%20human%20subject%20research.doc>`__.

Most of my participants don’t speak English. Can I test in another language?
----------------------------------------------------------------------------

Short answer: Yes, but.

Longer answer: Yes, and we want to support this much more fully in the
future. For now, there will be some complications, but if you’re up for
dealing with them, you’re welcome to design your study in any language
you want:

-  The sitewide registration and demographic forms are currently in
   English only, although setup for translation of these common elements is underway
   via ManyBabies-AtHome! If you're interested in testing in a particular language, 
   please reach out to their translation group to see if you can contribute. This will
   help other people who want to test in your language, too!
   
-  You'll likely need to write a translation file for your language for the components 
   in the studies - e.g., consent, setup. Once that's available, you can specify a 
   language for your study and any hard-coded text will be translated. (See the experiment runner's :ref:`language parameter<elf:translation>`.)
   
-  We haven’t currently set up to flag which language a study is in and
   let participants filter (or get the right version of a study) by
   language. So non-English studies in general will usually to be set up
   as “non-discoverable” - not listed on lookit.mit.edu/studies, just
   accessible by direct link - to avoid confusion.
   
-  You will need to handle any tech support for your participants
   directly, or translate for us.
   
-  You will still need to get peer feedback from someone outside your
   research group on your study setup - this is especially important as
   we may not be able to tell much about the tone and clarity of your
   instructions.

We’re thinking about this long-term but it hasn’t been an immediate
priority, especially as we’re largely funded by the US government.
Ideas/comments on how it’d ideally be set up are very welcome
`here <https://github.com/lookit/lookit-api/issues/181>`__.

Where are the data stored?
--------------------------

A1: In the USA.

A2: Videos are stored primarily on Amazon S3. Lookit (including databases with 
participant and session data) is hosted on Google Cloud Platform.

How is participant data secured?
--------------------------------

Non-video data, including PI/SPI such as children’s birthdates and
nicknames, are stored using the Google Cloud SQL service of the Google
Cloud Platform; the data security measures implemented by the Google
Cloud Platform transitively apply to these data. All data are encrypted
at rest using AES-256, and encrypted in transit when moving outside
Google infrastructure. For an extensive treatment of the
security-related provisions of this cloud infrastructure, please see
`Google’s white paper <https://cloud.google.com/security/infrastructure/design/resources/google_infrastructure_whitepaper_fa.pdf>`__.
Service Accounts are used for all services provided by the Google Cloud
Platform project instance. Permissions for access to data via the Lookit
interface and API are handled using Django Guardian according to best
practices.

User passwords on Lookit are required to be 16+ characters. Participants
can access only their own video data; however, as researchers may be
able to access video and other data from many participants in studies
they have run, access to the Experimenter section of Lookit requires
two-factor authentication. Researchers are responsible for the security
of their Lookit credentials and for the security of data that they
download using Lookit, although the platform is engineered with a focus
on making it more difficult to accidentally disclose sensitive
information. (For instance, consent must be confirmed before session
data or video are accessible; child names and birthdates are by default
omitted from session data downloads. If a participant withdraws video at
the end of a study, that video is automatically made inaccessible to the
researcher and deleted.)

Video data are routed securely from the web client to Amazon S3 through
the Pipe media player (https://www.addpipe.com/), but not stored by
Pipe. The requisite credentials for both accounts are encrypted and
stored in the etcd database of a Google Kubernetes Engine instance, per
the defaults provided by the platform. Video data are encrypted at rest
on S3 using AES-256.

All dependencies for the Lookit-api and Ember-lookit-frameplayer
repositories are continuously scanned by Github for security
vulnerabilities, and the unit tests conducted as part of our CI/CD
pipeline whenever code is updated cover many of the platform-specific
security considerations (e.g. regarding appropriate access to specific
data for specific roles).

Researchers can only access data from studies where they have permission
to view data. Session, child, and family data are only possible to view
after consent has been confirmed. The permissions granted to researchers
are quite granular, so that researchers can be granted access to only
the minimum functions needed for their role, without any unnecessary
risk to participant personal data. Researchers can contact participants
through the platform, but do not receive access to participant email
addresses (unless participants email them).

We hired an external security consulting firm to conduct detailed manual
penetration and a security risk assessment prior to launch, in spring
2020. Results of this assessment are available upon request (email
lookit@mit.edu).

Does Lookit collect IP addresses?
---------------------------------

No.

How is re-identification prevented?
-----------------------------------

There are several measures in place to *discourage* re-identification,
including:

- Researchers using the Lookit platform do not receive direct access to participant email addresses. They can contact participants using the Lookit interface based on the participant’s random ID, but see an email address only if a participant contacts them.
- Although each child and each family registered on Lookit is associated with a global unique random identifier, they are also associated with a different random identifier specific to each study, and the latter is the primary ID used by researchers. Per the Terms of Use, researchers may not publish the global identifiers, as these could link data across studies in ways that could lead to unanticipated re-identification potential. 
- Default data downloads minimize the amount of personally identifiable information included: e.g., researchers have to specifically request columns for the child name, birthdate, parent name, etc. By default, neither the child’s birthdate nor exact age at time of participation (which could be combined with timestamps to produce a birthdate) are included, and a rounded age is provided for ease of responsibly publishing raw data. 
- Per the Terms of Use, no participant demographic information may be published in such a way that individual responses can be linked to participant video.

However, we cannot fully *prevent* re-identification using solely
technical means, as some of the data collected on Lookit is by nature
potentially identifying (e.g., video of faces). All researchers using
the platform must have IRB approval for data collection, which includes
assurances that they will not attempt to re-identify participants. The
Terms of Use also require approval for any integration of outside
information about participants (e.g., if participants are recruited from
a specific registry that already has data about the families).
