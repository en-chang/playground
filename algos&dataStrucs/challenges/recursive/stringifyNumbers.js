function stringifyNumbers(anObj) {
    // Loop through the object
    // If there is a number change it to a string
    // If there is an object call stringifyNumbers
    // When loop is complete return object
    let newObj = {};
    for (let key in anObj) {
        if (typeof anObj[key] === 'number') {
            newObj[key] = anObj[key].toString();
        } else if (typeof anObj[key] === 'object' && !Array.isArray(anObj[key])) {
            newObj[key] = stringifyNumbers(anObj[key]);
        } else {
            newObj[key] = anObj[key];
        }
    }
    return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/