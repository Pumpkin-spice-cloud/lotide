

let eqArrays = function (array1, array2) {
  let equiv = true;
  let input1 = array1;
  let input2 = array2;
  if (Array.isArray(array1) === false || Array.isArray(array2) === false) {
    equiv = false;
    return equiv;
  }
  let longestLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < longestLength; i++) {

    if (array1[i] !== array2[i]) {

      equiv = false;
    }
  }

  return equiv;
};

const eqObjects = function (object1, object2) {
  if (eqArrays(Object.keys(object1), Object.keys(object2))) {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;

      }
    }
  } else {
    return false;
  }
  return true;

};

const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;
  let equiv, check, checkBoolean, emoji;
  equiv = eqObjects(object1, object2);
  console.log(equiv);
  if (equiv === true) {
    check = 'Passed';
    checkBoolean = '===';
    emoji = '✅✅✅';

  } else {
    check = 'Failed';
    checkBoolean = '!==';
    emoji = '⛔️⛔️⛔️';

  }

  console.log(`${emoji} Assertion ${check}: ${inspect(object1)} ${checkBoolean} ${inspect(object2)}`);
};

assertObjectsEqual({ a: [5, 3], b: 4 }, { a: [5, 3], b: 4 });
assertObjectsEqual({ a: [5, 3], b: 4 }, { a: 5, b: 4 });

module.exports = assertObjectsEqual;