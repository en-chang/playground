function countUniqueValues(sortedArray) {
  // return 0 if empty
  if (sortedArray.length === 0) {
    return 0
  // sortedArray length is one
  } else if (sortedArray.length === 1) {
    return 1
  // sortedArray is greater than 1
  } else {
    // pointA and pointB start next to each other
    let pointA = 0
    let pointB = 1
    // pointB increments
    // when pointB hits unique value pointA moves up one
    // when pointB hits end of list return pointA
    while (pointB <= sortedArray.length) {
      if (sortedArray[pointA] !== sortedArray[pointB]) {
        pointA++
        sortedArray[pointA] = sortedArray[pointB]
      }
      pointB++
    }
    return pointA
  }
}