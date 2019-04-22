webpackJsonp([0xb9cafb6eab7e],{275:function(e,a){e.exports={data:{site:{siteMetadata:{title:"code & such",author:"Kalle Bornemark"}},markdownRemark:{id:"/Users/kallebornemark/code/personal/codeandsuch.github.io/src/pages/2019-04-22-simplify-backticks/index.md absPath of file >>> MarkdownRemark",html:'<p>As a developer, I use backticks (<code class="language-text">`</code>) frequently to highlight code in Markdown files. Once you get into the habit of using them, you start to realize that they’re available in a lot of places. Websites closely related to code, such as Github and BitBucket, often use Markdown, but so does Jira, Slack, and a bunch of other websites and applications. Heck, you can even use them in Facebook Messager:</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin: 0 !important; max-width: 700px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 10.61320754716981%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAmklEQVQI1x3LPQ7BcBiA8Z5HkPhsoiNCPyQSl3AEZ3AFSTGQ0qoEbWK02dzAyr8DJgzyPpoOv+15tPFFaO6EXixYkdA9CGYErfWLvp9gegnOKsFOtZYK21O0ww9WTPY4qc5eGJ6E7w+00VnIeYKxFWqBUPaFagD56QNjrqi4Cn2mqLp3CpMb+vROcfGmlDaNUDL1jTA4Ctcn/AFMAHX0x6BRIgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="messenger"\n        title=""\n        src="/static/messenger-9f54cf9869b8688e3785497716948abd-f6306.png"\n        srcset="/static/messenger-9f54cf9869b8688e3785497716948abd-5cfcc.png 175w,\n/static/messenger-9f54cf9869b8688e3785497716948abd-6f6cd.png 350w,\n/static/messenger-9f54cf9869b8688e3785497716948abd-f6306.png 700w,\n/static/messenger-9f54cf9869b8688e3785497716948abd-79e7d.png 848w"\n        sizes="(max-width: 700px) 100vw, 700px"\n      />\n    </span>\n  </span>\n  </p>\n<h1 id="the-problem"><a href="#the-problem" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The problem</h1>\n<p>Typing backticks in a Scandinavian keyboard layout is a real burden. This is much because of the button’s <a href="https://en.wikipedia.org/wiki/Dead_key" target="_blank" rel="nofollow">dead key</a> behavior, where a single key press “waits” for a second character input to be potentially modified with an <a href="https://www.computerhope.com/jargon/a/accent.htm" target="_blank" rel="nofollow">accent mark</a> (ò, é, etc).</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin: 0 !important; max-width: 511px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 64.9706457925636%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACv0lEQVQ4yz2TSXPaQBCF9f9/RSqV8iWXJI6dVJJy2RBW7UggIQmxSGjBYDAICSHES884yWEOPT31uvvrN8LYnWA2D7AIlpAUAyPbpXjBj6yaMIY25ouATghRNih24PtzTGdzyhtQ9SHPs1gbjCBst1vs6JyKAoZpI0lXyPMc53MJa+xhSsV4fMkxHFtI1zHyYo8sy2A7HrzJDAXlj8eMFxV2ux2ywwFlecLgr2CWvcVMkD06lRnSWYHm/QKD1hbPywwVFbAp70/nKIoc+fHIOxVEWcPQcvhoT7976EkazNEYA2OERktEX1bQ/h7j7sbFt68ift5ruPswhdgI0Oh00KQ3xtCCTu+7fRXCMkrQE99EwmWEgFh2KGHZHsI4gCmluL2xMfYtRElEdyG0oYHb91N4ToxgGRK/BZ9E0UwI1/pCo1pcLM+POJ0KgjvEarVGWWVw+xVkkYpFS5zLklifMJlPqMMQyaTibP8xd70pBODK243iBPvXV85D1U0S3KCqj/CkC8SezQUvlwuJnuHNPIhPS6ymNS7XE/Eusd2+8CUJjF2zLZEldD42ixk7ZhnLHaPX8PHpvU1jarBdh+5s4qzi87sJNMWFadnQyS4qjdvqSBAs2yEPhtyHbCms22UU8ztWSDcNmJ0dGl8S/LiX0fhl4eFjjLG+RkcU0e7KZB2fd9enhQoF+W+z2fC1G8QyJduwmLFkJg/DCPvsBWmQoXkXQG+9YLfOUV9LjCwXnj9FTXuoKkIxIYZHEjoc9hw4az2OUy52qSpup4AEWdG6JgFnRMaOiGWJmniyvOfP+DKTJKECDvOhztetaAYem110RZXHkqJzBO2e/D9+eOzQiAr/crI6wBO9f2x0kK5WvAnbmUBo9xTueLbldPVMHlQwpgSLV8/P3KMMBc8TjlZX4p0xxjF11acFuZ5PXVdc8A8WwKfK0vaYHAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="backtick button"\n        title=""\n        src="/static/backtick-button-63b00580076c22250d325c67b07c89f7-bc628.png"\n        srcset="/static/backtick-button-63b00580076c22250d325c67b07c89f7-c7a40.png 175w,\n/static/backtick-button-63b00580076c22250d325c67b07c89f7-a5f8e.png 350w,\n/static/backtick-button-63b00580076c22250d325c67b07c89f7-bc628.png 511w"\n        sizes="(max-width: 511px) 100vw, 511px"\n      />\n    </span>\n  </span>\n  </p>\n<blockquote>\n<p>Note: This post specifically refers to the backtick key found on a Scandinavian keyboard layout, circled in the image above.</p>\n</blockquote>\n<p>I’ve found that <code class="language-text">shift</code>+<code class="language-text">`</code>+<code class="language-text">space</code> is probably the most consistent way of typing a single backtick without accidentally modifying any following characters. This works, I guess, but it’s not great, and considering this is something I’m doing many times every day, a better solution is desirable.</p>\n<h1 id="the-solution"><a href="#the-solution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The solution</h1>\n<p>I realized that I virtually <em>never</em> use this key for anything other than backticks, so why even bother with the deadkey behavior at all?</p>\n<p>Enter <a href="https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&#x26;id=ukelele" target="_blank" rel="nofollow">Ukelele</a>. This neat little keyboard manager lets you remap any key to any output. Here’s a step by step guide on how to remove the backtick key’s deadkey behavior, resulting in a single backtick output on every keypress.</p>\n<ol>\n<li>Open up Ukelele. This will present you with a blank keyboard layout.</li>\n<li>Go to <code class="language-text">File</code> -> <code class="language-text">New From Current Input Source</code>. This will open up the <code class="language-text">Keyboard Layout</code> dialog, and a copy of your current layout (e.g. <code class="language-text">Swedish - Pro copy</code>) will be added automatically.</li>\n<li>Open the layout by double-clicking it in the list. You can now close the other blank layout without saving.</li>\n<li>From here, you can also close the <code class="language-text">Keyboard Layouts</code> dialog. Doing this will prompt you to name and save the newly added layout (which I think is a little counter-intuitive). <strong>Before saving</strong>, make sure <code class="language-text">File Format</code> is set to <code class="language-text">Keyboard Layout</code>, not bundle.</li>\n<li>\n<p>Next, move or copy your newly saved layout file to <code class="language-text">/Library/Keyboard Layouts</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">cp</span> /path/to/file/<span class="token operator">&lt;</span>your-layout<span class="token operator">></span>.keylayout /Library/Keyboard\\ Layouts</code></pre>\n      </div>\n</li>\n<li>Open up the MacOS keyboard settings (preferably typing ”<em>keyboard</em>” in Finder),  and go to the <code class="language-text">Input Sources</code> tab.</li>\n<li>Click the little <code class="language-text">+</code> sign at the bottom left and search for your newly created keyboard layout to add it.\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin: 0 !important; max-width: 700px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 80.0332778702163%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACXklEQVQ4y5WU227TQBCG/W5ISEgg7ngCxLsUiYO46B1vAUICcYG4qKomBAK4jc+1nfh8WK8PaeLkZ3bTlECDSlf6PZ71+NPseDxKmqYIggCO40DTNBiGgbOzM6iqKv3JRIOmmxtLvmka0HUNIb2TZSmyNJFKkwTT6RSK53mwLJMCTRwfH0uYrusSYNHLw+8aHh+qePLaw6NXDu4e2Lj31Mb95y4evPDx8KWPOwcenr2ZIfAdKKZl4PPRJ5RFia7rsFgs0Pc9lsslVqsejDcwow5OtoYe91CDHqckdba81AI/Zz3MGUeeZ1DiOEZZMlRVhX3r4mJO1zVuWot5A8YqKAmdvWmaK+B6vb6SWCLrJWUs3BVdrmm1iatrAWQbYF3X4Jz/AzinEqyuPfs7TiT1f8D5nLLYAjeH/0O3Bc53gHtwtwe2bYe8YGAVR8mEqkvLUZSV3OdUv4K6RHyHG4ENAf2wgH6ekhJpDTeVVnMSTOwYYUotQ/C9wO3aPTLjLbyQwfZzsiVML4MblPLemRaYJnuAu20jaratm/goBWsQJBWijGMWM7pn8KMSaSESqdEvOtSc/e7Dtm2py3Nq8FLChd+R2rah/zWT+6Lgu8oonpUFRibH+281RkaJtuFQoiiighYQYDEgxJ8jshXFD6IUtmXJPTFAwjCUNo4TWLaNKJzh7ZDh8EOFd4McRZ5AERNCBLquKyeNGAy6NsGPUwMfj1R8/TLAYDjEYDDAaDTCyckJxuMxDRSLppAO39EQeRN4tib3FN/3ISbOPvk+2cvnIm4r4YsEhD13PTjnGyv8X35gtLRs66EtAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="add custom layout"\n        title=""\n        src="/static/add_custom_layout-a633c1c0c2491360b91878155f88c06d-f6306.png"\n        srcset="/static/add_custom_layout-a633c1c0c2491360b91878155f88c06d-5cfcc.png 175w,\n/static/add_custom_layout-a633c1c0c2491360b91878155f88c06d-6f6cd.png 350w,\n/static/add_custom_layout-a633c1c0c2491360b91878155f88c06d-f6306.png 700w,\n/static/add_custom_layout-a633c1c0c2491360b91878155f88c06d-6efb0.png 1050w,\n/static/add_custom_layout-a633c1c0c2491360b91878155f88c06d-5aabc.png 1202w"\n        sizes="(max-width: 700px) 100vw, 700px"\n      />\n    </span>\n  </span>\n  </li>\n<li>Before closing the dialog, make sure the <code class="language-text">Show input menu in menu bar</code> checkbox is ticked.</li>\n<li>From the menubar, switch the input source to your new keyboard layout.\n\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin: 0 !important; max-width: 490px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 32.244897959183675%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABoElEQVQY0z2Qz2vTcByG8y8JooKIf4RelZ28exD06IY/O/HgYA4G6vRkmevGylx1G9ZOW5vkm6RJm7arpHVdaZpkSdrRoXOPqYKHB14+vDwvfCRVWCy9SVPRBK8/D7kyXWLqWYuy7VHIF1CFiW5UkRUdJUE3LFoth2JJpliUMc0aQRAhy4JOp4tkmDbZjS0ats1qKeDWosXdtz305qSkYloNavYeVrWB0CpoukX3wP0r/lYWVJO7OwiwrDp7yZDU90OC+Ihu38Npt4lHvygqm7zLpnCcDna1Qs0yqBiCVtPGH/QxDQ3ne5PxKGYYBhz6LnHoEwYDpIloP6HT7SFqDqYTs7ZrMpfZYUdpk35fZjmnktkSrOerfDX2+fClTm7XRmsGqA0P0fBR6l7ypv9CH9ftMb/xg6sLp1x72uLG4wLXX5xyewXuZOBmGqZe/ubiw59cnj3hUuqEC/ePOX/vmHMJZ2fGnJkeI0XDEeHwiDgO2RYHzOWGzG+6LCTy5x9jlvIRrz5FSY5Y3I54kp0QMrv+j9TaIY9WAx6s+Mwse/wBKIiT8kY3OVUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="input with custom layout"\n        title=""\n        src="/static/input_with_custom_layout-4705a502cb407434f6ba1b75cba105d3-e68e4.png"\n        srcset="/static/input_with_custom_layout-4705a502cb407434f6ba1b75cba105d3-aa8a2.png 175w,\n/static/input_with_custom_layout-4705a502cb407434f6ba1b75cba105d3-a44f2.png 350w,\n/static/input_with_custom_layout-4705a502cb407434f6ba1b75cba105d3-e68e4.png 490w"\n        sizes="(max-width: 490px) 100vw, 490px"\n      />\n    </span>\n  </span>\n  </li>\n</ol>\n<p>That’s it!</p>\n<p>Every keypress of the backtick button should now output a single backtick character, and you no longer have to worry about accidentally modifying the next character with an accent. 🥳</p>',excerpt:"As a developer, I use backticks ( ) frequently to highlight code in Markdown files. Once you get into the habit of using them, you start to realize that they’re available in a lot of places. Websites closely related to code, such as Github and BitBucket, often use Markdown, but so does Jira, Slack, and a bunch of other…",frontmatter:{title:"Simplify backticks in macOS on a Scandinavian keyboard layout",author:"Kalle Bornemark",date:"22nd April 2019",path:"/simplify-backticks",twitterHandle:"@kallebornemark"},fields:{twitterAvatarUrl:"https://pbs.twimg.com/profile_images/1041433650670329858/ovH4bEC5_normal.jpg"}}},pathContext:{}}}});
//# sourceMappingURL=path---simplify-backticks-36cbd64e79ab86447b87.js.map