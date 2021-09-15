// add whatever parameters you deem necessary - good luck!
// return false if strings are not the same length
// frequencyCounter object for each anagram
// check if character exist
// check count
// if either are false return
// if both true return true
function validAnagram(string1, string2) {
  // return false if lengths do not match
  if (string1.length != string2.length) {
    return false
  }
  // create frequency counter objects
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (char of string1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }
  for (char of string2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }
  // compare frequency counter objects
  for (let key in frequencyCounter1) {
    // check if key is in other frequency counter
    if (!(key in frequencyCounter2)) {
      return false
    }
    // check if amount of char are the same between counters
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false
    }
  }
  return true
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) //false
console.log(validAnagram('anagram', 'nagaram')) //true
console.log(validAnagram('awesome', 'awesom')) //false