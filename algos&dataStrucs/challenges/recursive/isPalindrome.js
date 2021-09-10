function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 1) {
    return true;
  } else if (str.charAt(0) !== str.charAt(str.length - 1)) {
    return false;
  }
  str = str.slice(1, -1);
  return isPalindrome(str);
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false