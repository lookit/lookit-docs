Progress updates
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is an archive of the progress updates that go out to the
lookit-research list, for reference. Links and pictures may be lost.

May 2020 [Slack announcement]
=============================

Quick update on launch timing, since we understand folks are eager to
start testing!

The good news is that despite recent challenges, we’re still shooting
for a launch within the next few months.

Here’s what’s left -

-  We’ve hired an outside security firm to do penetration testing &
   static code analysis before we open up the production server for you
   to run your studies. They’ll be wrapping up next week - so by the end
   of the month we’ll have an updated launch date. The amount of
   remediation we’ll need to take on is the big unknown for timing; if
   all goes smoothly and they don’t have any surprises to report, we’d
   be looking at about June 15th.
-  In parallel, there are two mid-size site-wide features we’re working
   on that need to happen prior to launch - one is a restructuring of
   permissions & setup of Labs to allow research groups to independently
   manage adding people (details here), another is setting up
   announcement emails (details here).
-  I’m still adding some frames (details here) and dealing with a
   handful of other changes. Please watch for an announcement by the end
   of the month with a more solid date!

Lastly, thank you all SO MUCH for your patience and support. This is a
delightful community, and your thank-yous and understanding have meant a
lot to me personally. To be honest, it’s been a bit of a hard transition
to working at home with three kids - especially since it feels like I
ought to be working all the time to get tools up and running for the
field. Although Lookit was obviously relatively well-positioned to
continue during a pandemic, it’s been a challenge to handle the surge in
interest in addition to continuing with our planned development path.
It’s just the two of us here, and MIT’s hiring freeze means we can’t
easily change that. So if you’re eager to get started, please check out
the list of ways to get more involved here.

Winter 2020
===========

Happy St. Patrick’s Day, Lookit friends!

Hope you’re coping ok with social distancing measures. We’ve been
getting a lot of inquiries about running studies given that labs have
shut down in-person testing. The short answer is we’re welcoming
everyone to get started, but you should understand that this isn’t an
immediate solution (see updated wiki).

Here’s the news about Lookit since the summer… 

- We’re aiming to launch this spring! (Yes, earlier than previously estimated.) That means
  letting anyone develop and submit their own studies on lookit.mit.edu. 
  My APS Observer article has an overview of the current status and what
  people can do to get started. (If you are interested in preparing a
  study to run on Lookit, please go ahead and start on these steps - you
  don’t need to ask for permission, unless you have some specific concern
  you want to check in about.) 
- A tutorial introduction to using Lookit
  is now available so that new researchers can set aside a known amount of
  time to work through step-by-step exercises and end up ready to put
  their own studies online. We have about 12 people working through it as
  far as I can tell. The first tutorial office hours are this afternoon! I
  also presented a workshop on Lookit at the “Open Developmental Science”
  preconference at CDS this fall (materials available at that link). 
- Undergrad student Kamaria Kaalund worked on social media outreach and
  better understanding our participants’ motivations during the fall term.
  The quick conclusion? It’s not as easy as we might hope to reach parents
  via Facebook or Instagram, even using creative human-generated content
  :) You can read her report on survey responses
  `here <https://docs.google.com/document/d/1AX2Ncacy_t46VQAgOZRfDmc_UToPEMTG_AEcUR2d-zM/edit?usp=sharing>`__.
- We have some new flyers for Lookit available. This turns out to have
  been exactly the wrong time to make them, but someday when families are
  out and about at playgrounds, libraries, etc. we will post them locally
  and are happy to send physical copies to you if you want to help out!
- Our beta testers have continued testing, and a pilot of one long-awaited
  study is now live: “Baby See, Baby Do?” (Laurie Bayet, American
  University) looks at newborns’ imitation of parents at home.

Platform development: 

- Rico’s finishing up transferring hosting over
  from the Center for Open Science, which will give us complete control
  over the CI/CD pipeline and more ability to scale up. There are a lot
  more moving parts than I realized. We also finished the recruitment
  dashboard which shows participation and registration over time, as well
  as allowing tabulating by various characteristics to evaluate how
  recruitment efforts work. 
