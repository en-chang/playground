// same numbers and amount of numbers

function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  // initialize frequencyCounter
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // create frequencyCounter1 for num1
  for (let i = 0; i < num1.length; i++) {
    if (!(num1[i] in frequencyCounter1)) {
      frequencyCounter1[num1[i]] = 1;
    } else {
      frequencyCounter1[num1[i]]++;
    }
  }
  // create frequencyCounter2 for num2
  for (let i = 0; i < num2.length; i++) {
    if (!(num2[i] in frequencyCounter2)) {
      frequencyCounter2[num2[i]] = 1;
    } else {
      frequencyCounter2[num2[i]]++;
    }
  }
  // compare frequencyCounters
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter1)) {
      return false;
    } else if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) //false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false