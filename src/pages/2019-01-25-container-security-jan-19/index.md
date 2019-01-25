---
title: "Container security"
author: "Daniel Löfquist"
date: "2019-01-25"
path: "/container-security"
twitterHandle: "@fighterhayabusa"
---

These days it seems everybody is either using container technology or looking to use it soon. In every technology trend, there is something that is too often forgotten about in the frenzy of eagerness to use the new and exiting tools and techniques - security.

*Note: When I say containers in this post I mean Docker containers since this is the type of containers that I have the bulk of my experience with.*

Security, in general, is an enormous topic and narrowing it down to just things regarding container technology doesn't make it even close to sufficiently small enough to cover in a simple blog post. Many things are big enough to warrant a separate article in itself. Therefore this will be a mixture of quick pointers and some fairly simple tricks to get you started on thinking about the security of your Docker containers.

# The Basics (i.e. things you should already know)

Containers run on a host system, thus the security of this host matters and you should always follow regular security practices for the host-OS in question. Always keep your host-OS and software running on it current with the latest updates and patches. Don't forget to lock down who can access the host, physically as well as from the internal network and the public internet (of course!).

Containers run your application, so guess what? Application security naturally also applies. Use the OWASP guidelines for secure coding practices and any other established guidelines that apply to your application's language, platform, and runtime. Be careful with the dependencies you include in your application (hey, JS-devs! I'm looking at you!). Make sure to keep your source code safe and free from sensitive information like passwords, API-keys and alike.

OK, now that’s out of the way – what can we do about the containers?

# Containers - locking it down

## Some things to keep in mind

In Docker, the host operating system kernel is shared by the containers you're running. Because of this, a kernel exploit may take down the entire host and not just a running container that's subjected to an attack. Be aware of this.

Your Docker containers share the resources of the host. Therefore it's a good idea to restrict your containers so that one container can't hog all the resources and starve the others to cause a DoS-attack of sorts to your application.

When basing your Docker image on an existing image, make sure to only use images from trusted sources. Beware of poisoned images.

## Writing your Dockerfile, building the image and running the container

Below is a list of things you can do when putting together your Dockerfile to increase the security of the created image as well as things to do when actually building and finally running in Docker. Don't for a second think this list is anywhere near complete though, but it's a good start at least.

* Do not write secrets (passwords, API-keys, etc.) in your `Dockerfile`.
* If you don't need the extra functionality supplied by `ADD` (i.e. file-download and archive unpacking), use `COPY` instead.
* Create a user (or users), only run as root when absolutely necessary.
* Remove unnecessary setuid and setgid permissions.
* Consider using seccomp to further restrict permissions.
* Do not download any unnecessary packages.
* Remove unnecessary packages pre-existing in the image.
* If possible use `--no-cache` when building for production to avoid image poisoning via the cache.
* Use a security scanner to scan your images. There are many to choose from. Personally, I like `https://github.com/aquasecurity/microscanner` together with `https://github.com/lukebond/microscanner-wrapper`
* Isolate containers with user namespaces

## Image size and how it relates to security

One might think that efficiency is more of a focus when striving for smaller Docker images. However, a larger image contains more stuff - more software - and thus makes for a larger attack surface. So even if only for this reason a smaller image is preferred over a larger one.

As a general rule try to use the newest version of the smallest base-image you can. Many distributions also have a slim version that is considerably smaller. The `debian:stretch` image, for example, is 101MB while the `debian:stretch-slim` image is only 55MB. [Alpine](https://alpinelinux.org/) is a popular distribution for [containers](https://hub.docker.com/_/alpine) that has a very small footprint and I'd recommend giving that a try to get your images down even further in size.

The resulting image built from the `Dockerfile` below is 106MB.

    FROM debian:stretch-slim

    RUN apt update \
        && apt upgrade -y \
        && apt install --no-install-recommends --no-install-suggests -y samba nginx openssl git wget curl \
        && apt remove --purge --auto-remove -y samba openssl git wget curl \
        && rm -rf /var/lib/apt/lists/*
        # Clear up the cache also

    EXPOSE 80

    CMD ["nginx", "-g", "daemon off;"]

The image built from the following `Dockerfile` is under 12MB although it is functionally identical to the one above.

    FROM alpine:latest

    RUN apk update \
        && apk upgrade \
        && apk add --no-cache nginx bash\
        && adduser -D -g 'www' www \
        && mkdir /www \
        && mkdir -p /run/nginx/ \
        && chown -R www:www /var/lib/nginx \
        && chown -R www:www /www

    EXPOSE 80

    CMD ["nginx", "-g", "daemon off;"]

That's quite a difference in size!

# Finishing up

What you've read above is by no means a complete guide to container security, but it should give you a good start as well as plenty of things to research on your own. Happy containerizing and stay secure out there!
