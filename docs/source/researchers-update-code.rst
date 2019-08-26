#############################################
Updating the frameplayer code for your study
#############################################

In the future, there may be changes in the Lookit frameplayer code that you want your study to use - for instance, a bug fix for an issue your participants are encountering or a new frame you want to use. (By default, your study keeps chugging along using exactly the same code, so that updates can't change how your study works without your knowledge.) Here's how you can update the code used:

1. Click "Edit study" on the study you want to update.

.. image:: _static/img/update_code/edit_study.png
    :alt: Edit study button
    
----------
    
2. Scroll down to the "Change Study Type and Dependencies" section. You should see a value in the ``last_known_player_sha`` field if you have built study dependencies before, like this:

.. image:: _static/img/update_code/initial_state.png
    :alt: Filled in sha value 
    
If you want to know more about what code is currently being used, you can go to ``[player_repo_url]/commit/[last_known_player_sha]``. In the example above, that would be `<https://github.com/lookit/ember-lookit-frameplayer/commit/c4ee4a8b5c7921f9b6a4f027de84d7122ebfe1b8>`_. 

You can edit the ``player_repo_url`` to use a different repo entirely, like your own fork. The steps are the same regardless of which repo you're using, but pointing to your own code is more advanced. We'll focus here on just updating the version of the central Lookit code you're using.

----------

3. 

**Option 1**: You can delete the value in ``last_known_player_sha`` and leave it blank to use the default value, which is the most recent version of the Lookit frameplayer code.

.. image:: _static/img/update_code/blank_sha.png
    :alt: Blank sha value to use default

**Option 2**: You can paste in the ID of the code version you want to use ("commit sha"). You can see what each new commit did and choose one by going to `<https://github.com/lookit/ember-lookit-frameplayer/commits/master>`_. Click the clipboard button (circled) to copy the commit sha.

.. image:: _static/img/update_code/commit_list.png
    :alt: List of commits to master

By default you will see only commits to the "master" branch of the frameplayer. If you want to use a particular feature branch, you can select it instead:

.. image:: _static/img/update_code/branch_list.png
    :alt: Dropdown menu of code branches
    
You can click on any commit for more detail about what was changed. From there you can also see the commit sha (circled).

.. image:: _static/img/update_code/commit_detail.png
    :alt: Detailed view of commit
    
Paste the commit sha you want to use into the study edit view:

.. image:: _static/img/update_code/filled_sha.png
    :alt: Example sha value filled in

----------
    
4. Click "Save". You will see a warning pop up if your study has already been approved, telling you it will be rejected automatically and require re-review. This is so that Lookit staff can review any new code you're using (in particular if you're using your own repo).

.. image:: _static/img/update_code/click_save.png
    :alt: Save button
    
.. image:: _static/img/update_code/save_warning.png
    :alt: Save warning
 
----------
 
5. Because the code you're using is different now, you will need to build preview dependencies before you can see the study preview again, and you will need to build dependencies before you can start your study again. Even if you are just updating to the latest version of the master branch, you should preview your study and make sure everything still works just how you want it to! Click "Build preview dependencies."

.. image:: _static/img/update_code/build_preview.png
    :alt: Build preview dependencies button
    
Once you get an email notification that preview dependencies are built, you will be able to click "See Preview" above.

.. image:: _static/img/update_code/see_preview.png
    :alt: See preview button

----------

6. Once you are satisfied with your study preview, return to your main study page where you will probably see that its state is "rejected." Click "change state" and select "submit" to submit your study for re-approval. Once it is approved, you will be able to start data collection again. You will need to click "Build dependencies" and wait for that process to complete (about ten minutes) before you can start the study.

.. image:: _static/img/update_code/change_state.png
    :alt: Change study state
