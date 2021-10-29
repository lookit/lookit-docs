# lookit-docs
Documentation for Lookit project, including use of platform and lookit-api and ember-lookit-frameplayer repos.

To make changes to the structure of docs:

```
/lookit-docs $ git pull origin develop
```

Make changes then:

```
/lookit-docs $ virtualenv -p python3 denv
/lookit-docs $ source denv/bin/activate
(denv) /lookit-docs $ pip install -r docs/requirements.txt
(denv) /lookit-docs $ cd docs/
(denv) /lookit-docs $ make html
```

Commit & push changes back to `develop` branch
