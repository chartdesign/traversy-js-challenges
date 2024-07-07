function findMaxNumber(numArray) {
  let maxNumber = 0;
  for (let index = 0; index < numArray.length; index++) {
    let element = numArray[index];
    if (element > maxNumber) {
      maxNumber = element;
    }
  }
  return maxNumber;
}

module.exports = findMaxNumber;
