// const user = {
//   firstName: "Ajay",
//   userName() {
//     console.log("Hello, ", this.firstName);
//   },
// };

// setTimeout(user.userName, 1000);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const a = () => {
//   var b = 10;
//   console.log(b);
// };
// a();

// const obj = {
//   name: "AJ",
//   hello: () => {
//     console.log("Hello", this.name);
//   },
// };

// obj.hello();

// const obj = {
//   lang: "JS",
//   show: () => {
//     console.log(this);
//     console.log(this.lang);
//   },
// };

// obj.show();
// Question: What is the output of below code?

// const obj = {
//   lang: "JS",
//   show: function () {
//     console.log(this);
//     const thisInArrow = () => {
//       console.log(this);
//     };

//     thisInArrow();
//   },
// };

// obj.show();

// Question: What is the output of below code?
// function greet() {
//   console.log("Hello, " + this.name);
// }

// var person1 = {
//   name: "Ajay",
//   greet: greet,
// };

// var person2 = {
//   name: "Vijay",
//   greet: greet,
// };

// person1.greet();
// person2.greet();

// Question: What is the output of below code?
// const person = {
//   name: "Ajay",
// };

// function wrapper() {
//   const show = () => {
//     console.log(this);
//   };
//   show();
// }

// wrapper.call(person);

// Question: What is the output of below code?

// var length = 4;

// function callback() {
//   console.log(this.length); // What is logged?
// }

// const obj = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };

// obj.method(callback, 1, 2);

// Question: What is the output of below code?

// const person = {
//   name: "Ajay",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}`);
//   },
// };
// console.log(person.sayHello);
// const greet = person.sayHello;
// greet();

// 1. **Explain the concept of "this" in JavaScript and how its value is determined. Provide an example code snippet.**

// function demonstrateThis() {
//   console.log(this);
// }

// demonstrateThis(); // What does "this" refer to here?

// Ans: A window object.

// 2. **What does the "this" keyword refer to when used in the global scope? Share an example illustrating this behavior.**

// console.log(this); // What does "this" refer to in the global scope?

// 3. **Describe the difference between the "this" keyword in a regular function and an arrow function. Provide code examples to support your explanation.**

// // "use strict";
// const regularFunction = function () {
//   console.log(this);
// };

// const arrowFunction = () => {
//   console.log(this);
// };

// regularFunction(); // What does "this" refer to in a regular function?
// arrowFunction(); // What does "this" refer to in an arrow function?

// if (true) {
//   var a = 10;
//   var b = 20;
// }

// {
//   let a = 10;
// }

const author = {
  name: "AJ",
  topics: ["HTML", "CSS", "JS", "React"],
};

function authorIntro(location) {
  console.log(
    `I'm ${this.name} and I write blogs on ${this.topics.join(
      ", "
    )} from ${location}.`
  );
  return `I'm ${this.name} and I write blogs on ${this.topics.join(
    ", "
  )} from ${location}.`;
}

const boundFunction = authorIntro.bind(author, "India");
setTimeout(boundFunction, 1000);

// console.log(boundFunction());

// const boundFunction = authorIntro.bind(author);
// console.log(boundFunction("India"));

// console.log(authorIntro.bind(author)("India"));
// console.log(authorIntro.bind(author, "India")());
// setTimeout(author.intro(), 1000);
// const authorIntro = author.intro();
// console.log(authorIntro);
// I'm AJ and I write blogs on HTML, CSS, JS, React.
