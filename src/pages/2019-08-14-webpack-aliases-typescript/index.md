---
title: "Using Webpack aliases with Typescript (and Jest)"
author: "Kalle Bornemark"
date: "2018-08-14"
path: "/webpack-aliases-typescript"
---

This small tutorial will show you how to set up [Webpack](https://webpack.js.org/) aliases for your [Typescript](https://www.typescriptlang.org/) and [Jest](https://jestjs.io/) project.

## The problem

Importing files using relative paths works well in small projects, but it can become cumbersome rather quickly once the project starts growing. Many of us have found ourselves writing something like this:

```js
import Foo from '../../../../components/Foo'
```

This not only requires one to figure out what the path should be, but is also very likely to break if (when) files get moved around.

## Webpack to the rescue!

To solve this, Webpack provides users with [resolve.alias](https://webpack.js.org/configuration/resolve/#resolve-alias) which allows for concise and consistent file imports. Aliases are added to the `alias` object nested inside `resolve`.

Assuimg our `components` folder live inside a root-level `src` folder, we can create a `Components` alias like so:

#### 📄 webpack.config.js
```js
var path = require('path')

module.exports = {
  // ...
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/')
    }
  }
}
```

We can now refactor the above import in a way that is much cleaner and that doesn't depend on the file's location relative to `Foo`.

```js
import Foo from 'Components/Foo'
```

## With Typescript

This is all great, but in order to make this work Typescript, a little more needs to be done. At the moment, Typescript doesn't know about the alias we created and will produce an error when it's referenced. To fix this, add the alias to `tsconfig.json`, like so:

#### 📄 tsconfig.json

```json
{
  "compilerOptions": {
    // ...
    "paths": {
      "Components/*": [ "./src/components/*" ]
    }
  }
}
```

## With Jest

Using aliases for commonly accessed paths creates a good workflow to build you app with, and you probably want to keep using these aliases when writing tests. So far, we've added the `components` alias to `webpack.config.js` and `tsconfig.json`, but since the Typescript inside our Jest tests isn't part of the same transpilation step as the rest of our codebase, the alias also needs to be added to our Jest configuration.

Unless configured otherwise, Jest is configured inside `package.json`. To make Jest aware of our `components` alias, add it to `moduleNameMapper`, like so:

#### 📄 package.json
```json
{
  // ...
  "jest": {
    // ...
    "moduleNameMapper": {
      "^Components/(.*)": "<rootDir>/src/components/$1"
    }
  }
}
```

Note: This assumes that you've already set up Jest correctly in your React/Typescript project.

That's it! 🎉 Our Webpack alias should now also work inside Jest tests.

<!-- `youtube:https://www.youtube.com/embed/u21W_tfPVrY` -->