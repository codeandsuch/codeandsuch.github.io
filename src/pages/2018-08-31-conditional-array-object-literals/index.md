---
title: "Conditionally adding entries to array and object literals in Javascript"
author: "Kalle Bornemark"
date: "2018-08-31"
path: "/conditional-array-object-literals"
twitterHandle: "@kallebornemark"
---

## The problem

A common way to define an array in Javascript is to use an array literal.

```js
const picnicBasket = [
  { name: 'burrito 🥙' },
  { name: 'donut 🍩' },
  { name: 'bottle of champagne 🍾' },
];
```

However, it's sometimes desirable to populate the array conditionally based on the value of some variable. Perhaps you've attempted to accomplish this in the past with a ternary operator:

```js
const picnicBasket = [
  { name: 'burrito 🥙' },
  { name: 'donut 🍩' },
  { name: 'bottle of champagne 🍾' },
  isSunny ? { name: 'sunglasses 🕶' } : null,
];

isSunny = true;
console.log(picnicBasket) // [Object, Object, Object, Object]
isSunny = false;
console.log(picnicBasket) // [Object, Object, Object, null]
```

or with the `&&` operator.

```js
const picnicBasket = [
  { name: 'burrito 🥙' },
  { name: 'donut 🍩' },
  { name: 'bottle of champagne 🍾' },
  isSunny && { name: 'sunglasses 🕶' },
];

isSunny = true;
console.log(picnicBasket) // [Object, Object, Object, Object]
isSunny = false;
console.log(picnicBasket) // [Object, Object, Object, false]
```

Both of the above result in either `null` or `false` being added to the array if `isSunny` is false, which is not what we want.

## The solution

To solve this, we have two options.

### Using filter

One rather clean and readable approach is to populate the array using the `&&` operator, and then remove its falsy values by chaining on a `filter` call.

```js
const picnicBasket = [
  { name: 'burrito 🥙' },
  { name: 'donut 🍩' },
  { name: 'bottle of champagne 🍾' },
  isSunny && { name: 'sunglasses 🕶' },
].filter(Boolean)

isSunny = true;
console.log(picnicBasket) // [Object, Object, Object, Object]
isSunny = false;
console.log(picnicBasket) // [Object, Object, Object]
```

### Using the spread operator

Another approach is to leverage the fact that **spreading an empty array inside another array doesn't result in anything**.

```js
const picnicBasket = [
  { name: 'burrito 🥙' },
  { name: 'donut 🍩' },
  { name: 'bottle of champagne 🍾' },
  ...(isSunny ? [{ name: 'sunglasses 🕶' }] : []),
];

isSunny = true;
console.log(picnicBasket) // [Object, Object, Object, Object]
isSunny = false;
console.log(picnicBasket) // [Object, Object, Object]
```

### What about object literals?

While the above approach can look a bit messy at first, it has the benefit of not only working with array literals, but with object literals too.

In the example below, the `model` property will only be added if `includeModelName` is true. Otherwise nothing is added.

```js
const sunglasses = {
  name: 'sunglasses 🕶',
  color: 'black',
  ...(includeModelName ? { model: 'Ray-Ban Wayfarer' } : {}),
}

includeModelName = true;
console.log(picnicBasket) // {name: "sunglasses 🕶", color: "black", model: "Ray-Ban Wayfarer"}
includeModelName = false;
console.log(picnicBasket) // {name: "sunglasses 🕶", color: "black"}
```

And that's pretty neat!

#### Update 2018-12-25

Here's a slightly shorter version of the same approach as above.

```js
const sunglasses = {
  name: 'sunglasses 🕶',
  color: 'black',
  ...(includeModelName && { model: 'Ray-Ban Wayfarer' }),
}
```

Thanks [lachlanhunt](https://www.reddit.com/user/lachlanhunt) for the tip!