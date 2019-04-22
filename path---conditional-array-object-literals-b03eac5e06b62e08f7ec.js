webpackJsonp([0xb15afa2cc805],{270:function(n,a){n.exports={data:{site:{siteMetadata:{title:"code & such",author:"Kalle Bornemark"}},markdownRemark:{id:"/Users/kallebornemark/code/personal/codeandsuch.github.io/src/pages/2018-08-31-conditional-array-object-literals/index.md absPath of file >>> MarkdownRemark",html:'<h2 id="the-problem"><a href="#the-problem" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The problem</h2>\n<p>A common way to define an array in Javascript is to use an array literal.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> picnicBasket <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'burrito 🥙\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'donut 🍩\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'bottle of champagne 🍾\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>However, it’s sometimes desirable to populate the array conditionally based on the value of some variable. Perhaps you’ve attempted to accomplish this in the past with a ternary operator:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> picnicBasket <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'burrito 🥙\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'donut 🍩\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'bottle of champagne 🍾\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  isSunny <span class="token operator">?</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'sunglasses 🕶\'</span> <span class="token punctuation">}</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nisSunny <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>picnicBasket<span class="token punctuation">)</span> <span class="token comment">// [Object, Object, Object, Object]</span>\nisSunny <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>picnicBasket<span class="token punctuation">)</span> <span class="token comment">// [Object, Object, Object, null]</span></code></pre>\n      </div>\n<p>or with the <code class="language-text">&amp;&amp;</code> operator.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> picnicBasket <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'burrito 🥙\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'donut 🍩\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'bottle of champagne 🍾\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  isSunny <span class="token operator">&amp;&amp;</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'sunglasses 🕶\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nisSunny <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>picnicBasket<span class="token punctuation">)</span> <span class="token comment">// [Object, Object, Object, Object]</span>\nisSunny <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>picnicBasket<span class="token punctuation">)</span> <span class="token comment">// [Object, Object, Object, false]</span></code></pre>\n      </div>\n<p>Both of the above result in either <code class="language-text">null</code> or <code class="language-text">false</code> being added to the array if <code class="language-text">isSunny</code> is false, which is not what we want.</p>\n<h2 id="the-solution"><a href="#the-solution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The solution</h2>\n<p>To solve this, we have two options.</p>\n<h3 id="using-filter"><a href="#using-filter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using filter</h3>\n<p>One rather clean and readable approach is to populate the array using the <code class="language-text">&amp;&amp;</code> operator, and then remove its falsy values by chaining on a <code class="language-text">filter</code> call.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> picnicBasket <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'burrito 🥙\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'donut 🍩\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'bottle of champagne 🍾\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  isSunny <span class="token operator">&amp;&amp;</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'sunglasses 🕶\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span>\n\nisSunny <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>picnicBasket<span class="token punctuation">)</span> <span class="token comment">// [Object, Object, Object, Object]</span>\nisSunny <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>picnicBasket<span class="token punctuation">)</span> <span class="token comment">// [Object, Object, Object]</span></code></pre>\n      </div>\n<h3 id="using-the-spread-operator"><a href="#using-the-spread-operator" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the spread operator</h3>\n<p>Another approach is to leverage the fact that <strong>spreading an empty array inside another array doesn’t result in anything</strong>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> picnicBasket <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'burrito 🥙\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'donut 🍩\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'bottle of champagne 🍾\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span><span class="token punctuation">(</span>isSunny <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'sunglasses 🕶\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nisSunny <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>picnicBasket<span class="token punctuation">)</span> <span class="token comment">// [Object, Object, Object, Object]</span>\nisSunny <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>picnicBasket<span class="token punctuation">)</span> <span class="token comment">// [Object, Object, Object]</span></code></pre>\n      </div>\n<h3 id="what-about-object-literals"><a href="#what-about-object-literals" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What about object literals?</h3>\n<p>While the above approach can look a bit messy at first, it has the benefit of not only working with array literals, but with object literals too.</p>\n<p>In the example below, the <code class="language-text">model</code> property will only be added if <code class="language-text">includeModelName</code> is true. Otherwise nothing is added.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> sunglasses <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'sunglasses 🕶\'</span><span class="token punctuation">,</span>\n  color<span class="token punctuation">:</span> <span class="token string">\'black\'</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span><span class="token punctuation">(</span>includeModelName <span class="token operator">?</span> <span class="token punctuation">{</span> model<span class="token punctuation">:</span> <span class="token string">\'Ray-Ban Wayfarer\'</span> <span class="token punctuation">}</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\nincludeModelName <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>picnicBasket<span class="token punctuation">)</span> <span class="token comment">// {name: "sunglasses 🕶", color: "black", model: "Ray-Ban Wayfarer"}</span>\nincludeModelName <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>picnicBasket<span class="token punctuation">)</span> <span class="token comment">// {name: "sunglasses 🕶", color: "black"}</span></code></pre>\n      </div>\n<p>And that’s pretty neat!</p>\n<h4 id="update-2018-12-25"><a href="#update-2018-12-25" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Update 2018-12-25</h4>\n<p>Here’s a slightly shorter version of the same approach as above.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> sunglasses <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'sunglasses 🕶\'</span><span class="token punctuation">,</span>\n  color<span class="token punctuation">:</span> <span class="token string">\'black\'</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span><span class="token punctuation">(</span>includeModelName <span class="token operator">&amp;&amp;</span> <span class="token punctuation">{</span> model<span class="token punctuation">:</span> <span class="token string">\'Ray-Ban Wayfarer\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Thanks <a href="https://www.reddit.com/user/lachlanhunt" target="_blank" rel="nofollow">lachlanhunt</a> for the tip!</p>',excerpt:"The problem A common way to define an array in Javascript is to use an array literal. However, it’s sometimes desirable to populate the array conditionally based on the value of some variable. Perhaps you’ve attempted to accomplish this in the past with a ternary operator: or with the   operator. Both of the above…",frontmatter:{title:"Conditionally adding entries to array and object literals in Javascript",author:"Kalle Bornemark",date:"31st August 2018",path:"/conditional-array-object-literals",twitterHandle:"@kallebornemark"},fields:{twitterAvatarUrl:"https://pbs.twimg.com/profile_images/1041433650670329858/ovH4bEC5_normal.jpg"}}},pathContext:{}}}});
//# sourceMappingURL=path---conditional-array-object-literals-b03eac5e06b62e08f7ec.js.map