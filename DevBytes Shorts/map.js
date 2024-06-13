const arr = [2, 3, 4, 5];

const newArr = arr.map(function (currentItem, _index, _array) {
  return currentItem * currentItem;
});

console.log(newArr); //[ 4, 9, 16, 25 ]
