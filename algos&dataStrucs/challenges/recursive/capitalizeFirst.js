function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  let ans = [];

  function recursion(arr) {
    if (arr.length === 0) {
      return ans;
    }
    let val = arr.shift();
    // Capitalize val
    val = val[0].toUpperCase() + val.slice(1, val.length);
    ans.push(val);
    return recursion(arr);
  }

  return recursion(arr);
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
