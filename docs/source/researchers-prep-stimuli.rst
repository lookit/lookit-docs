.. _stim_prep:

Preparing stimuli
======================



Creating audio and video files
------------------------------

Most experiments will involve using audio and/or video files! You may find that there are more 'stimuli' to create than you'd have in the lab, because 
in the lab you have the luxury of being present to explain what's going on. When you design
an online study, you may need to record many of the things you'd say in the lab, or create 
pictures or demos to show how things work. This includes not just storybook audio, but 
little clips like "We're almost done!" or "Okay, go ahead and turn around now." 

Creating video instructions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Several labs have been having success filming video instructions for families, which can be easier to process for many families (and friendlier) than text instructions. This doesn't need to look "professionally produced" to be great; the important pieces are pretty low-tech!

Here are some tips from the community:

- Smile and try to channel the same excitement and energy you'd have welcoming a family to the lab. There is no scientific need to speak in a dry, measured tone here. (Or... in most cases, really.) And remember, you think your research question is interesting enough to think about for months and months!

- Keep a simple, homogeneous background (e.g. a blank wall or curtain). 

- Outline or script what you're going to say before filming the video. (You can even use a free web-browser-based teleprompted to show you your notes!)

- Add video- or image-in-video examples to make the video more engaging and make it easy to follow when you explain what's going to happen. (This can make a HUGE difference and in most cases avoid the need to give parents the option to preview the stimuli separately). 

- It's normal not to be able to do 2 minutes straight of talking without making mistakes! Don't worry about trying to get a continuous "good shot," just edit the video to cut pauses or errors. 

- Make sure to edit the audio track the same way you would for audio stimuli to reduce background noise.

- Provide closed captioning for accessibility (even many hearing parents will find it easier to process this way), and/or provide "alt text" for the video as shown in the :ref:`elf:exp-lookit-instruction-video` frame. 


Basic audio editing
~~~~~~~~~~~~~~~~~~~~

For basic editing of audio files, if you don’t already have a system in
place, we highly recommend `Audacity <http://www.audacityteam.org/>`__.
You can create many “tracks” or select portions of a longer recording
using labels, and export them all at once; you can easily adjust volume
so it’s similar across your stimuli; and the simple “noise reduction”
filter works well. At a minimum, even if these are not 'stimuli' per se (e.g., verbal instructions), 
we recommend 

1. Using **noise reduction** to make speech clearer and remove any background 'buzz' during pauses. First select a segment of silence to analyze, then apply noise reduction across the whole audio recording; you may need to play around with the defaults to get excellent noise reduction without distortion, but it does a pretty good job out of the box.

2. Using the **'amplify'** filter to make all stimuli and instructions approximately equally loud (by default, it makes a segment of audio as loud as possible without clipping).

3. **Trimming** ALL of the silence from the beginning and end of the audio clip. This silence may not be especially noticable when you simply play the file, but it translates into an unnecessary delay between whenever you trigger the audio file to play in your study and when the relevant sound actually starts.

For editing of video files, we recommend getting comfortable with the command-line tool
`ffmpeg <https://ffmpeg.org/>`__. It’s a bit of a pain to get used to,
but then you'll be able to do almost anything you can imagine with audio and video files.

File formats
~~~~~~~~~~~~

To have your media play properly in a web browser, you need to choose file format(s) that
are supported by that browser. Note that AVI and MOV files generally cannot be played in a web browser without installing special plugins.