- I’ve made substantial changes to the data
  download options to make it easier to analyze and share data, while
  minimizing the risk of unintentional disclosure of personal information.
  You can now download an overview with one line per response or a
  detailed file with data in a fairly standard ‘long’ format, both with
  data dictionaries / dictionary templates! You can omit potentially
  sensitive information like names, and even download children’s ages
  already rounded, to avoid storing birthdates at all. By default Lookit
  now provides child and account IDs specific to the study - so you don’t
  have to worry about the potential for de-anonymization via linking data
  across studies. (Changes summarized here and here)
- We’ve clarified
  some terminology and substantially simplified the user interface for
  study editing. No more “building dependencies” (that’s now “building an
  experiment runner”) and no more building separate containers for the
  experiment vs. the preview. When selecting the version of the experiment
  runner to use, you can see some information about what version you’re
  currently using and click “check for updates” to see what new is
  available. 
- Study previews now work exactly like participation, so
  that you can see how everything works (including what your data and
  video downloads will look like) without having to actually start your
  study. And you have the option to share your study preview so that other
  experimenters can access it to give feedback! 
- MIT’s Quest for Intelligence “Bridge” program has been working on evaluating solutions
  for automated gaze coding of developmental video, using datasets from
  Lookit and from Virginia Marchman’s lab. The most promising starting
  point, OpenGaze, has proven extremely hard to get running at all;
  they’re still trying, but also exploring some other avenues. A visiting
  PhD student from Antonio Torralba’s group here at MIT will be working on
  using an entirely new approach (reflection of the screen on the eye),
  which I think will be a longer-term solution if it works out. I do still
  think we need a dedicated person on this project, but realistically this
  is on hold for now given the pandemic and general disruption to labs. 
- A bunch more technical progress has happened in the background. It’s not
  very exciting to tell you bugs you didn’t know existed are fixed… but
  they are.

Funding: 

- Lookit is part of a collaborative Simons proposal to pilot a
  cognitive task battery (approximate number, prosocial agent preferences,
  visual prediction, CDI, …) in infant sibs of kids with autism. 
- We have funding for Rico and me for at least the next 12-18 months, but are
  still looking for ways to hire other necessary staff (recruitment, study
  support, someday ideally another developer), include more students,
  bring in consultants as needed, etc. We’re working with MIT Open
  Learning on a broader fundraising strategy, but for now, if you have a
  project you plan to run on Lookit and you’re applying for funding, we’d
  be grateful to hear about it and discuss writing in some appropriate
  amount of support for the platform!

What’s next: 

- Before launch we have a few features to finish up, but
  our major priority is getting an independent review of potential
  security issues (risk assessment/scan, penetration testing). We’re
  interviewing several companies now; administrative issues regarding
  setting up a contract while everything’s shut down are the major unknown
  hat will affect launch timing. 
- One of my priorities is adding
  experimental components to cover typical things people want to do on
  Lookit. If you have an idea of the study designs you want to run, it’d
  be really helpful to comment here describing functionality you would
  ideally like.

Summer 2019
===========

Happy Fall, Lookit friends!

Hope you’re enjoying the start of the semester. Here’s an update on what
we’ve been up to in the past six months.

We’ve primarily been focused on platform development, and have a lot of
progress to report since the last update:

-  The “consent manager” tool is live and in use! Researchers can view
   consent videos and mark them as valid/invalid. All permissions to
   access data now take into account the (centrally stored) consent
   review status; researchers can’t accidentally access or use any data
   before checking for a statement of informed consent. In a similar
   vein, in the rare cases where parents choose to withdraw all
   permission to use video at the end of a study, those videos are
   automatically made unavailable and deleted. These are some of the
   features we prioritized to reduce the potential for human error in
   data handling.

-  Families can see their own videos right away after participating, to
   check everything worked and what their kids were up to! And
   researchers can easily leave friendly feedback from the Lookit
   platform. This both helps make participation more rewarding for
   families and aligns with our ideal of respecting families as partners
   in discovery.

