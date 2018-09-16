---
title: "My essential VS Code extensions as of September 2018"
author: "Kalle Bornemark"
date: "2018-09-09"
path: "/extensions-sept-18"
---

One of the things I enjoy most as a developer is to continuously find new ways to improve my workflow and work environment. Thus, I'm always on the lookout for new helpful tweaks and extensions.

Here's a list of my must-have VS Code extensions as of September 2018.


# 🔧 Settings Sync

This is the first extension I install when I set up VS Code on a new system. It lets you upload all relevant configuration data (extensions, keybinds, settings, snippets, etc) into a Gist on Github. This makes it dead simple to set up an identical configuration elsewhere. Once your settings are uploaded, simply run the `Sync: Download Settings` command on your new system and you're good to go.

This extensions also makes it easy to keep the VS Code settings of two different systems "in sync". Perhaps you have a work computer and a personal computer at home, and you want to work in intentical environments regardless of which computer you use. Settings Sync lets you accomplish exactly this in a fairly straightforward way.

-gif here-

💾 [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) at VS Marketplate


---


# 🔧 Sensitive Replace

Ever wanted to rename something without losing the individual casing in each occurance? Look no further. Sensitive Replace does this in two simple steps:

1. Select every instance of the word you want to change. This can be done with VS Code's built-in `Add Selection To Next Find Match` command (default keybind is `ctrl`+`D`).

2. Open up the commands menu (`ctrl`+`shift`+`p`), run `Sensitive: Repalce selections`
and enter the word you want to change to.

Voilà!

> Note: `ctrl`+`D` behaves slightly differently depending on if you run it with or without a selected word. Without, the next exact occurance of whatever word your cursor is currently pointing at will be selected in a case sensitive manner. With a selected word, however, the match will be case-insensitive, which is what you would want in the above scenario.

-gif here-

💾 [Sensitive Replace](https://marketplace.visualstudio.com/items?itemName=vilicvane.sensitive-replace) at VS Marketplate


---


# 🔧 line-jumper

This little extension lets you jump up and down multiple lines at a time with `alt`+`⬆`/`⬇`. The default jump length is 10 lines, which feels reasonable. Even though incorporating jumping around like this into your workflow takes some time getting used to, line-jumper is definitely a good step towards more keyboard-oriented file navigation for those of us that aren't quite ready for Vim yet.

> Note: Holding both `alt` and `shift` lets you jump while selecting rows, which I've found super useful when selecting larger chunks of code.

-gif here-

💾 [line-jumper](https://marketplace.visualstudio.com/items?itemName=alekseychaikovsky.line-jumper) at VS Marketplate


---


# 🔧 Auto Rename Tag

This very simple extension automatically keeps pairs of HTML and XML tags in sync as you change them. Very handy, and I wouldn't be surprised if this functionality gets added to VS Code itself shortly.

-gif here-

💾 [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) at VS Marketplate


---


# 🔧 File Utils

To quote the author of this extension, File Utils is "a convenient way of creating, duplicating, moving, renaming, deleting files and directories".

If you're like me, you'll agree that being able to do common tasks with commands is almost always preferred to using a mouse. You'll also agree that having this set of useful file management utilities added to VS Code makes life a little easier.

-gif here-

💾 [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils) at VS Marketplate


---


# 🔧 easy-snippet

As of late, VS Code seems to be doing most things right. One thing that *does* seem to need some improvement, however, is the process of creating snippets. The whole concept of editing strings in a JSON file, having to manually fix indentation etc, doesn't really end up in a smooth experience.

This little extension transforms your selection of code into a snippet-ready JSON format, vastly decreasing the time required to create a snippet.

-gif here-

💾 [easy-snippet](https://marketplace.visualstudio.com/items?itemName=inu1255.easy-snippet) at VS Marketplate


---


# 🔧 TODO Highlight

Finally, here's a little extension that makes sure you don't leave a bunch of todos sprinkled around in your code. It does this by highlighting every instance of "TODO:" in an noticable way. It's also very customizable, allowing you to change highlight color, case sensitivity, keyword, and more.

-gif here-

💾 [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) at VS Marketplate