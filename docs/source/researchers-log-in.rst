##################################
Logging in
##################################

Logging in as a researcher
--------------------------------------

1. Go to the `OSF <https://osf.io>`_. If you don't already have an account, click 'Sign Up' at the top right and create one. You'll use this account to log in to Lookit.

2. Enable 2-factor authentication on your OSF account. See `these instructions <https://help.osf.io/hc/en-us/articles/360019738054-Enable-or-Disable-Two-Factor-Authentication>`_.

3. To log in to Lookit as a researcher, go to  `<https://lookit.mit.edu/exp/>`_. There is also a "Researcher login" link at the bottom of the Lookit home page that will take you here. (Don't use the regular "Login" link at the top! Your researcher password won't work.)

4. Click on 'Open Science Framework' to log in using your OSF account:

  .. image:: _static/img/login_to_exp.png
      :alt: Login to experimenter image
    
5. You will be prompted to enter your OSF credentials: 

  .. image:: _static/img/osf_login.png
      :alt: Enter your osf credentials
      :width: 200
      :align: center
      
If you see a message that the account is not active, reach out in the #tech-support channel on Slack and we can fix it - you probably accidentally tried to an account on production before it was open, and it was inactivated.
    
If you see a message that there is already a participant account with that email address, you have two options: You can either make a new OSF account with a different email address and use that as a researcher, or you can change the email address for your Lookit participant account.
      
6. You should be redirected to a list of studies:

  .. image:: _static/img/login_to_exp_success.png
      :alt: Redirect after login to experimenter
      
7. If this is your first time logging in, you will likely want to create a new lab or request to join a lab (see :ref:`Labs on Lookit<labs>`) so you can share your studies within a lab, but you can go ahead and get started by creating studies in the "Sandbox lab."

Logging in as a participant
-----------------------------

The "Login" link at the top right of the Lookit site is for (non-researcher) participants. 

You do not need to make a separate participant account in order to participate with your own kids: you can log in as a researcher, then go back to Lookit and you will still be logged in. However, if you prefer to have a separate participant account, you can do so by logging out and clicking the "Sign up" button. You'll need to use a different email address than your OSF account uses. 
   
   .. image:: _static/img/participant_login_links.png
    :alt: Links for participants to log in and sign up
    

.. _staging server:

The Lookit staging server
---------------------------------------------

The Lookit "staging server" is a separate instance of the platform from the "production server" where actual studies take place. This is a sandbox environment where we try out new features, without having to worry about messing with actual data or inconveniencing users if we break something. 

The staging server is located at `<https://lookit-staging.mit.edu/>`_ and you'll log in at `<https://lookit-staging.mit.edu/exp/>`_. 

Logging in works just the same way as at lookit.mit.edu, except that you have to use a "staging OSF" account, rather than your regular OSF account. You probably don't have a staging OSF account yet; you'll need to make one.

There is **absolutely no actual data collection allowed** on the staging server for security reasons. 

You might use the staging server if:

* You want to have a totally separate "sandbox" version of your lab on Lookit to use for training new lab members, study development, demoing something, etc. without any concern that you could possibly disclose participant information
* You're helping to try out a new feature before it's added to production
* You're making especially heavy use of Lookit while developing your own studies, working on an adapter so you can hook up another type of experiment runner, etc. - to avoid unusual load on the production server we might ask you to do your development using staging. 

   
Logging in when running Lookit locally for development
-------------------------------------------------------

   If running Lookit locally, you will instead need to authenticate through the admin interface as described in `Setup for custom frame development`_.



.. _`Setup for custom frame development`: frame-dev-setup.html