-  Families can now indicate languages their child speaks and some
   conditions and characteristics with checkboxes when they sign up,
   paving the way for research with special populations and eventually
   hosting studies in more languages.

-  Researchers can flexibly describe eligibility criteria for their
   studies using a boolean expression, referencing the child’s age,
   gestational age at birth, language background, and other
   characteristics.

-  Email functionality is much improved–it’s easier to select the
   appropriate participants, and emails sent via the Lookit platform are
   stored and downloadable by researchers.

-  Rico’s currently working on a recruitment dashboard to support
   evaluation of outreach efforts, showing various trends over time in
   how many families and kids are accessing Lookit and participating in
   studies, how old kids are, demographics of families, how they heard
   about Lookit, etc.

We’ve also been expanding functionality for the individual studies,
based on needs that have come up in beta testing:

-  Study frames now allow setting parameters based on previous data from
   the same session and child characteristics, allowing for conditional
   branching, personalization of stories or instructions, continuing
   training until some criterion is met, etc.

-  Webcam recording can either be conducted within individual frames or
   session-level recordings can be made by saying which frame to start
   and stop recording on

-  A child assent form (which can be shown only for children of a
   specific age and up, if desired) supports a standard assent workflow
   with multiple segments of pictures and text or audio/video
   explanations.

-  It’s easier to substitute values throughout a study and to make
   groups of frames.

Our beta testers are continuing to try out and provide feedback on the
platform, and the first few studies have been completed! Here’s the
current status….

-  “Mind and Manners” (Erica Yoon, Mike Frank): complete and included in
   Erica’s CogSci paper

-  “Flurps and Zazzes” (Lisa Chalik, Yarrow Dunham): completed first
   study, collecting another round of data

-  “Baby Euclid” (Molly Dillon, Liz Spelke): completed first study,
   preparing a conceptual replication

-  “Labels and Concepts” (Bria Long, Mike Frank): completed data
   collection, analyzing

-  “Look and Listen” (Halie Olson, Rebecca Saxe): data collection
   ongoing

-  “Your Baby, the Physicist” (Junyi Chu, Liz Spelke): data collection
   ongoing

-  “Baby Laughter” (Caspar Addyman): data collection ongoing

-  Several more studies are under active preparation to start testing:
   action planning in teens with autism (Pawan Sinha, MIT); neonatal
   imitation at home (Laurie Bayet, AU); and approximate numerosity
   judgments in deaf and hearing-impaired children (Stacee Santos, BC).

Good news and bad news on funding (we’re only partway back to the
drawing board).

-  Lookit will likely be included in a DARPA grant to develop AI systems
   that reach specific target developmental milestones (on the basis
   that we should know more about how human children behave if we want
   AI to behave like them!)

-  Our application to the Spencer Foundation was rejected, as were
   several collaborative proposals we were part of (e.g. NSF mid-scale
   infrastructure for online research, Caplan Foundation for the
   neonatal imitation study).

-  We would be happy to hear about ideas for collaborative proposals
   from folks who would like to run a particular project on Lookit, even
   ahead of the official launch.

Legal and logistical news: Research on Lookit is now approved via
researchers’ own IRBs, after they sign an institutional access
agreement. Six institutions have approved the agreement so far, and we
haven’t run into any major issues besides delays at MIT. To ensure we’re
all on the same page about the agreement, there’s now an informal quiz
about the Terms of Use to submit along with the signed agreement. (Feel
free to try it out - feedback is welcome!)

MIT’s Quest for Intelligence “Bridge” program is evaluating OpenGaze as
a starting point for automated gaze coding of developmental video, using
datasets from Lookit and from Virginia Marchman’s lab. This has been
slow to get started in part because they’re working with undergrad RAs;
we’re interested in what it would take to get someone dedicated to this
project.

Also I had a baby, Keoni, who joins her very proud brother and sister.
(That’s where your spring update went.)

Next steps:

-  I’m working on a tutorial introduction to using Lookit, so that new
   researchers can set aside a known amount of time to work through
   step-by-step exercises and end up ready to put their own studies
   online.

