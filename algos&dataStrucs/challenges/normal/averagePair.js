function averagePair(arr, target){
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let avg = (arr[start] + arr[end])/2;
    if (avg > target) {
      end--;
    } else if (avg < target) {
      start++;
    } else {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6],4.1)) // false
console.log(averagePair([],4)) // false