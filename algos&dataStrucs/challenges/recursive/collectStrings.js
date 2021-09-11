function collectStrings(obj) {
    // create an empty array
    // loop through object
    // if value type is a string
        // Add value to array
    // if value is an object
        // collectStrings(obj[key])
    // Move on to next key until loop is over
    // return array
    let stringArray = [];
    function recursion(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                stringArray.push(obj[key]);
            } else if (typeof obj[key] === 'object') {
                recursion(obj[key]);
            }
        }
        return stringArray;
    }

    return recursion(obj);
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])