-  I’ll be at the “Open Developmental Science” preconference at CDS to
   present a workshop on Lookit. Let me know if you want to meet up
   sometime during CDS!

-  In parallel with the next features to work on, Rico will be working
   on transferring hosting over from the Center for Open Science and
   setting up a security audit before launch.

-  We’ll have an undergrad RA working this term on a comprehensive
   survey of recruitment and advertising options, selecting a few
   avenues to explore in depth.

-  We’re on track for launching on schedule (September 2020) or possibly
   sooner - we’re excited to build momentum and start growing a
   community of users.

Learn more / get involved:

-  Information about the current status of the project, our longer-term
   plans, how IRB approval works, etc. is available on the
   “research-resources” Github repo and wiki.

-  Overall documentation for using platform, specific experiment frame
   docs

-  Development planning is organized on Github Issues on the various
   Lookit-related repositories. Check out what’s planned when under
   “milestones,” add your own feature requests, or pick something to
   work on!

Winter 2019
===========

Happy almost spring, Lookit friends! Here’s an update for winter 2019.

The news:

-  Platform development is going well. You may have seen improvements to
   the “study edit” view if you’ve been using Lookit or staging-Lookit,
   including that you can now see your updated preview instantly upon
   changing your JSON, without having to “re-build” your study. We’ve
   been focusing recently on setting up permissions and workflows to
   enforce correct usage of data. We’re in the process of rolling out a
   “consent manager” tool in the experimenter interface that lets you
   see all the consent videos and record whether each one shows a parent
   making a consent statement. Only once you “accept” a consent video
   can you see and download the associated data and remaining video.
   This is something that anyone collecting data on Lookit had to do
   anyway, but it was up to the individual lab to figure out a process
   for checking consent before accessing and using data. The consent
   manager eliminates that duplicated work and also reduces the
   possibility of human error as the platform scales. (Here’s what it
   looks like. That’s Lookit developer Rico; he looks happier in real
   life, I promise.)

   ::

        Screen Shot 2019-03-18 at 4.23.07 PM.png

-  Adding functionality for the actual studies is also chugging along!
   I’ve been expanding methods for randomization and improving &
   generalizing individual frames. (E.g., below is a video configuration
   frame where you can specify text/images and whether the parent should
   be forced to “check off” each instruction and/or to make an example
   video so they can check their setup.) A lot of this work is invisible
   but should substantially speed up future development and/or make it
   easier for other people to contribute - e.g., updating dependencies
   and merging the ember-lookit-frameplayer and exp-addons repos into a
   single application.

   ::

        ExpVideoConfigQuality.png

-  Active studies: Testing is ongoing for Flurps and Zazzes (Lisa
   Chalik/Yarrow Dunham) and Your Baby, the Physicist (now run by Junyi
   Chu & Liz Spelke, as Melissa Kline has moved to the Center for Open
   Science!), although they’re down for the moment while the MIT IRB
   reviews our renewal.

-  Funding - we’ve submitted an invited proposal to the Spencer
   Foundation that would cover several studies and a share of platform
   development, and have a few other irons in the fire. (Rough state of
   affairs: if we were to get all the funding we’ve applied for, we’d
   actually be set to carry out our plans. But ideas are still very
   welcome!)

-  Legal - we’re about to start (in the next week, fingers crossed!) the
   first three studies conducted under non-MIT IRBs, using the Lookit
   access agreement! Institutions include Goldsmiths, London which
   needed an additional data sharing agreement signed because of GDPR.

-  MIT’s Quest for Intelligence “Bridge” program is providing some
   engineer time on automated gaze coding, first evaluating how starting
   points from both Antonio Torralba’s and Andreas Bulling’s groups do
   on video of babies. We have a small dataset and proposed standard
   posted for groups who want to share video data towards this effort,
   and as a first trial, a lot of data generously provided by Virginia
   Marchman to use for training.

-  On a personal note, I’m expecting a baby next month and will be out
   for a bit! I’ll follow up within the next few weeks with a leave plan
   for those of you directly affected.

