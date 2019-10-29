.. _Technical_glossary:

===================
Technical Glossary
===================



Internal Resources
___________________
Docker
------


Docker is used as an alternative to virtual machines. Docker Makefiles, or *Dockerfiles*, are recipes containing all
dependencies and the library needed to build an *image*. An *image* is a template that is built and stored and acts as
a model for *containers*, analogous to the class-object relationship in object-oriented programming. It contains the
application plus the necessary libraries and binaries needed to build a *container*. Since they are templates, *images*
are what can be shared when exchanging containerized applications. On the other hand, containers are an ephemeral running
of a process, which makes it impossible to share them. Instances of the class, or objects, are to Class as a *container*
is to an *image*. A *container* runs a program in the context of an *image*. [*]_

Docker is software that allows you to create isolated, independent environments, much like a virtual machine. To
understand how Docker accomplishes these feats, you must first understand both the PPID/PID hierarchy of the Linux
kernel and union file systems.

When using the Linux OS, every program running on your machine as a process ID (PID) and a parent process ID (PPID).
Some programs (parent programs) have the ability to launch other programs (child programs). The PID of the original
program becomes the PPID of the child process. This system forms a tree of processes branching off of one another.
These ID numbers correspond to which port the programs are running on.

The root node of this "process tree" is called ``systemd``, a.k.a. system daemon. It has PID 1 and PPID 0. In older
distributions of Linux, the ``init`` process was used. [#]_ The job of this process is to launch other processes and adopt
any orphaned processes (child processes whose parent processes have been killed). All of these programs can interact
with each other through shared memory and message passing method.

Shared memory is easily understood via the Producer, Consumer scenario. Imagine you have two people, a producer
and a consumer. When the producer creates a good, it will put it in a store where the consumer can find and consume it.
This store is like shared memory.

The message passing method utilized communication links to connect two processes and allow them to send messages to each
other. After a link is established, processes can send messages that contain a header and a body. The header contains
the metadata, such as the type of message, recipient, length, etc.

These communication methods allow for processes to interact with each other, and, as you can imagine, this creates a
problem when it comes to isolation.

that systemd is a daemon process which creates a global namespace, and child processes create their own nested namespaces within the context of their parent namespace.

Programs can interact with each other when they're in the same *namespace*, referred to as a ``systemd`` tree. [#]_ In
other words, the ``systemd`` is a daemon process that creates a global namespace, and all programs that share the same
``systemd`` command can interact with each other. Child processes create their own ``systemd``, or nested namespaces,
withing the context of their parent namespace. Docker utilizes this to create a new namespace, a.k.a. a *userspace*. When
the Docker process is run, it is launched from the real ``systemd`` process and given a normal PID. A new feature released
by Linux in 2008 allows Docker to have more than one PID. With this new feature, the nested namespace comes with a table
that can map a relative PID seen by your container in said nested nameapce to the actual PID seen by your machine.
This allows Docker to take on PID 1 in your container.

Now, all programs that stem from the Docker branch will see Docker in the same way they see the ``systemd`` process. It is
the root node, and they will not leave the nested namespace, effectively cutting off interaction between those processes and the
ones on the rest of the real ``systemd`` tree.

Though this is a step closer to isolation, it is not quite there yet. Even though processes can't interact with the main
branch, they can still interact with the main filesystem. To combat this, Docker makes use of union filesystems. [#]_ A union
filesystem uses union mounts to merge two directories into one. This means that if you have two directories that contain
different files, a union mount will create a new directory that contains all of the files from both. If both directories
contain a file of the same, the mount usually has a system in place for which one it will choose.

One big thing that makes this file system important for Docker is its deletion process. When you delete a file in a
union filesystem, it does not actually delete it, rather it adds an extra layer and masks it. This masking process
allows Docker to unionize your machine's filesystem and your Docker filesystem, masking all files that are specific to
your machine. The necessary directories for Linux set up, such as the ``/etc``, ``/var``, ``/``, ``usr``, and ``home`` directories
are still intact, however extra, added files from your machine will be masked from Docker. In addition, when you write
files to this union filesystem, they will not be written to your machine's file system, effectively isolating your
machine from your containers.

Another big difference between Docker and Virtual Machines is the Hypervisor. [#]_  When using a VM, a hypervisor is
necessary to supervise, schedule, and control interactions between the host OS and the Guest OS. It acts as a layer of
security between your machine and the virtual one so that yours is not damaged or messed with. Docker eliminates the
need for the hypervisor because there is no longer a Guest OS. The Docker Engine is software downloaded directly onto
your machine, and the containers run on the engine. Using Docker eliminates extra steps needed for the VM, as it doesn't
have to virtualize an entire computer. This makes Docker faster, more efficient, and less redundant than VMs.

.. image:: https://cdnssinc-prod.softserveinc.com/img/blog/containers-security-virtual-machines.PNG

image credits: `docker.com <https.docker.com>`_

For a more in-depth explanation of Docker and how it works, consder looking at `this series of articles.
<https://www.nschoe.com/articles/2016-05-26-Docker-Taming-the-Beast-Part-1.html>`_


Postgres
--------

PostgreSQL is a general purpose and object-relational database management system. It allows you to store and query large
amounts of data without having to worry about all of the complicated processes going on under the hood. [*]_  PostgreSQL
optimizes data querying for you, making your application faster. All information and metadata is stored in it.




RabbitMQ
---------

RabbitMQ is a message broker. When messages are sent online, they go from the producer to a queue and then to the
consumer. RabbitMQ is that queue. Instead of having to perform all tasks involving sending messages, including generating
PDFs, locating the recipient, etc., the message producer only has to upload their message and instructions to the queue
and RabbitMQ will take care of the rest. Using this service makes messaging through Lookit easier and more efficient, as
it is able to re-queue messages, it is faster and more reliable, and it is scalable for when there are a lot of messages.

`source <https://www.cloudamqp.com/blog/2015-05-18-part1-rabbitmq-for-beginners-what-is-rabbitmq.html>`_


Ngrok
-----

Ngrok is used in the development process to act as a tunnel into your PC. It is not secure to allow access into your PC
or local address through a public channel, as this can open you up to malicious attacks. Ngrok allows you to securely
provide access to your local address through something public, like the internet. When Ngrok is running on your machine,
it gets the port of the network service, which is usually a web server, and then connects to the Ngrok cloud service.
This cloud service takes in traffic and requests from a public address and then relays that traffic directly to the
Ngrok process running on your machine, which then passes it along to the local address you specify. By doing this, you
can minimize the interaction between outside traffic and your personal machine.

When trying to stream videos in the development stage, the ember frameplayer will stream the video to PIPE's webservers,
which will then write a request to AWS S3. A webhook will then send this video data back to the dummy url generated by ngrok,
which then tunnels it to your local machine.



.. When trying to stream videos on the development stage, AWS will SEND to PIPe need an address to send the video to. Ngrok will create
a dummy link for this purpose and then send the video from this dummy address to your PC.


.. From the deployed ember framplayer app the video is streamed to pipe's webservers, which forward/write request to video
data to AWS S3 instance. Webhook (allows us to say send a payload to a certain address when u finish doing this) sends request
back to url generated by ngrok which serves as a local tunnel to your computer since u cant point a webhook to local host

.. In short, video data goes through this process: [Frameplayer app]--pipe client-->[Pipe service]--AWS storage trigger-->[AWS S3],
then when the trigger finishes storing, it trips the “Finished uploading to S3” webhook that then sends a payload back
to the lookit-API server, which has a handler that renames the file that was just stored in S3, among other things
so that handler receives a payload from Pipe’s “finished uploading to S3 webhook”
i.e., it’s Pipe telling lookit-API “hey, I finished putting some video in S3. Here’s some identifying data about that video.”







External Resources
___________________

Google Cloud
-------------

The Cloud service is where all the code for the studies and


Amazon Web Services
--------------------

This is where al web-cam video recorded is stored

Celery
-------

This is what runs the long term tasks

Authenticator
---------------

Allows you to log into your account securely

Lookit Ember Frameplayer
------------------------


The frameplayer that provides the functionality for the experiments themselves. It parses the JSON documents
specifying the study protocol into a sequence of "frames" and runs them. For more information, see :ref:`frame_development`


PIPE
-------


PIPE is a wrapper around the webRTC recorder that handles streaming. It is used to record the video and audio. WebRTC is
what connects to the hardware of your computer and films for you. PIPE converts recorded files to ,mp4. https://addpipe.com/about



Footnotes
----------


.. [#] If you’re interested in learning about the difference between ``init`` and ``systemd`` as well as the reasoning behind the switch, check
       out this `link <https://www.tecmint.com/systemd-replaces-init-in-linux/](https://www.tecmint.com/systemd-replaces-init-in-linux/>`_.
.. [#] The Linux kernal has many built in namespaces that are responisble for different things. If you are interested in
        learning more about this topic, check out this article on `namespaces <https://medium.com/@teddyking/linux-namespaces-850489d3ccf>`_
.. [#] The union filesystem utilizes set theory. For a more in depth explaination of how they work and the math behind them,
       check out this article on `union filesystems <https://medium.com/@paccattam/drooling-over-docker-2-understanding-union-file-systems-2e9bf204177c>`_
.. [#] Hypervisors are essential to the functionality of VMs. If you want to know more about them, check out this link on
       `hypervisors <https://www.networkworld.com/article/3243262/what-is-a-hypervisor.html>`_


Endnotes
---------
.. [*] Docker has many other moving parts behind the scenes. An example of a part is volumes. Volumes serve as a storage
       space for your containors. For more in depth information about volumes, check out this `link <https://blog.container-solutions.com/understanding-volumes-docker>`_
       In addition, this `series of articles <https://www.nschoe.com/articles/2016-05-26-Docker-Taming-the-Beast-Part-1.html>`_
       covers a lot of Docker topics not mentioned in this documentation.
.. [*] `add foot/endnote on what postgres is doing behind the scenes <https://medium.com/@divya.n/how-postgres-works-733bc5cf61a>`_