We used to recommend creating both mp4 (H.264 video codec + AAC audio codec) and webm versions of video, and mp3 and ogg versions of audio. Now mp4 and mp3 files are supported by almost all modern browsers (and we're only officially trying to support Firefox and Chrome), so you should be fine making just mp4 for video and mp3 for audio. You can look up browser support for specific formats at `CanIUse <https://caniuse.com/?search=mp4>`__; see `MDN <https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats>`__ for a comprehensive overview of this topic. 

If you don't already have your files in an appropriate format, the easiest way to convert 
them (especially if you have a lot to convert) is to use the command line tool ffmpeg. 

Here’s an example command to convert a video file INPUTPATH to mp4 with
reasonable quality/filesize and using H.264 & AAC codecs:

``ffmpeg -i INPUTPATH -c:v libx264 -preset slow -b:v 1500k -maxrate 1000k -bufsize 2000k -c:a libfdk_aac -b:a 128k OUTPUTPATH``

And to make a webm file:

``ffmpeg -i INPUTPATH -c:v libvpx -b:v 1000k -maxrate 1500k -bufsize 2000k -c:a libvorbis -b:a 128k -speed 2 OUTPUTPATH``

Converting all your audio and video files can be easily automated in
Python. Here’s an example script that uses ffmpeg to convert all the m4a
and wav files in a directory to mp3 and ogg files:

.. code:: python

   import os
   import subprocess as sp
   import sys

   audioPath = '/Users/kms/Dropbox (MIT)/round 2/ingroupobligations/lookit stimuli/audio clips/'

   audioFiles = os.listdir(audioPath)

   for audio in audioFiles:
       (shortname, ext) = os.path.splitext(audio)
       print shortname
       if not(os.path.isdir(os.path.join(audioPath, audio))) and ext in ['.m4a', '.wav']:
           sp.call(['ffmpeg', '-i', os.path.join(audioPath, audio), \
                  os.path.join(audioPath, 'mp3', shortname + '.mp3')])
           sp.call(['ffmpeg', '-i', os.path.join(audioPath, audio), \
                  os.path.join(audioPath, 'ogg', shortname + '.ogg')])
               
.. _putting-stimuli-online:               
                
Putting your stimuli files online
-----------------------------------

.. admonition:: HTTPS vs HTTP

    Wherever you put your stimuli, you need to serve them using HTTPS, meaning your URLs should start with https:// - **not** http://. If you use HTTP (not secure) your stimuli may not display at all in modern browsers, and they introduce security risks. You can learn more `here <https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content>`__.


You are responsible for hosting your study stimuli online somewhere. You have a variety of options, including:

* Most universities offer some form of free static web hosting associated with your university account. This might be a nice option because (a) it's free and (b) it's actually kind of your IT department's job to help you with it. Here are some examples:

  * `MIT <http://kb.mit.edu/confluence/pages/viewpage.action?pageId=3907182>`_
  * `Pittsburgh <https://www.technology.pitt.edu/help-desk/how-to-documents/creating-your-own-website>`_
  * `Michigan <http://www.umich.edu/~umweb/how-to/homepage.html>`_
  * `Cornell <https://it.cornell.edu/static-hosting>`_
  
  The process for accessing your university storage, and for setting up a lab-wide account, will vary by institution. You can ask your IT department for instructions - what you want to ask about is "static web hosting" for your stimuli or "online file storage." 
  
  You do **not** need to "set up a web server" (they will assume you want to do something more complicated and run backend code).
  
* GitHub repo: This is also free! And it offers the advantage that you can keep track of any changes to your stimuli over time in a very robust, transparent way. This may be especially handy when you go to publish your work - all your stimuli are already publicly available, with changes logged. 
  You may be most familiar with Github as a place to store and collaborate on code, but it can be used for any files. There are detailed directions available in the `Lookit stimuli template repo <https://github.com/lookit/lookit-stimuli-template>`_ for putting your own stimuli on GitHub - no experience required!  

* `Google Cloud Storage <https://cloud.google.com/storage>`_: This is free or very cheap and again fairly straightforward to use. We haven't used it personally, so if you do, please consider adding to these instructions!

* `Amazon S3 storage <https://aws.amazon.com/s3/>`_: This is very cheap (likely a few cents per month) and fairly straightforward to use. You will need to create an Amazon Web Services account and create a "bucket" where your stimuli will live. You will also need to make that bucket's files public, which is not the default. You can follow steps 3 and 4 of `this walkthrough <https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html>`_ to do so. Then you can use the web interface to create folders and upload your files. They will be accessible at URLs like ``https://BUCKETNAME.s3.amazonaws.com/STUDYNAME/img/cats.jpg``.


.. admonition:: What about Google Drive or Dropbox?

  You may already be accustomed to sharing files using services like Google Drive or Dropbox, and be wondering why you can't just make your files public there. Technically, you can. However, you will run into a number of annoying practical issues: for instance, your file links will be incomprehensible random strings, which will make it difficult to interpret, debug, or change your Lookit study protocol, especially for anyone who wants to understand what you did in the future. You will not be able to use relative file paths in Lookit as described below, since your files' organization in folders isn't reflected in the URLs. Also, if you or your collaborators change a file, the URL may change in ways you didn't predict, breaking something in your study. 
  
  In short, we really don't recommend it, even though these tools are great for file sharing in other circumstances.   


.. _stim_directory_structure:

Directory structure
---------------------

For convenience, many Lookit experiment frames use an `expand-assets mixin <https://lookit.readthedocs.io/projects/frameplayer/en/latest/mixins/expand-assets-doc.html>`_ that allows you to define a base
directory (``baseDir``) as part of the frame definition, so that instead
of providing full paths to your stimuli (including multiple file
formats) you can give relative paths and specify the audio and/or video
formats to expect (``audioTypes`` and ``videoTypes``). Please see the linked documentation for details on how to specify your base directory and how to structure your files in it!

Helpful resources
-------------------

* [Slides] `Stimuli preparation and hosting for Lookit (Nicole Cuneo) <https://github.com/lookit/research-resources/raw/master/Training/Stimuli%20preparation%20and%20hosting%20for%20Lookit.pptx>`__

* [Slides] `FFMPEG starter powerpoint (Nicole Cuneo) <https://github.com/lookit/research-resources/raw/master/Training/FFMPEG%20Starter%20Powerpoint.pptx>`__

* [Code] `Some example FFMPEG commands (Kim Scott) <https://github.com/kimberscott/ffmpeg-stimuli-generation>`__

Tips and tricks (advanced)
---------------------------

Setting up a CDN (optional)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you are very concerned with optimizing speed of delivery of your stimuli for users worldwide, best practice is to use a Content Delivery Network (CDN). You can read a description of what this is and when it might be helpful `here <https://gtmetrix.com/why-use-a-cdn.html>`__. This is unlikely to be necessary for most Lookit researchers, but if you do choose to set one up, it's cheap and reasonably straightforward. One option we have used successfully is Amazon CloudFront.

Making dummy stimuli
~~~~~~~~~~~~~~~~~~~~~~

Sometimes you may not have your stimuli actually ready yet, but you want to make sure your
experiment will work as intended once they're ready. Here's an example of using ffmpeg to
make some "dummy" images of text to represent distinct exemplars of various categories. 
You could also create videos by setting the duration in seconds (here d=0.01) to something 
longer and using an mp4 or webm extension for output instead of jpg.

.. code:: python

    import os
    import subprocess as sp
    import sys

    baseDir = '/Users/kms/Desktop/labelsconcepts/img/'

    for catDir in ['nov1', 'nov2', 'nov3', 'cats', 'dogs', 'iguanas', 'manatees', 'squirrels']:
        os.mkdir(os.path.join(baseDir, catDir));
        for iIm in range(1, 12):
            text = catDir + '.' + str(iIm)
            output = os.path.join(baseDir, catDir, str(iIm) + '.jpg')
            sp.call(['ffmpeg', '-f', 'lavfi', '-i', 'color=c=gray:s=640x480:d=0.01', '-vf', 
                "drawtext=fontfile=drawtext='fontfile=/Library/Fonts/Arial Black.ttf':text='" + text + "':fontsize=64:fontcolor=black:x=10:y=10",
                output])