Where to see current plans and progress:

-  Overall documentation for using platform, specific experiment frame
   docs (now with example screenshots!)

-  Information about the current status of the project, our longer-term
   plans, how IRB approval works, etc. is available on the
   “research-resources” Github repo and wiki.

-  Development planning is organized on Github Issues on the various
   Lookit-related repositories. You can add your own feature requests!
   Internal plans about what issues are being addressed when, and how
   long that will take, are organized in CodeTree - we’re happy to add
   you to the project if you’re curious.

Thanks for all your support and patience!

Kim

Fall 2018
=========

Happy holidays, Lookit friends! Here’s an update for fall 2018, just
under the wire.

The news:

-  Our new full-time developer, Rico Rodriguez, joined the project last
   month! (I can now write “we” and “team” with a clear conscience.)
   He’s gotten started by making the study build process (dramatically)
   more efficient, and adjusting the UI to allow researchers to see
   their changes instantly.

-  Development planning has migrated over to Github Issues on the
   various Lookit-related repositories. You can add your own feature
   requests if you want! Internal plans about what issues are being
   addressed when, and how long that will take, are organized in
   CodeTree - we’re happy to add you to the project if you’re curious.

-  Information about the current status of the project, our longer-term
   plans, how IRB approval works, etc. has migrated to a
   “research-resources” Github repo and wiki.

-  Surprising no one, recruitment is a lot easier if you pay the
   participants :)

-  Alpha testing studies: Testing for Mind and Manners (Mike Frank/Erica
   Yoon) is complete! Testing is ongoing for Flurps and Zazzes (Lisa
   Chalik/Yarrow Dunham) and Your Baby, the Physicist (Melissa Kline/Liz
   Spelke). Tell your friends with 6-7 year olds and babies! :) There
   are several studies in the works to support gradual recruitment
   efforts - see the list here.

-  The WebRTC-based webcam recording approach deployed this summer is
   working much more reliably. I’ve also started generalizing and
   improving the individual “frames” that researchers use to build their
   experiments. (For instance, participants now have a button to
   download a PDF of their consent form. Thrilling stuff, I know!)

-  Setting up a collaboration to make automated gaze coding a reality is
   coming along! MIT’s Quest for Intelligence “Bridge” program may
   (tentatively!) be able to provide support, and we have promising
   starting points from both Antonio Torralba’s and Andreas Bulling’s
   groups (example of OpenFace detecting partially-occluded child’s
   face). We have a small dataset and proposed standard posted for
   groups who want to share video data towards this effort, and as a
   first trial, a lot of data generously provided by Virginia Marchman
   to use for training.

-  Funding - our NSF grant has started, and we have several other irons
   in the fire. We’re still looking to raise a total of about $1.0M to
   get through 2021 without depending on any income from a fee
   structure, so additional leads or ideas for collaborations are always
   welcome.

-  Legal: a few other schools have actually signed the Lookit access
   agreement and approved IRB protocols involving data collection on
   Lookit! We are trying this process out already with collaborators in
   the UK and Canada, and things are going relatively smoothly. One
   ongoing challenge is GDPR: we can’t officially guarantee that
   participants aren’t in the EU. This isn’t a big deal for MIT - we
   just comply with GDPR, which is pretty sensible anyway! - but it may
   mean that some schools want an additional contract.

-  The documentation remains up-to-date. Wait, does that belong here? Is
   that exciting news? BUT OF COURSE. (Just leaving this one from last
   time.) The overall docs are now in their own Github repo to make it
   easier for folks to contribute if they want. Overall documentation
   for using platform, specific experiment frame docs.

What’s next: mostly hunkering down and coding.

-  Rico’s working on making the platform more usable and powerful for
   both researchers and participants, to get ready for proper “launch”
   in about 18 months.

-  I’m working on making it possible for researchers to implement their
   studies independently, by expanding the set of experiment frames &
   their functionality.

-  If you’re interested in getting yourself or your students (more)
   involved, take a look at the list of ways to help here.

Thanks for all your support and patience!

Kim

Summer 2018
===========

