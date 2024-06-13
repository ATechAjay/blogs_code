// let arrayName = [10, 20, 30, 40, 50];

// let test = arrayName.map(function (item, index, array) {
//   //Lines of code
//   console.log(array);

//   return 69;
// });

// console.log(test);

// const dollar = [10, 20, 30, 40, 50];
// const dollarToInr = 80;

// const inr = dollar.map(function (item) {
//   return item * dollarToInr;
// });

// console.log(inr);
//[ 800, 1600, 2400, 3200,4000 ]

// const dollar = [10, 20, 30, 40, 50];
// const dollarToInr = 80;
// let inr = [];

// for (const item of dollar) {
//   inr.push(item * dollarToInr);
// }
// console.log(inr);
//[ 800, 1600, 2400, 3200,4000 ]

// let user = ["Ajay", "Sonu", "Tanay", "adarsh"];

// let nameStartWithA = user.filter(function (item, index) {
//   return item.startsWith("A") || item.startsWith("a");
// });

// console.log(nameStartWithA); // [ 'Ajay', 'adarsh' ]

// arrayName.reduce(function (total, item, index, array) {
//   //Lines of code.
// }, initialValue);

// REDUCE METHOD IN JS

// let total = 0;
// for (let i = 0; i < myArray.length; i++) {
//   total = total + myArray[i];
// }

// console.log(total); //150

// const myArray = [10, 20, 30, 40, 50];

// const totalValue = myArray.reduce(function (total, item) {
//   return total + item;
// }, 500);

// console.log(totalValue); //650

let arrayName = [10, 20, 30, 40, 50];

const totalValue = arrayName.reduce(function (total, item) {
  return total + item;
});

console.log(totalValue); //150

const numberValue = [1024, 256, 512, 2048];

const highestValue = numberValue.reduce(function (total, item) {
  if (total > item) return total;
  else return item;
}, numberValue[0]);

// console.log(highestValue); //2048
