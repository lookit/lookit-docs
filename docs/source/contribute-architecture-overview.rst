==================================
Overview of Lookit architecture
==================================

Codebase and stack
-------------------

Although we present participants and researchers with an integrated experience that has an intuitive user interface, behind-the-scenes the Lookit codebase is three independent projects:

- lookit-api is the primary application that supports study management and participation.  It contains a Django (Python) application, which provides an HTTP/JSON API consumed by built experiments as well as web UIs for researchers to design and manage experiments, for participants to discover experiments, and for administrators to manage accounts and static website content. It also contains offline Celery processes (connected by a RabbitMQ message queue) to build and deploy experiments using Docker, and to send email. Django provides a solid framework and abstractions for development of views for both participants and experimenters.
- ember-lookit-frameplayer is the “experiment runner” that parses a JSON study protocol and presents a sequence of interactive pages to the participant. It is implemented in the Javascript framework Ember, which is well-suited to the structure of providing a “library” of reusable, customizable frame components. New components are written in Javascript, HTML (Handlebars), and SCSS. Parameters and outputs of these components are automatically documented using Yuidoc, along with example screenshots and videos. This experiment runner is entirely separable from the other elements of Lookit; the code is already well structured to accommodate alternate experiment types.
- lookit-orchestrator contains the continuous integration and continuous deployment (CI/CD) tools for Lookit - in particular, tools for automatically testing, building, and deploying code as changes are pushed to GitHub. This encourages the frequent incorporation of small changes to make development more robust. We use a Kustomize-based workflow with a standard containerized GitOps execution pathway. 

There are three major out-of-network service dependencies: 

- Amazon S3 for primary storage of participant video, 
- Google Cloud Storage for storing experiment web archives and other static files, and 
- Pipe to relay video streamed from experiments to Amazon S3 upon verification. 

We also use Sendgrid for sending email to researchers and participants from the lookit-api web UI, and Sentry for frontend and backend error logging.

How it all works together
--------------------------

The Lookit ecosystem can be described as a sort of "restaurant" architecture, if the restaurant had a prix fixe menu. It's a cheeky and imperfect analogy, but it gets the general idea across. In this analogy there are a couple of main players you need to know about:

1. **experiments** are *meals*

  - packaged/built web archives loaded into Google Cloud Storage (GCS) and proxied/served by the web application (see point 4 below)
  - Right now, the only experiment type we support is `ember-lookit-frameplayer <https://github.com/lookit/ember-lookit-frameplayer>`__; theoretically we could create adapters for lookit for different experiment front-ends.
  
2. **researchers** are *head chefs*

  - they design experiments and then build their dependencies with a process that uploads them to GCS.
  
3. **participants** are *customers*

  - they use the wait staff to order meals that are on the menu.
  
4. The **web application** is your *wait staff*

  - They show off the menu to customers
  - They also take orders from the head chef to add, remove, or change items on the menu, and relay those to the kitchen (see point 5 below)
  
5. The **builder** is your *kitchen*

  - receives orders from the head chef by way of the wait staff.
  - actually cooks "meals" (builds experiments)
  - RabbitMQ kind of acts like a stack of order slips, in this system.
  
6. The **worker** is kind of like a *general manager*

  - sends out mail (email) to previous customers
  - occasionally, you'll see him sweeping the kitchen (cleaning up junk left over from docker builds)

The "Frameplayer" and video data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`Ember-lookit-frameplayer <https://github.com/lookit/ember-lookit-frameplayer>`_ is an Ember application that can be "built" into a web archive (WAR) with bundled/minimized Javascript and CSS. It's the default experiment type, and currently the only one available.

To capture video data, we use `Pipe <https://addpipe.com/>`_. The JS client is basically a plugin that is parameterized during the WAR build process; when properly configured it will stream video data to Pipe's servers. This data is then uploaded to Amazon S3, which, upon completion, triggers a webhook that fires a POST payload to a special ` handler in our API <https://github.com/lookit/lookit-api/blob/master/exp/views/video.py#L17>`_ that finds the video in S3 and renames it to something more searchable.




Cluster layout
------------------------

Lookit is organized as a collection of Kubernetes services, backed by deployments and statefulsets:

.. code::

    ❯ kubectl get services
    NAME                               TYPE           CLUSTER-IP   EXTERNAL-IP              PORT(S)                                          AGE
    kubernetes                         ClusterIP      10.x.x.x     <none>                   443/TCP                                          89d
    staging-gcloud-sqlproxy            ClusterIP      10.x.x.x     <none>                   5432/TCP                                         89d
    staging-google-storage             ExternalName   <none>       storage.googleapis.com   <none>                                           89d
    staging-lookit-rabbitmq            ClusterIP      10.x.x.x     <none>                   4369/TCP,5672/TCP,25672/TCP,15672/TCP,9419/TCP   89d
    staging-lookit-rabbitmq-headless   ClusterIP      None         <none>                   4369/TCP,5672/TCP,25672/TCP,15672/TCP            89d
    staging-web                        NodePort       10.x.x.x     <none>                   8080:32403/TCP                                   89d

    ❯ kubectl get deployment
    NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
    staging-beat              1/1     1            1           89d
    staging-gcloud-sqlproxy   1/1     1            1           89d
    staging-web               1/1     1            1           89d
    staging-worker            1/1     1            1           89d

    ❯ kubectl get statefulset
    NAME                      READY   AGE
    staging-builder           1/1     89d
    staging-lookit-rabbitmq   1/1     89d

