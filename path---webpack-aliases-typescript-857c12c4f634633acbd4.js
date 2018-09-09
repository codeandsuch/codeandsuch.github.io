webpackJsonp([0x63d45ade9a1f],{421:function(s,a){s.exports={data:{site:{siteMetadata:{title:"code & such",author:"Kalle Bornemark"}},markdownRemark:{id:"D:/code/private/codeandsuch.github.io/src/pages/2018-08-14-webpack-aliases-typescript/index.md absPath of file >>> MarkdownRemark",html:'<p>This small tutorial will show you how to set up <a href="https://webpack.js.org/" target="_blank" rel="nofollow">Webpack</a> aliases for your <a href="https://www.typescriptlang.org/" target="_blank" rel="nofollow">Typescript</a> and <a href="https://jestjs.io/" target="_blank" rel="nofollow">Jest</a> project.</p>\n<h2>The problem</h2>\n<p>Importing files with relative paths is fine in small projects, but once the project starts growing it can become a burden. Many of us have found ourselves writing something like this in the past:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">\'../../../../components/Foo\'</span></code></pre>\n      </div>\n<p>This not only requires one to figure out what the path should be, but is also very likely to break if (when) files get moved around.</p>\n<h2>Webpack to the rescue!</h2>\n<p>To solve this, Webpack provides users with <a href="https://webpack.js.org/configuration/resolve/#resolve-alias" target="_blank" rel="nofollow">resolve.alias</a> which allows for concise and consistent file imports.</p>\n<p>Assuming our <code class="language-text">components</code> folder live inside a root-level <code class="language-text">src</code> folder, we can create a <code class="language-text">Components</code> alias like so:</p>\n<h4>📄 webpack.config.js</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  resolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      Components<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src/components/\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We can now refactor the above import in a way that is much cleaner and that doesn’t depend on the file’s location relative to <code class="language-text">Foo</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">\'Components/Foo\'</span></code></pre>\n      </div>\n<h2>With Typescript</h2>\n<p>This is all great, but in order to make this work with Typescript, a final step is required. At the moment, our alias isn’t known by Typescript and will thus produce an error when referenced. To fix this, add the alias to <code class="language-text">tsconfig.json</code>.</p>\n<h4>📄 tsconfig.json</h4>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    // ...\n    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"Components/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"./src/components/*"</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>With Jest</h2>\n<p>Using aliases for commonly accessed paths creates a good workflow to build your app with, and you probably want to keep using these aliases when writing tests. So far, we’ve added the <code class="language-text">components</code> alias to <code class="language-text">webpack.config.js</code> and <code class="language-text">tsconfig.json</code>, but since the Typescript inside our Jest tests isn’t part of the same transpilation step as the rest of our codebase, the alias also needs to be added to our Jest configuration.</p>\n<p>Unless specified otherwise, Jest is configured inside <code class="language-text">package.json</code>. To make Jest aware of our <code class="language-text">components</code> alias, add it to <code class="language-text">moduleNameMapper</code>.</p>\n<h4>📄 package.json</h4>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  // ...\n  <span class="token property">"jest"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    // ...\n    <span class="token property">"moduleNameMapper"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"^Components/(.*)"</span><span class="token operator">:</span> <span class="token string">"&lt;rootDir>/src/components/$1"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Note: This assumes that you’ve already set up Jest correctly in your React/Typescript project.</p>\n<p>That’s it! 🎉 Our Webpack alias should now also work inside Jest tests.</p>',excerpt:"This small tutorial will show you how to set up  Webpack  aliases for your  Typescript  and  Jest  project. The problem Importing files with relative paths is fine in small projects, but once the project starts growing it can become a burden. Many of us have found ourselves writing something like this in the past: This…",frontmatter:{title:"Using Webpack aliases with Typescript and Jest",author:"Kalle Bornemark",date:"14th August 2018",path:"/webpack-aliases-typescript"}}},pathContext:{}}}});
//# sourceMappingURL=path---webpack-aliases-typescript-857c12c4f634633acbd4.js.map