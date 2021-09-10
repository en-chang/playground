function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  let ans = [];

  function recursion(arr) {
    if (arr.length === 0) {
      return ans;
    }
    let val = arr.shift();
    // Capitalize val
    val = val.toUpperCase();
    ans.push(val);
    return recursion(arr);
  }

  return recursion(arr);
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']