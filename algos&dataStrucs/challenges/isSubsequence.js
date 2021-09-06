function isSubsequence(seq1, seq2) {
  // good luck. Add any arguments you deem necessary.
  if (!seq2.includes(seq1.charAt(0))) {
    return false;
  }
  let seq1Point = 0
  let seq2Point = 0
  const target = seq1.length;
  for (seq2Point; seq2Point < seq2.length; seq2Point++) {
    if (seq1.charAt(seq1Point) === seq2.charAt(seq2Point)) {
      seq1Point++;
      if (seq1Point === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('xsing', 'sting')); // false
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)