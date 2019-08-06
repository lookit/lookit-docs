############################
Setting Eligibility Criteria
############################

=============================
What is Eligibility Criteria?
=============================
Eligibility criteria determines which children can participate in your study.

In the study edit and create views, you can formulate these criteria as a boolean expression with embedded relational expressions.

==================================
The Domain Specific Query Language
==================================
Every child in the lookit database has a number of fields associated with it, ranging from gestational age to

Query Fields
************

+-----------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
| Query Handle                | Value Type        | Examples                                                            | Notes                                                   |
+=============================+===================+=====================================================================+=========================================================+
| [CONDITION]                 | N/A               | deaf, hearing_impairment, NOT multiple_birth                        | See below for full list of available options.           |
+-----------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
| speaks_[LANGCODE]           | N/A               | speaks_en, NOT speaks_ja, speaks_ru                                 | See below for full list of available options.           |
+-----------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
| gestational_age_in_weeks    | integer or string | gestational_age_in_weeks <= 40, gestational_age_in_weeks = na       |                                                         |
+-----------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
| gender                      | string            | gender = f, gender !=o                                              | Male (m), Female (f), Other (o), or Not Available (na). |
+-----------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+
| age_in_days                 | integer           | age_in_days <= 1095, age_in_days > 365                              |                                                         |
+-----------------------------+-------------------+---------------------------------------------------------------------+---------------------------------------------------------+

Query Examples
**************

Deaf children only
    ``deaf``

Multiple-birth children between the ages of 1 and 3
    ``multiple_birth AND (age_in_days <= 1095 AND age_in_days >= 365)``