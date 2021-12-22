##################################
Timing accuracy on Lookit
##################################

Lookit data provides detailed timing information which allows a researcher to
identify the part of each video recording that corresponds to a set of stimuli
being displayed to a participant.

Any online data collection system will have some variation in the exact timing
of what each participant sees (due to differences in their computer and browser setup, stimulus file size, et.) In other words, there can be small differences between *when Lookit instructs* stimuli to appear on a participants' computer, and *when those stimuli actually start in the browser*. How important this issue is depends on the size of this lag *and* the design and analysis of the study you are conducting.

These differences can have two kinds of impacts on the data that is collected:

* **Noise** is *random* variation in how exactly the reported and actual stimulus onset line up (i.e. due to small differences in internal clock synchronization). On average, differences due to noise will be zero: some reported windows might start slightly before the participant saw the stimulus onset, some slightly after.

* **Lag** is seen when Lookit reports that a stimuli is starting slightly *before* the stimulus is actually shown to the participant. This will tend to mean that the segment of video the frame timestamps identify will actually include a short segment of time *before* the stimulus starts.

How much noise or lag you can tolerate is up to your sample size and study. The larger your sample size, the less likely that noise will obscure the effect you are interested in. The more precise your study design is in its timing, the smaller a lag may be a problem for your analysis.

Thanks to recent work by Lookit researchers, we have some more specific information about how Lookit studies using audio & video stimuli (i.e. vs. text, image, etc.) are affected by lag. **In particular, studies using video stimuli will tend to have a 150-450ms lag, i.e. appearing to the participant later than the Lookit frame data will indicate.**

================================================
Descriptions of lag with video stimuli
================================================

This section reports findings by Aaron Becker, Christian Harms, Lisa Oakes,
Yi Lin, and Michaela DeBolt.

In response to a Slack conversation with Yi Lin and Jenny Wang, initiated by Yi on 9/2/2021, the Oakes lab did extensive testing of the timing of stimulus onset and compared when the stimulus actually started compared to when the frame data in lookit indicated that the stimulus appeared.

They tested this by running their experiments in Lookit and holding a mirror up to the camera. Thus the video recorded during the lookit session was the reflection of what appeared on the monitor, rather than the infants’ face (thanks to Yi Lin for pointing out this way of testing).

The team tested several browsers, internet speeds, and experiments and  observed that there is a consistent discrepancy of between 150 and 450 ms on every trial, including the calibration trials and the experimental trials.

All testing on this issue thus far has included video stimuli. And as of 9/7/2021 9:15 am the have not tested running on a windows machine.

======================================================
Descriptions of lag/offset with audio & visual stimuli
======================================================

In a related but separate issue, a few users have observed differences with experiment frame types that combine visual stimuli from one file with audio stimuli from a separate file. This makes it look to the participant like the audio they hear doesn't line up with the video they are seeing.

Unlike the first issue discussed above, this lag does *not* tend to happen on all trials, but is observed

This github issue documents the observed problem in more detail. One consequence of this issue is that audio cues may sometimes not be a fully reliable way to detect when another stimulus starts.

================================================
Affected browsers and experiment frames
================================================

The two officially supported browsers for Lookit are Chrome and Firefox. In the testing above, Chrome was generally found to have smaller lags than Firefox.

The following experiment frames are known to be impacted by one of these issues:

``exp-lookit-video``
``exp-lookit-video-infant-control``
``exp-lookit-images-audio``
