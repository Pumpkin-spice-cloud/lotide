
let middle = function (array) {
  let length = array.length;
  let middleIndex = [];
  let output = [];
  if (length < 3) {
    return [];
  }
  middleIndex[0] = Math.floor(length / 2);
  if (length % 2 === 0) {
    middleIndex.unshift(middleIndex[0] - 1);
  }
  for (let i = 0; i < middleIndex.length; i++) {
    output.push(array[middleIndex[i]]);
  }
  return output;

};

module.exports = middle;