- The backing monorepo for the ``-web`` (web application), ``-builder`` (experiment builder),  ``-worker`` (celery tasks), and ``-beat`` (celery crons) resources is `lookit-api <https://github.com/lookit/lookit-api>`_, which is a django application.
- The ``-gcloud-sqlproxy`` resources define as a single point of egress out to a Google Cloud SQL instance, designated by the configuration file for a given environment (`production example <https://github.com/lookit/lookit-orchestrator/blob/master/kubernetes/lookit/environments/production/lookit-config.env>`__)
- The ``-lookit-rabbitmq`` resources define a `rabbitmq <https://www.rabbitmq.com/>`__ message queue that serves as a conduit between the web application and the task runner and builder.
- ``-google-storage`` is basically just an external service that we set up to allow nginx ingress to reroute requests for static assets to GCS.


Setup for a separate instance of Lookit
----------------------------------------

Please contact us if you are looking to run your own instance; it will be a good idea to  work together closely to both get you up and running, which will also provide critical feedback in making this pipeline more adaptable.

A good place to start if you are interested in running your own separate instance of Lookit is the `lookit-orchestrator README <https://github.com/lookit/lookit-orchestrator/blob/master/README.md>`__. To fill in a bit more:

Google Cloud Platform (GCP)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
We rely almost exclusively on GCP components to orchestrate the app. A Cloud Builder Github integration trigger is tripped on deployments to either the "develop" or "master" branches of ``lookit-api``, executing the "CI" piece of the pipeline (`testing and containerization <https://github.com/lookit/lookit-api/blob/master/cloudbuild.yaml>`_). You can see in the ``deploy-to-cluster`` step that the "CD" (`deployment <https://github.com/lookit/lookit-api/blob/master/cloudbuild.yaml#L68>`_) piece is executed near the very end. It leverages the contents of *this* repo, which are similarly containerized (using the GitHub integration for build triggers) and loaded into GCR for use as a `custom builder <https://cloud.google.com/cloud-build/docs/configuring-builds/use-community-and-custom-builders>`_.

The CI pipeline is not completely generalized/parameterized, so to run your own Lookit CI pipeline, you'll want to set up your own brand new environment apart from the one that is used by the MIT instance of Lookit. To accomplish this, you'll need to set up your own Google Cloud Platform project. You'll need a few things turned on:

- Kubernetes Engine
- Cloud Builder
- Container Registry
- Key Management Service

Once those services are turned on, you'll want to turn your focus to the GKE setup that is tuned by the lookit-orchestrator repo.

Kubernetes (`lookit-orchestrator` configuration)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

So far, we see quite a number of "in-network" players (webapp, builder, worker, etc.) and "out-of-network" services (Pipe, S3, Google Cloud Storage, Google Cloud SQL). While Kustomize and Kubernetes work tightly together to connect "in-network" players, "out-of-network" services all need login credentials, which are safely and securely built
into deployed k8s pods based on the setup described here. To configure your Kubernetes setup, we recommend following these steps: 

1. Fork the lookit-orchestrator repo, as well as lookit-api
2. Change the `configs <https://github.com/lookit/lookit-orchestrator/blob/master/kubernetes/lookit/environments/production/lookit-config.env>`__ to match your new environment  (in fact, you will probably need to make changes to all of the files in that environment directory to suit your particular environment).
3. Create a secrets file for your new environment `ignored such that it is never checked in <https://github.com/lookit/lookit-orchestrator/blob/master/.gitignore#L12>`__. You'll author this in basically the same way as the config env file; to see which secrets you'll need you can take a look at the ``secretKeyRef``'d env vars listed in the `env var patch <https://github.com/lookit/lookit-orchestrator/blob/master/kubernetes/lookit/base/patches_/add-lookit-env-vars.yaml>`__.
4. Run one of the `make encrypt` hooks `here <https://github.com/lookit/lookit-orchestrator/blob/master/Makefile#L31>`__ to encrypt your plaintext secrets into `.enc` versions that can be checked into source control (which facilitates GitOps deployment - you can see in the `deploy script <https://github.com/lookit/lookit-orchestrator/blob/master/deploy.sh#L34>`__ where the secrets are actually decrypted using GKMS.)

The pipeline is not fully parameterized to target arbitrary clusters, so you'll also need to edit the `actual deployment line <https://github.com/lookit/lookit-orchestrator/blob/master/deploy.sh#L69>`__ of the script to target whatever zone/region you're deploying to in Europe. **There are probably other things that we're missing at the moment** (Sentry setup, for instance, is baked into the `app <https://github.com/lookit/lookit-api/blob/master/project/settings/defaults.py#L106>`__ and `CI/CD pipeline <https://github.com/lookit/lookit-api/blob/master/cloudbuild.yaml#L92>`__ - you'll need to figure out if you want alerting and modify accordingly - but this should give you a decent start.)

