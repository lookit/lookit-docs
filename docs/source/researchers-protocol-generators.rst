Protocol generator functions
===========================================

In some cases, it is more straightforward to write a short Javascript function
to achieve the intended counterbalancing or condition assignment, rather than using
many nested randomizers.

How to add a protocol generator
--------------------------------

Arguments to the protocol generator
------------------------------------

Accessing information about the child
----------------------------------------

Accessing information about past sessions
-------------------------------------------

Examples
--------------------

.. code:: javascript

   [
       {
           "kind": "exp-lookit-text",
           "blocks": [
               {
                   "text": "Some introductory text about this study."
               },
               {
                   "text": "INTROTEXT"
               }
           ],
           "showPreviousButton": false
       },
       {
           "kind": "exp-lookit-text",
           "blocks": [
               {
                   "text": "MANIP-TEXT-1"
               },
               {
                   "text": "MANIP-TEXT-2"
               }
           ],
           "showPreviousButton": true
       }
   ]


    {
        "kind": "choice",
        "samp        ]
    }
    
