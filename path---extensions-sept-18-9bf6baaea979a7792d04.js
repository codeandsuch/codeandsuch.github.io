webpackJsonp([0xcfad9c0cedf4],{271:function(e,t){e.exports={data:{site:{siteMetadata:{title:"code & such",author:"Kalle Bornemark"}},markdownRemark:{id:"D:/code/personal/codeandsuch.github.io/src/pages/2018-09-04-extensions-sept-18/index.md absPath of file >>> MarkdownRemark",html:'<p>One of the things I enjoy most as a developer is to continuously find new ways to improve my workflow and work environment. I’m thus always on the lookout for new helpful tweaks and extensions.</p>\n<p>Here’s a list of my must-have VS Code extensions as of September 2018.</p>\n<h1 id="-settings-sync"><a href="#-settings-sync" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🔧 Settings Sync</h1>\n<p>This is the first extension I install when I set up VS Code on a new system. It lets you upload all relevant configuration data (extensions, keybinds, settings, snippets, etc) into a Gist on Github, making it dead simple to set up an identical configuration elsewhere. Once your settings are uploaded, simply run the <code class="language-text">Sync: Download Settings</code> command on your new system and you’re good to go.</p>\n<p>This extensions also makes it easy to keep the VS Code settings of two different systems “in sync”. Perhaps you’re frequently switching between your work computer and your personal computer at home, and you want to work in identical environments regardless of which computer you use. Settings Sync lets you accomplish exactly this in a fairly straightforward way.</p>\n<p>💾 <a href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync" target="_blank" rel="nofollow">Settings Sync</a> at VS Marketplace</p>\n<hr>\n<h1 id="-sensitive-replace"><a href="#-sensitive-replace" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🔧 Sensitive Replace</h1>\n<p>Ever wanted to rename something without losing the individual casing in each occurrence? Sensitive Replace allows one to do this in two simple steps:</p>\n<ol>\n<li>\n<p>Select every instance of the word you want to change (this can be done with VS Code’s built-in <code class="language-text">Add Selection To Next Find Match</code> command, default keybind is <code class="language-text">ctrl</code>+<code class="language-text">D</code>).</p>\n</li>\n<li>\n<p>Open up the commands menu (<code class="language-text">ctrl</code>+<code class="language-text">shift</code>+<code class="language-text">p</code>), run <code class="language-text">Sensitive: Replace selections</code>\nand enter the word you want to change to.</p>\n</li>\n</ol>\n<p><img src="/SensitiveReplace-2fcd11bfbbc8d02b9a3fcd22680bfc42.gif" alt="SensitiveReplace"></p>\n<p>Voilà!</p>\n<blockquote>\n<p>Side note: <code class="language-text">ctrl</code>+<code class="language-text">D</code> behaves slightly differently depending on if you run it with or without a selected word. Without, the next exact occurrence of whatever word your cursor is currently pointing at will be selected in a case sensitive manner. <strong>With</strong> a selected word, however, the match will be case-insensitive, which is what you would want in the scenario above.</p>\n</blockquote>\n<p>💾 <a href="https://marketplace.visualstudio.com/items?itemName=vilicvane.sensitive-replace" target="_blank" rel="nofollow">Sensitive Replace</a> at VS Marketplace</p>\n<hr>\n<h1 id="-line-jumper"><a href="#-line-jumper" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🔧 line-jumper</h1>\n<p>This little extension lets you jump up and down multiple lines at a time with <code class="language-text">alt</code>+<code class="language-text">⬆</code>/<code class="language-text">⬇</code>. The default jump length is 10 lines, which feels reasonable. Even though incorporating jumping around like this into your workflow takes some time getting used to, line-jumper is definitely a great step towards more keyboard-oriented file navigation for those of us that aren’t quite ready for Vim yet.</p>\n<blockquote>\n<p>Side note: Holding both <code class="language-text">alt</code> and <code class="language-text">shift</code> lets you jump while selecting rows, which I’ve found super useful when selecting larger chunks of code.</p>\n</blockquote>\n<p><img src="/line-jumper-6fdea27a236c6da04e32e91c4fa4c98e.gif" alt="line-jumper"></p>\n<p>💾 <a href="https://marketplace.visualstudio.com/items?itemName=alekseychaikovsky.line-jumper" target="_blank" rel="nofollow">line-jumper</a> at VS Marketplace</p>\n<hr>\n<h1 id="-auto-rename-tag"><a href="#-auto-rename-tag" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🔧 Auto Rename Tag</h1>\n<p>This very simple extension automatically keeps pairs of HTML tags in sync as you change them. Very handy, and I wouldn’t be surprised if this functionality becomes part of VS Code itself shortly.</p>\n<p><img src="/AutoRenameTag-7e44c318f3bdd9f9ebcf8214def5b395.gif" alt="Auto Rename Tag"></p>\n<p>💾 <a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag" target="_blank" rel="nofollow">Auto Rename Tag</a> at VS Marketplace</p>\n<hr>\n<h1 id="-file-utils"><a href="#-file-utils" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🔧 File Utils</h1>\n<p>To quote the author of this extension, File Utils is “a convenient way of creating, duplicating, moving, renaming, deleting files and directories”.</p>\n<p>If you’re like me, you’ll agree that being able to do common tasks with commands is almost always preferred to using the mouse. You’ll also agree that having this set of useful file management utilities added to VS Code makes life a little easier.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin: 0 !important; max-width: 601px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 27.787021630615644%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAmklEQVQY053M0QqCMBiG4V1DQdBJoW77l0TZpnOSU9PQiOgg6qz7v42v6A7awXP0wst800LnFrl1KMoKNlBROhhbgkXnN9TpATW8sCiumJvL32Z6wtLdQP0TLO3uqNoByVZjRbtga7VHlGZgupnQ+yMUEXgcQ3IeTCQJWOZHOGtx0AZEG3AuwIUMxrJ6ROdrGJNDSvoNxTeE+gCr/LX/efa0WQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="File Utils"\n        title=""\n        src="/static/FileUtils-f48c86c02f7c9641c9e7c61e912cf4d3-cff8d.png"\n        srcset="/static/FileUtils-f48c86c02f7c9641c9e7c61e912cf4d3-786d8.png 175w,\n/static/FileUtils-f48c86c02f7c9641c9e7c61e912cf4d3-824a9.png 350w,\n/static/FileUtils-f48c86c02f7c9641c9e7c61e912cf4d3-cff8d.png 601w"\n        sizes="(max-width: 601px) 100vw, 601px"\n      />\n    </span>\n  </span>\n  </p>\n<p>💾 <a href="https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils" target="_blank" rel="nofollow">File Utils</a> at VS Marketplace</p>\n<hr>\n<h1 id="-easy-snippet"><a href="#-easy-snippet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🔧 easy-snippet</h1>\n<p>As of late, the folks behind VS Code seem to be doing most things right. One thing that does have some room for improvement, though, is the process of creating snippets. The whole concept of editing strings in a JSON file (while manually having to fix indentation, etc.) isn’t very user-friendly.</p>\n<p>This little extension transforms your selection of code into a snippet-ready JSON format, vastly decreasing the time required to create a snippet.</p>\n<p><img src="/easy-snippet-3e186d672cdf9f1ee21b5e07d38051b2.gif" alt="easy-snippet"></p>\n<p>💾 <a href="https://marketplace.visualstudio.com/items?itemName=inu1255.easy-snippet" target="_blank" rel="nofollow">easy-snippet</a> at VS Marketplace</p>\n<hr>\n<h1 id="-todo-highlight"><a href="#-todo-highlight" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🔧 TODO Highlight</h1>\n<p>This little extension makes sure you don’t leave a bunch of TODOs sprinkled throughout your code. It does this by highlighting every instance of “TODO:” in an noticeable way. It’s also very customizable, allowing you to change highlight color, case sensitivity, keyword, and more.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; margin: 0 !important; max-width: 514px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 26.459143968871597%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA/ElEQVQY022QwXKDIBCGfZWcFAElRgUlRoIa06npJD5XL32THvp+f1dNTu3hm2UW+HfnC2JRI5aE0GDcIM/ylZCViOK/MK7/7b8IUnXEvm6RKItddMLPV4/vT4cd66CyM4RySDJP9FCHAbW90kdNC1Rgwqws5xcBlxY8tYhoQ606zG2Hx/SGbngQd1zGGUXu4U4TqvaGrJ9R2hHGOMLjmDnsDw3kkrFsyJ7JYVzAqDM09yjrEcN4h9EduLUQXQPRNzD+grO/wfmJhn2g9e+Qkv6yYg1barD5q8lNCUFVkEeRVOvEmHyFktwo8pZq8KWf1HRH75KNiG9B0dP5L5nJouzTJL6QAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="TODOHighlight"\n        title=""\n        src="/static/TODOHighlight-6a9e2ebe518f7620edc4165246665cd8-fd89b.png"\n        srcset="/static/TODOHighlight-6a9e2ebe518f7620edc4165246665cd8-8b704.png 175w,\n/static/TODOHighlight-6a9e2ebe518f7620edc4165246665cd8-56ac2.png 350w,\n/static/TODOHighlight-6a9e2ebe518f7620edc4165246665cd8-fd89b.png 514w"\n        sizes="(max-width: 514px) 100vw, 514px"\n      />\n    </span>\n  </span>\n  </p>\n<p>💾 <a href="https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight" target="_blank" rel="nofollow">TODO Highlight</a> at VS Marketplace</p>\n<hr>\n<h1 id="-color-theme-dracula"><a href="#-color-theme-dracula" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🎨 Color Theme: Dracula</h1>\n<p>Finally, I feel like I should recommend at least one color theme. Since I usually never stick with a single theme for more than a few months in a row, deciding which one to recommend took some time. Both Dracula and <a href="https://marketplace.visualstudio.com/items?itemName=teabyii.ayu" target="_blank" rel="nofollow">Ayu</a> are great, but the former is probably the one I’ve returned to most often.</p>\n<p>Dracula is also available for 50+ apps, including Visual Studio, Slack, React DevTools, iTerm, etc. Have a look at their <a href="https://draculatheme.com/" target="_blank" rel="nofollow">website</a>.</p>\n<blockquote>\n<p>Side note: Dracula is the theme used in the above gifs and images.</p>\n</blockquote>\n<p>💾 <a href="https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula" target="_blank" rel="nofollow">Dracula Official</a> at VS Marketplace</p>',excerpt:"One of the things I enjoy most as a developer is to continuously find new ways to improve my workflow and work environment. I’m thus always on the lookout for new helpful tweaks and extensions. Here’s a list of my must-have VS Code extensions as of September 2018. 🔧 Settings Sync This is the first extension I install…",frontmatter:{title:"My essential VS Code extensions as of September 2018",author:"Kalle Bornemark",date:"23rd September 2018",path:"/extensions-sept-18",twitterHandle:"@kallebornemark"},fields:{twitterAvatarUrl:""}}},pathContext:{}}}});
//# sourceMappingURL=path---extensions-sept-18-9bf6baaea979a7792d04.js.map