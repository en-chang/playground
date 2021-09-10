function reverse(str){
  // add whatever parameters you deem necessary - good luck!
  let ans = '';

  function recursion(str) {
    if (str.length === 0) {
      return ans;
    }
    ans += str[str.length - 1];
    str = str.slice(0, -1);
    return recursion(str);
  }

  return recursion(str);
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'