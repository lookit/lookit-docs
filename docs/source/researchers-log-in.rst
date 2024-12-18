##################################
Registration and login
##################################

.. _login:

Logging in
--------------------------------------

1. Click "Login" from the `CHS home page <https://childrenhelpingscience.com/>`_. Both researchers and participants log in from this form. 

   .. image:: _static/img/login/login_homepage_link.png
    :alt: Link on homepage to log in 

2. Enter your email address and password. After logging in, you can participate in studies, view past sessions, and manage your account or registered children.

   .. image:: _static/img/login/login.png
    :alt: Login screen

3. If you are logging in to a researcher account, you will additionally be prompted for a one-time password from Google Authenticator so that you can access the researcher section.

   .. image:: _static/img/login/login_2fa.png
    :alt: 2FA login prompt
       
Creating a researcher account
--------------------------------------

1. Go to `the researcher registration form <https://childrenhelpingscience.com/registration/>`_. (You can also get here from the `CHS home page <https://childrenhelpingscience.com/>`_ by clicking "Sign up" and then following the link to register as a researcher instead of a participant.)

   .. image:: _static/img/login/login_researcher_registration.png
    :alt: Researcher registration screen

2. Fill out the form and click "create account."

3. You'll be taken to a page like this to set up two-factor authentication (2FA), which you'll need in order to access the researcher section of CHS. If you haven't already, download the Google Authenticator app on your phone. Then follow the directions on this page to activate 2FA for your account.

   .. image:: _static/img/login/login_2fa_setup.png
    :alt: Two-factor authentication setup screen

4. You're logged in! You should be redirected to a page of studies like below. You will likely want to create a new lab or request to join a lab (see :ref:`Labs on CHS<labs>`) so you can share your studies within a lab, but you can go ahead and get started by creating studies in the "Sandbox lab."

   .. image:: _static/img/login/login_success_redirect.png
    :alt: CHS studies page visible after researcher login

Creating a participant account
--------------------------------------

You do not need to make a separate participant account in order to participate with your own kids: you can log in as a researcher, then go back to CHS and you will still be logged in. However, if you prefer to have a separate participant account, you can do so by logging out and clicking the "Sign up" button. You'll need to use a different email address from the one your researcher account uses. 

1. Click "Sign up" from the `CHS home page <https://childrenhelpingscience.com/>`_.

   .. image:: _static/img/login/login_homepage_registration_link.png
    :alt: Sign up link on CHS homepage

2. Fill out the form and click "create account."

   .. image:: _static/img/login/login_participant_registration.png
    :alt: Participant registration form

.. _staging server:

The CHS staging server
------------------------------------------------

The Children Helping Science "staging server" is a separate instance of the platform from the "production server" where actual studies take place. This is a sandbox environment where we try out new features, without having to worry about messing with actual data or inconveniencing users if we break something. 

The staging server is located at `<https://babieshelpingscience.com/>`_. 

You can register as a researcher at `<https://babieshelpingscience.com/registration/>`_ or as a participant by clicking "Sign up". Logging in works just the same way as at childrenhelpingscience.com, but accounts are separate. (Your staging login won't work on regular or "production" CHS, and vice versa.)

There is **absolutely no actual data collection allowed** on the staging server for security reasons. 

You might use the staging server if:

* You want to have a totally separate "sandbox" version of your lab on CHS to use for training new lab members, study development, demoing something, etc. without any concern that you could possibly disclose participant information
* You're helping to try out a new feature before it's added to production
* You're making especially heavy use of CHS while developing your own studies, working on an adapter so you can hook up another type of experiment runner, etc. - to avoid unusual load on the production server we might ask you to do your development using staging. 

.. _managing_2fa:

Managing 2FA credentials
-------------------------

If needed, you can disable two-factor authentication on your account (for example, to switch to using a new phone). Click "My account" from the experimenter interface:

   .. image:: _static/img/login/login_researcher_manage_account.png
    :alt: Link to manage account from experimenter
    
From the account page, you can change your email address or password and enable or disable 2FA. Note that you cannot use the Experimenter section of CHS without 2FA enabled.

   .. image:: _static/img/login/login_2fa_management.png
    :alt: 2FA management on login page

   
Logging in when running CHS locally for development
-------------------------------------------------------

If running CHS locally, you can log in or create accounts as described above, substituting ``https://localhost:8000`` for ``https://childrenhelpingscience.com``. (You no longer need to authenticate through the admin interface with any experimenter accounts.)


Troubleshooting
---------------------------------------

I'm trying to log in but it says my account is "inactive"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Most likely you accidentally tried to create a researcher account on CHS (Lookit) before we launched, and it was inactivated. Please reach out in the #tech-support channel on Slack and we can fix it.

I can't register as a researcher because I already have a participant account
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You have two options:

- make a researcher account with a different email address
- log in to your participant account and change the email address associated with it

I'm being prompted for a one-time password (OTP) but I don't have that set up
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. image:: _static/img/login/login_2fa_error.png
    :alt: 2FA error on researcher page

If you are seeing a message like this when trying to access the researcher side of CHS, click "My Account" at the top right. From there you should be able to enable 2FA or complete setup.

   .. image:: _static/img/login/login_2fa_disabled.png
    :alt: Account management page when 2FA is disabled


I'm not receiving any OTP codes on my phone when I try to log in
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The OTP codes are not sent to you via push notification or text message - they are just available in your Google Authenticator app. Please see if you have Google Authenticator installed on your phone and if you see a "Lookit-production" entry there (or "Lookit-staging" for the staging server). The OTP code shown there changes every 30 seconds.

We recommend using Google Authenticator to get your OTP codes, but you may have set up via Duo - check your phone for a Lookit entry under either app.

My OTP codes don't work
~~~~~~~~~~~~~~~~~~~~~~~

First check that:

- The email address shown in your authenticator app matches the email address you're trying to log in as. If you created multiple accounts on CHS, you may have replaced the OTP entry for one with the other. If that's the case, contact CHS staff (#tech-support channel on Slack) for assistance.
- You are entering the code within the 30-second window. If using Duo, some users have found the timing is more finicky and they need to enter the code in the first 10 seconds or so.
- The OTP entry says "Lookit-production" if you're using childrenhelpingscience.com, and "Lookit-staging" if you're using babieshelpingscience.com.
- The timing of your Authenticator app is accurate and your phone's time is accurate. If you're using Google Authenticator, you can go to the three dots in the top right corner -> Settings -> Time correction for codes -> Sync now to ensure the timing is correct.

I switched to a new phone and can't get my OTP code
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you still have access to your old phone:

1. Log in to your account and enter the OTP code using your old phone.
2. Click "My account" or go to `<https://childrenhelpingscience.com/account/manage/>`_ and scroll down to "Manage Two-Factor Authentication."
3. Enter your OTP from the old phone to disable 2FA temporarily.
4. From "Manage Two-Factor Authentication," turn 2FA back on using your new phone.

If you do not have access to your old phone (e.g., it was destroyed and that's why you're switching): Please contact CHS staff (#tech-support channel on Slack) for assistance. For security reasons, there isn't a way to disable or reset your two-factor authentication unless you are already logged in using a one-time password. Depending on whether you already have access to participant data, we will reset it for you or ask for verification of your identity first.







    

   
