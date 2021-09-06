function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < num) {
    return null;
  }
  let sumBlock = 0;
  for (let i = 0; i < num; i++) {
    sumBlock += arr[i];
  }
  let max = sumBlock;
  for (let j = 1; j < arr.length - (num - 1); j++) {
    // update sumBlock
    sumBlock -= arr[j -1];
    sumBlock += arr[j + (num - 1)];
    if (sumBlock > max) {
      max = sumBlock;
    }
  }
  return max;
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null