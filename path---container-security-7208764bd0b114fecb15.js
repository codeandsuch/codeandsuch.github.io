webpackJsonp([0xf26cd8d73b1f],{270:function(e,t){e.exports={data:{site:{siteMetadata:{title:"code & such",author:"Kalle Bornemark"}},markdownRemark:{id:"/Users/laptopic/code/personal/codeandsuch.github.io/src/pages/2019-01-25-container-security/index.md absPath of file >>> MarkdownRemark",html:'<p>These days it seems everybody is either using container technology or looking to use it soon. In every technology trend, there is something that is too often forgotten about in the frenzy of eagerness to use the new and exiting tools and techniques - security.</p>\n<p><em>Note: When I say containers in this post I mean Docker containers since this is the type of containers that I have the bulk of my experience with.</em></p>\n<p>Security, in general, is an enormous topic and narrowing it down to just things regarding container technology doesn’t make it even close to sufficiently small enough to cover in a simple blog post. Many things are big enough to warrant a separate article in itself. Therefore this will be a mixture of quick pointers and some fairly simple tricks to get you started on thinking about the security of your Docker containers.</p>\n<h1 id="the-basics-ie-things-you-should-already-know"><a href="#the-basics-ie-things-you-should-already-know" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Basics (i.e. things you should already know)</h1>\n<p>Containers run on a host system, thus the security of this host matters and you should always follow regular security practices for the host-OS in question. Always keep your host-OS and software running on it current with the latest updates and patches. Don’t forget to lock down who can access the host, physically as well as from the internal network and the public internet (of course!).</p>\n<p>Containers run your application, so guess what? Application security naturally also applies. Use the OWASP guidelines for secure coding practices and any other established guidelines that apply to your application’s language, platform, and runtime. Be careful with the dependencies you include in your application (hey, JS-devs! I’m looking at you!). Make sure to keep your source code safe and free from sensitive information like passwords, API-keys and alike.</p>\n<p>OK, now that’s out of the way – what can we do about the containers?</p>\n<h1 id="containers---locking-it-down"><a href="#containers---locking-it-down" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Containers - locking it down</h1>\n<h2 id="some-things-to-keep-in-mind"><a href="#some-things-to-keep-in-mind" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Some things to keep in mind</h2>\n<p>In Docker, the host operating system kernel is shared by the containers you’re running. Because of this, a kernel exploit may take down the entire host and not just a running container that’s subjected to an attack. Be aware of this.</p>\n<p>Your Docker containers share the resources of the host. Therefore it’s a good idea to restrict your containers so that one container can’t hog all the resources and starve the others to cause a DoS-attack of sorts to your application.</p>\n<p>When basing your Docker image on an existing image, make sure to only use images from trusted sources. Beware of poisoned images.</p>\n<h2 id="writing-your-dockerfile-building-the-image-and-running-the-container"><a href="#writing-your-dockerfile-building-the-image-and-running-the-container" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing your Dockerfile, building the image and running the container</h2>\n<p>Below is a list of things you can do when putting together your Dockerfile to increase the security of the created image as well as things to do when actually building and finally running in Docker. Don’t for a second think this list is anywhere near complete though, but it’s a good start at least.</p>\n<ul>\n<li>Do not write secrets (passwords, API-keys, etc.) in your <code class="language-text">Dockerfile</code>.</li>\n<li>If you don’t need the extra functionality supplied by <code class="language-text">ADD</code> (i.e. file-download and archive unpacking), use <code class="language-text">COPY</code> instead.</li>\n<li>Create a user (or users), only run as root when absolutely necessary.</li>\n<li>Remove unnecessary setuid and setgid permissions.</li>\n<li>Consider using seccomp to further restrict permissions.</li>\n<li>Do not download any unnecessary packages.</li>\n<li>Remove unnecessary packages pre-existing in the image.</li>\n<li>If possible use <code class="language-text">--no-cache</code> when building for production to avoid image poisoning via the cache.</li>\n<li>Use a security scanner to scan your images. There are many to choose from. Personally, I like <a href="https://github.com/aquasecurity/microscanner" target="_blank" rel="nofollow">https://github.com/aquasecurity/microscanner</a> together with <a href="https://github.com/lukebond/microscanner-wrapper" target="_blank" rel="nofollow">https://github.com/lukebond/microscanner-wrapper</a></li>\n<li>Isolate containers with user namespaces</li>\n</ul>\n<h2 id="image-size-and-how-it-relates-to-security"><a href="#image-size-and-how-it-relates-to-security" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Image size and how it relates to security</h2>\n<p>One might think that efficiency is more of a focus when striving for smaller Docker images. However, a larger image contains more stuff - more software - and thus makes for a larger attack surface. So even if only for this reason a smaller image is preferred over a larger one.</p>\n<p>As a general rule try to use the newest version of the smallest base-image you can. Many distributions also have a slim version that is considerably smaller. The <code class="language-text">debian:stretch</code> image, for example, is 101MB while the <code class="language-text">debian:stretch-slim</code> image is only 55MB. <a href="https://alpinelinux.org/" target="_blank" rel="nofollow">Alpine</a> is a popular distribution for <a href="https://hub.docker.com/_/alpine" target="_blank" rel="nofollow">containers</a> that has a very small footprint and I’d recommend giving that a try to get your images down even further in size.</p>\n<p>The resulting image built from the <code class="language-text">Dockerfile</code> below is 106MB.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">FROM debian:stretch-slim\n\nRUN apt update \\\n    &amp;&amp; apt upgrade -y \\\n    &amp;&amp; apt install --no-install-recommends --no-install-suggests -y samba nginx openssl git wget curl \\\n    &amp;&amp; apt remove --purge --auto-remove -y samba openssl git wget curl \\\n    &amp;&amp; rm -rf /var/lib/apt/lists/*\n    # Clear up the cache also\n\nEXPOSE 80\n\nCMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;]</code></pre>\n      </div>\n<p>The image built from the following <code class="language-text">Dockerfile</code> is under 12MB although it is functionally identical to the one above.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">FROM alpine:latest\n\nRUN apk update \\\n    &amp;&amp; apk upgrade \\\n    &amp;&amp; apk add --no-cache nginx bash\\\n    &amp;&amp; adduser -D -g &#39;www&#39; www \\\n    &amp;&amp; mkdir /www \\\n    &amp;&amp; mkdir -p /run/nginx/ \\\n    &amp;&amp; chown -R www:www /var/lib/nginx \\\n    &amp;&amp; chown -R www:www /www\n\nEXPOSE 80\n\nCMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;]</code></pre>\n      </div>\n<p>That’s quite a difference in size!</p>\n<h1 id="finishing-up"><a href="#finishing-up" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Finishing up</h1>\n<p>What you’ve read above is by no means a complete guide to container security, but it should give you a good start as well as plenty of things to research on your own. Happy containerizing and stay secure out there!</p>',excerpt:"These days it seems everybody is either using container technology or looking to use it soon. In every technology trend, there is something that is too often forgotten about in the frenzy of eagerness to use the new and exiting tools and techniques - security. Note: When I say containers in this post I mean Docker…",frontmatter:{title:"Container security",author:"Daniel Löfquist",date:"25th January 2019",path:"/container-security",twitterHandle:"@fighterhayabusa"},fields:{twitterAvatarUrl:"https://pbs.twimg.com/profile_images/1805638258/bwbcbb_square_normal.jpg"}}},pathContext:{}}}});
//# sourceMappingURL=path---container-security-7208764bd0b114fecb15.js.map