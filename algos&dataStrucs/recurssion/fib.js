function fib(num){
  // add whatever parameters you deem necessary - good luck!  
  if (num === 0) {
    return 0
  }else if (num === 1) {
    return 1
  }
  return fib(num - 1) + fib(num - 2)
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465