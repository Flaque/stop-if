# stop-if

`stop-if` is a tiny function that fills the need of an assert statement in javascript. However, if the function is run in a production environment:

``` js
process.env.NODE_ENV === "production"
```

then `stop-if` will do nothing. 

The goal of `stop-if` is to catch bugs early without ever risking uncaught production errors. 

## Install

With npm
``` bash
$ npm install --save stop-if
```

With yarn
``` bash 
$ yarn add stop-if
```

## Example

``` js
import stopIf from 'stop-if';

function addToList(item) {
    stopIf(list === undefined)
    list.add(item)
}
```

You can also add a message if you would like:

``` js 
stopIf(foo, "Fee fi fo fum, I smell the code of a hum-ity-dum.");
```

## Why is this not called `assert`?

Javascript testing frameworks frequently use terms like `assert` or `expect` to prove a statement. `stopIf` is named differently to avoid any confusion with these sorts of statements.

## When should I use `stop-if`? 

Stop-if, as with all assert statements, should be used as a way of expressing original intent of a function. It should be used to prove pre or post conditions or to standardize a way a function should be used. 

## When should I not use `stop-if`? 

You should not use `stop-if` as a regular `throw` statement. A regular throw statement should only be used in `except`tional circumstances that are theoretically possible in the function, but not desired. For example, opening a file and then noticing that it doesn't exist would be an exception that you should use a regular `throw` statement.

It follows that you should not ever attempt to `catch` a `stopIf` function. The function will not run in production and therefore your catch is entirely useless.

Never do this:

``` js 
try { // no 
  stopIf(true); // no
} catch (Error e) { // no 
  console.error(e); // no 
} // no wtf no
```

