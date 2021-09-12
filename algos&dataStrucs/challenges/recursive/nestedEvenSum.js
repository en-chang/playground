// GOAL
// sum of all even numbers in an object including nested
// PSUEDO
// create empty sum variable
// loop through object
// if value is a number type and even
  // add to sum variable
// if value is an object
  // recursion
// loop complete
// return sum variable

function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let evenSum = 0;
  
  function recursion(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
        evenSum += obj[key];
      } else if (typeof obj[key] === 'object') {
        recursion(obj[key]);
      }
    }
  }

  recursion(obj);

  return evenSum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10