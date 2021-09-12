// create new array
// loop through oldArr
// if first val of array !Array.isArray(oldArr[0])
  // newArr.push(val)
// else meaning the first val is an array
  // flatten(oldArr[0])
// loop finishes
// return newArr

function flatten(oldArr) {
  let newArr = [];

  function recursion(oldArr) {
    for (let index in oldArr) {
      if (!Array.isArray(oldArr[index])) {
        newArr.push(oldArr[index]);
      }
      recursion(oldArr[index]);
    }
  }

  recursion(oldArr);

  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]