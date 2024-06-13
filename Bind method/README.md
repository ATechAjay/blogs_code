# Why should I care about this?

- Can debug code easily
- Can be in Sync with how the JS is working. Which will make me a good JS developer.
- Can write better code.
- Help to my colleagues.
- Interviews

# What are scopes?

A place in memory, where we look for variables or objects.

# Types of scope?

1. Local scope
2. Function scope
3. Global scope
4. Lexical scope or static scope
5. Block scope

### Global scope

Scope of the entire file.

```js
let admin = "AJ";
```

> local scope = Function scope but boundries of local scope are bigger than function scope.

# Context

# How many ways to call a function?

There are 4 ways:

1. fun()
1. obj.method()
1. new Fun()
1. call, apply, and bind

> this keyword simply point out the context of a function.

# The this keywords

1. Is the function called with a `new` keyword? if so, this is the newly created object.

2. Is the function called with call or apply or bind method? If so, this is the explicitly specified object.

3. Is the function called via a containing/owning object (context)? If so, this is that context object.

4. DEFAULT: global object (except strict mode, where it is undefined).

In the arrow function, there is no this, however the value of this calculated lexically. Lexically means start from the current scope, until you find the desired value inside parent scope, if value is not found then it will return undefined.

# call, bind and apply

Change the context of the function.

######################################
######################################
######################################
######################################
######################################

# The bind() method in JavaScript

- `Losing “this”:`

```js
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
```

We’ve already seen examples of losing `this` inside the `setTimeout` function. Once a method is passed somewhere separately from the object – **`this is lost`**.

That’s because `setTimeout` got the function `user.sayHi`, separately from the object. The method setTimeout in-browser is a little special: it sets `this=window` for the function call, So for `this.firstName` it tries to get `window.firstName`, which does not exist.

> In other similar cases, usually, this just becomes `undefined`.

The task is quite typical – we want to pass an object method somewhere else, where it will be called. How to make sure that it will be called in the right context?

#### Solution 1:

A wrapper function, the simplest solution is to use a wrapping function:

```js
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};

setTimeout(function () {
  user.sayHi(); // Hello, John!
}, 1000);
```

Now it works, because it receives a `user` from the outer lexical environment, and then calls the method normally.

#### Solution 2:

Functions provide a built-in method bind that allows to fix this.

The basic syntax is:

```js
// more complex syntax will come a little later
let boundFunc = func.bind(context);
```

The result of `func.bind(context)` is a special function-like `“exotic object”`, that is callable as a function and transparently passes the call to `func` setting `this=context`.

In other words, calling `boundFunc` is like func with `fixed this`.

For instance, here `funcUser` passes a call to `func` with `this=user`:

```js
let user = {
  firstName: "John",
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John
```

Here `func.bind(user)` is a `“bound variant”` of `func`, with fixed `this=user`.

Now let’s try with an object method:

```js
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  },
};

let sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
  sayHi() {
    alert("Another user in setTimeout!");
  },
};
```

In the line `(*)` we take the method `user.sayHi` and bind it to `user`. The `sayHi` is a `“bound”` function, that can be called alone or passed to setTimeout – doesn’t matter, the context will be right.

# Partial functions

Until now we have only been talking about binding this. Let’s take it a step further. We can bind not only `this`, but also `arguments`. That’s rarely done, but sometimes can be handy.

The full syntax of bind:

```js
let bound = func.bind(context, [arg1], [arg2], ...);
```

It allows to bind context as this and starting arguments of the function. For instance, we have a multiplication `function mul(a, b)`:

```js
function mul(a, b) {
  return a * b;
}
```

Let’s use bind to create a function double on its base:

```js
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert(double(3)); // = mul(2, 3) = 6
alert(double(4)); // = mul(2, 4) = 8
alert(double(5)); // = mul(2, 5) = 10
```

The call to` mul.bind(null, 2)` creates a new function double that passes calls to `mul`,

- Fixing null as the context
- 2 as the first argument. And further arguments are passed “as is”.

That’s called a `partial function application` – we create a new function by fixing some parameters of the existing one.

#### Why do we usually make a partial function?

The benefit is that we can create an independent function with a readable name `(double, triple)`. We can use it and not provide the first argument every time as it’s fixed with bind.
In other cases, partial application is useful when we have a very generic function and want a less universal variant of it for convenience.

---

---

Content from the new blog:

---

---

# Overview

The bind() method returns a new function , when invoked, has its this sets to a specific value.

```js
fn.bind(thisArg [, arg1[, arg2[, ...] ]])
```

In this syntax, the bind() method `returns a copy of the function fn` with the specific `this value (thisArg)` and `arguments ( arg1, arg2, …)`.

> Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns a new version of the function whose `this` sets to `thisArg` argument.

# Using JavaScript bind() for function binding

When you pass a method an object is to another function as a callback, then `this` is lost.

```js
let person = {
  name: "John Doe",
  getName: function () {
    console.log(this.name);
  },
};
setTimeout(person.getName, 1000); // undefined
```

As you can see clearly from the output, the `person.getName()` returns `undefined` instead of '`John Doe'`. This is because `setTimeout()` received the function `person.getName` separately from the person object. The statement:

```js
setTimeout(person.getName, 1000);
```

can be rewritten as:

```js
let f = person.getName;
setTimeout(f, 1000); // lost person context
```

The `this` inside the `setTimeout()` function is set to the `global object` in non-strict mode and `undefined` in the strict mode. Therefore, when the callback `person.getName` is invoked, the name does not exist in the global object, it is set to `undefined`.

To fix the issue, you can wrap the `call to the person.getName` method in an `anonymous function` , like this:

```js
setTimeout(function () {
  person.getName();
}, 1000);
```

This works because `it gets the person from the outer scope` and then calls the method `getName()`. Or you can use the `bind()` method:

```js
let f = person.getName.bind(person);
setTimeout(f, 1000);
```

In this code:

1. First, bind the `person.getName` method to the `person` object.
1. Second, pass the `this` value set to the person object.
1. Third, pass the bound function to the setTimeout() function.

# Using bind() to borrow methods from a different object

Suppose you have a `runner` object that has the `run()` method:

```js
let runner = {
  name: "Runner",
  run: function (speed) {
    console.log(this.name + " runs at " + speed + " mph.");
  },
};
```

And the `flyer` object that has the `fly()` method:

```js
let flyer = {
  name: "Flyer",
  fly: function (speed) {
    console.log(this.name + " flies at " + speed + " mph.");
  },
};
```

If you want the `flyer` object to be able to `run`, you can use the `bind()` method to create the `run()` function with the this sets to the `flyer` object:

```js
let run = runner.run.bind(flyer, 20);
run();
```

In this statement: Call the `bind()` method of the `runner.run()` method and pass in the `flyer` object as the first argument and `20` as the second argument. Invoke the `run()` function.

The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as `function borrowing in JavaScript`.
