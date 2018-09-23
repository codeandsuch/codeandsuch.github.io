---
title: "Conditionally adding entries to array and object literals in Javascript"
author: "Kalle Bornemark"
date: "2018-08-31"
path: "/conditional-array-object-literals"
---

## The problem

A common way to define an array in Javascript is to use an array literal.

```js
const picnicBasket = [
  { name: "burrito 🥙", quantity: 2 },
  { name: "strawberry 🍓", quantity: 20 },
  { name: "bottle of champagne 🍾", quantity: 1 },
];
```

However, it's sometimes desirable to populate the array conditionally based on the value of some variable. Perhaps you've attempted to accomplish this in the past with a ternary operator:

```js
const picnicBasket = [
  { name: "burrito 🥙", quantity: 2 },
  { name: "strawberry 🍓", quantity: 20 },
  { name: "bottle of champagne 🍾", quantity: 1 },
  isSunny ? { name: "sunglasses 🕶", quantity: 2 } : null,
];

console.log(picnicBasket)
// isSunny === true  ->  [Object, Object, Object, Object]
// isSunny === false  ->  [Object, Object, Object, null]
```

or with the `&&` operator.

```js
const picnicBasket = [
  { name: "burrito 🥙", quantity: 2 },
  { name: "strawberry 🍓", quantity: 20 },
  { name: "bottle of champagne 🍾", quantity: 1 },
  isSunny && { name: "sunglasses 🕶", quantity: 2 },
];

console.log(picnicBasket)
// isSunny === true  ->  [Object, Object, Object, Object]
// isSunny === false  ->  [Object, Object, Object, false]
```

Both of the above result in either `null` or `false` being added to the array if `isSunny` is false, which is not what we want.

## The solution

To solve this, we have two options.

### Using filter

One rather clean and readable approach is to populate the array using the `&&` operator, and then remove its falsy values by chaining on a `filter` call.

```js
const picnicBasket = [
  { name: "burrito 🥙", quantity: 2 },
  { name: "strawberry 🍓", quantity: 20 },
  { name: "bottle of champagne 🍾", quantity: 1 },
  isSunny && { name: "sunglasses 🕶", quantity: 1 },
].filter(Boolean)

console.log(picnicBasket)
// isSunny === true  ->  [Object, Object, Object, Object]
// isSunny === false  ->  [Object, Object, Object]
```

### Using the spread operator

Another approach is to leverage the fact that **spreading an empty array inside another array doesn't result in anything**.

```js
const picnicBasket = [
  { name: "burrito 🥙", quantity: 2 },
  { name: "strawberry 🍓", quantity: 20 },
  { name: "bottle of champagne 🍾", quantity: 1 },
  ...(isSunny ? [{ name: "sunglasses 🕶", quantity: 2 }] : []),
];

console.log(picnicBasket)
// isSunny === true  ->  [Object, Object, Object, Object]
// isSunny === false  ->  [Object, Object, Object]
```

### What about object literals?

While the above approach can look a bit messy at first, it has the benefit of not only working with array literals, but with object literals too. In the example below, the property `c` with the value `3` will only be added if `someCondition` is true.

```js
let obj = {
  a: 1,
  b: 2,
  ...(someCondition ? { c: 3 } : {}),
}

console.log(obj)
// someCondition === true  ->  Object {a: 1, b: 2, c: 3}
// someCondition === false  ->  Object {a: 1, b: 2}
```

And that's pretty neat!
