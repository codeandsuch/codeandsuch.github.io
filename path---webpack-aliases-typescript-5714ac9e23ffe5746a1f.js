webpackJsonp([0x63d45ade9a1f],{367:function(s,a){s.exports={data:{site:{siteMetadata:{title:"Code & Stuff",author:"Kalle Bornemark"}},markdownRemark:{id:"C:/Users/Kalle/code/private/codestuff/src/pages/2018-08-14-webpack-aliases-typescript/webpack-aliases-typescript.md absPath of file >>> MarkdownRemark",html:'<p>This small tutorial will show you how to set up <a href="https://webpack.js.org/" target="_blank" rel="nofollow">Webpack</a> aliases for your <a href="https://www.typescriptlang.org/" target="_blank" rel="nofollow">Typescript</a> and <a href="https://jestjs.io/" target="_blank" rel="nofollow">Jest</a> project.</p>\n<h2>The problem</h2>\n<p>Importing files using relative paths works well in small projects, but it can become cumbersome rather quickly once the project starts growing. Many of us have found ourselves writing something like this:</p>\n<h4>📄 foo.js</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> Bar <span class="token keyword">from</span> <span class="token string">\'../../../../components/Bar\'</span></code></pre>\n      </div>\n<p>This not only requires one to figure out what the path should be, but is also very likely to break if (when) files get moved around.</p>\n<h2>Webpack to the rescue!</h2>\n<p>To solve this, Webpack provides users with <a href="https://webpack.js.org/configuration/resolve/#resolve-alias" target="_blank" rel="nofollow">resolve.alias</a> which allows for concise and consistent file imports. Aliases are added to the <code class="language-text">alias</code> object nested inside <code class="language-text">resolve</code>.</p>\n<p>In our case, we want to create a <code class="language-text">Components</code> alias, like so:</p>\n<h4>📄 webpack.config.js</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      Components<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src/components/\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We can now refactor the above import in a way that doesn’t depend on <code class="language-text">foo.js</code>’s location relative to <code class="language-text">Bar</code>, and it is also much cleaner.</p>\n<h4>📄 foo.js</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> Bar <span class="token keyword">from</span> <span class="token string">\'Components/Bar\'</span></code></pre>\n      </div>\n<h2>With Typescript</h2>\n<p>This is all great, but in order to make this work Typescript, a little more needs to be done. At the moment, Typescript doesn’t know about the alias we created and will produce an error when it’s referenced. To fix this, add the alias to <code class="language-text">tsconfig.json</code>, like so:</p>\n<h4>📄 tsconfig.json</h4>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    // ...\n    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"Components/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"./src/components/*"</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>With Jest</h2>\n<p>Using aliases for commonly accessed paths creates a good workflow to build you app with, and you probably want to keep using these aliases when writing tests. So far, we’ve added the <code class="language-text">components</code> alias to <code class="language-text">webpack.config.js</code> and <code class="language-text">tsconfig.json</code>, but since the Typescript inside our Jest tests isn’t part of the same transpilation step as the rest of our codebase, the alias also needs to be added to our Jest configuration.</p>\n<p>Unless configured otherwise, Jest is configured inside <code class="language-text">package.json</code>. To make Jest aware of our <code class="language-text">components</code> alias, add it to <code class="language-text">moduleNameMapper</code>, like so:</p>\n<h4>📄 package.json</h4>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  // ...\n  <span class="token property">"jest"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    // ...\n    <span class="token property">"moduleNameMapper"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"^Components/(.*)"</span><span class="token operator">:</span> <span class="token string">"&lt;rootDir>/src/components/$1"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Note: This assumes that you’ve already set up Jest correctly in your React/Typescript project.</p>\n<p>Tada! 🎉 Our alias now work inside Jest tests.</p>\n<!-- `youtube:https://www.youtube.com/embed/u21W_tfPVrY` -->',excerpt:"This small tutorial will show you how to set up  Webpack  aliases for your  Typescript  and  Jest  project. The problem Importing files using relative paths works well in small projects, but it can become cumbersome rather quickly once the project starts growing. Many of us have found ourselves writing something like…",frontmatter:{title:"Using Webpack aliases with Typescript and Jest",author:"Kalle Bornemark",date:"14th August 2018",path:"/webpack-aliases-typescript"}}},pathContext:{}}}});
//# sourceMappingURL=path---webpack-aliases-typescript-5714ac9e23ffe5746a1f.js.map