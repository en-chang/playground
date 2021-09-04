function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  let counter = {};
  for (let i = 0; i < args.length; i++) {
    if (!(counter[args[i]] in args)) {
      counter[args[i]] = 1;
    } else {
      counter[args[i]]++;
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))