Hi folks,

Having skipped the spring update, there is now lots of exciting news to
share about Lookit.

The news:

-  We’re deploying a new WebRTC-based solution for webcam recording - no
   more Flash - today! This should make the participant experience much
   smoother, in turn making recruitment easier.

-  Our NSF grant was recommended for funding and should start in
   September! Thanks to a few other solid leads, we’re funded through
   mid-2020 and will at least be able to launch the platform. (We’re
   still looking to raise about another $1.1M total so we’re not
   initially dependent on a fee structure, so additional leads or ideas
   for collaborations are always welcome.)

-  MIT’s Office of General Counsel has approved our privacy policy and
   terms of use for Lookit. From now on, researchers using Lookit will
   sign an institutional agreement governing acceptable use of the
   platform, and apply only to their own IRBs for approval of their
   studies. (MIT decided that our own access to the data to run the
   platform does not constitute research, so there’s no protocol needed
   here!)

-  We finally got official permission (…forgiveness) from MIT’s tech
   licensing office to keep all our code open-source. (They eventually
   decided they didn’t need to review all >100 hand-entered dependencies
   that we don’t redistribute.)

-  Our alpha testers are trying out compensating participants with gift
   cards, to see how that changes recruitment! (Eventually, we plan to
   have a more centralized system for compensation, where participants
   earn points they can pool across kids and studies and then exchange
   for gift cards, donations to charity, or gear.)

-  Speaking of the alpha testers, testing for Molly Dillon’s study Baby
   Euclid is (tentatively) complete. We still have three studies up and
   running - Flurps and Zazzes (Yarrow Dunham/Lisa Chalik), Mind and
   Manners (Mike Frank/Erica Yoon), & Your Baby, the Physicist. I’m
   excited to have Melissa Kline & Liz Spelke taking over the physics
   study (dense longitudinal sampling of infant preferential looking)
   while I focus more on the platform itself. We already have 12
   participants who’ve completed at least 10 sessions!

-  The documentation remains up-to-date. Wait, does that belong here? Is
   that exciting news? BUT OF COURSE.

-  Our undergrad Rianna got us started trying out social media outreach
   - we now have Instagram and more active Facebook pages. (FYI, though,
   directly recruiting 7-month-olds on Instagram did not work even
   though it sounded kind of brilliant.)

What’s next:

-  I’m working on hiring a full-time developer to get started on all the
   functionality we’ve planned to complete before launch. In the
   meantime (i.e., while MIT deliberates on whether it’s really
   appropriate for me to pay a developer more than a postdoc…) I’m
   chipping away at it myself.

-  The administrivia continues. One exciting current challenge:
   navigating a path to accepting payment for services and then not
   paying 59% overhead on it.

-  The best place to find up-to-date links to all the planning docs is
   still here. In particular we now have a 3-year plan!

-  If you’re interested in getting yourself or your students (more)
   involved, take a look at the list of ways to help here. If you
   haven’t already, you can fill out a survey to let us know what you
   want to do with Lookit. (Thanks to everyone who’s responded!)

-  Let me know if you want to be a guinea pig and get the ball rolling
   at your own institution on getting the access agreement signed. Then
   you’ll be ready to use Lookit, and I’ll have some advance warning on
   snags in the process.

Thanks for all your support and patience!

Kim

Winter 2018
===========

Hi folks,

Happy 2018! Here’s an update on what the Lookit project has been up to
recently.

-  We\* finished a transition this fall to a new version of the Lookit
   site that allows multiple experimenters to create, edit, post, and
   access data from their own studies. Our beta testers are using this
   site to prepare and/or test for their own studies.

-  An IRB protocol to cover running the platform for use by outside labs
   is under review at MIT. Researchers using Lookit will apply to their
   own institutions’ IRBs for approval for their studies, and will
   probably sign an institutional agreement about the details of
   acceptable data collection and dissemination, similar to Databrary’s.

-  We’ll have at least one undergraduate for the spring term focusing on
   family recruitment, to start building a userbase and exploring
   options for publicity. We also have a volunteer developer, Rico,
   supporting some exploration of tech choices, and a volunteer from
   Scott Johnson’s lab, Bryan, helping with feature development!

