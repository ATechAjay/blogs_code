// const asyncTask = new Promise(function (resolve, reject) {
//   resolve("Hello");
//   reject("Ooops!"); //Ignored
// });

// console.log(asyncTask); // Promise {<fulfilled>: 'Hello'}

// asyncTask.then((data) => console.log(data)); // Hello

// const asyncTask = new Promise(function (resolve, reject) {
//   reject("Ooops!");
//   resolve("Hello"); //Ignored
// });

// console.log(asyncTask); // Promise {<rejected>: 'Ooops!'}

// asyncTask.then((data) => console.log(data)); // Uncaught (in promise) Ooops!

// const asyncTask = fetch("https://fakestoreapi.com/products");

// console.log(asyncTask); // Promise {<pending>}

// asyncTask.then(function (response) {
//   console.log(response);
//   return response.text();
// });

// console.log(asyncTask);

// asyncTask.then(function (data) {
//   console.log(data);
//   return data;
// });

// asyncTask.then((resp) => console.log(resp));

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// promise.then(fulfilled, rejected);