-  We’ve wrapped up our subcontract with the Center for Open Science,
   and will shortly be transferring the github repos for Lookit code
   over to a Lookit org account. Although they won’t be continuing to
   work on this project, they are providing hosting and support until we
   can set up a contract with another firm for continued development.

-  We submitted an NSF grant (Developmental Sciences) last week that
   would fund some of the initial software development needed. I’d also
   like to submit a larger proposal to the new “Cyberinfrastructure for
   Sustained Scientific Innovation (CSSI) - Data and Software: Elements
   and Frameworks” program, due in April. Still no concrete news on
   other funding possibilities. I’ll be giving a talk in a few weeks to
   Resource Development here at MIT.

-  The best place to find up-to-date overall plans/schedules is still
   here. Linked there you can also see and comment on ideas for
   recruitment, software development tasks, etc.

-  If you’re interested in getting yourself or your students (more)
   involved, take a look at the list of ways to help here. The primary
   challenge we’re facing right now is finding funding, but there are a
   lot of ways to contribute even if you hate grant-writing.

Next steps for me:

-  Quickly implementing several “mostly for fun” studies so that there’s
   content on Lookit for kids from birth through 7 years old, to support
   recruitment efforts.

-  Continuing to work on setup - fundraising, IRB approval, tech
   licensing agreement, how to accept payment through MIT, recruitment,
   etc.

-  Designing and documenting experimental frames to cover typical
   developmental protocols.

Thanks all for your support and interest - looking forward to scaling up
and getting to work with more of you!

Kim

-  Don’t get too excited - this is the mathematical “we,” i.e. the
   opposite of the royal “we,” throughout.

Fall 2017
=========

Hi folks,

Just writing with a quick update about the Lookit platform! Here’s where
we are:

-  I graduated! I’m now working on Lookit as a research scientist, still
   at MIT.

-  In the next few weeks, we’re finishing up a transition to a new
   version of the site that allows multiple experimenters to create and
   post studies on Lookit–with permissions to edit, manage, and view
   data only from their own studies. Hooray!

-  We still have some work to do on logistics, software development, and
   (readiness for) recruitment before making the tool open to the
   community, but that’s still the goal.

-  We’re in the process of figuring out how to fund the project going
   forward. (Right now it’s just me, and just until July.) Ideas are
   welcome!

If you want all the gory details, please see this document which lays
out a vision for the platform, current status, what we’d need to
actually launch, my schedule, etc. (Note that this proposes creating a
board that would handle fundraising, but we’re actually first waiting to
hear back about some potential funding that might make a formal board
unnecessary at this point.)

Soon I’ll be looking to choose a few studies to keep on Lookit to
support recruitment - so that there’s something “there” for infants
through 7yos when we get them to the site. The hope is for these studies
to be (a) fun and interesting for families (primary criterion) - ideally
we want something super-cute that kids love, and parents learn from and
want to tell their friends about. Interactive with the parent is great.
(b) easy to implement (both programming-wise, and for parents - i.e.,
they don’t have to have a set of 10 identical red blocks and a whisk)
(c) interesting enough scientifically that a lab will analyze and
publish the data. (Does not need to be groundbreaking science,
“interesting to parents” is the better criterion.)

If you have an idea that would be JUST SO CUTE but you have to keep
reminding yourself that you’re not totally sure what we’d learn from it
scientifically… this is that idea’s moment. Not-quite-experimental ideas
are fine! (e.g., “demonstrate something that reliably makes your baby
laugh!”, “have your 3yo tell a joke,” “record 5min of your toddler’s
private speech,” etc.) Take advantage of being at home and in diverse
can make use of comparisons like right before vs. right after naptime…
whether kids are bilingual… in a living room vs. office vs. kitchen… you
can look at sibling interaction in the home… you can study newborns(!)
as long as you don’t need an especially controlled environment…

Send any proposals in the next month or so, and we’ll select a few to
start working on in December!

best, Kim
