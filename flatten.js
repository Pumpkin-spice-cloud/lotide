let eqArrays = function(array1, array2) {
  let equiv = true;
  let longestLength = Math.max(array1.length, array2.length);
  for (let i = 0; i < longestLength; i++) {
    if (array1[i] !== array2[i]) {
      equiv = false;
    }
  }
  return equiv;
};

const assertArrayEqual = function(array1, array2) {
  let check, checkBoolean, emoji;
  if (eqArrays(array1, array2)) {
    check = 'Passed';
    checkBoolean = '===';
    emoji = '✅✅✅';
   
  } else {
    check = 'Failed';
    checkBoolean = '!==';
    emoji = '⛔️⛔️⛔️';
 
  }
  
  console.log(`${emoji} Assertion ${check}: [${array1}] ${checkBoolean} [${array2}]`);
};

let flatten = function(input) {
  let expandArray = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      expandArray = input[i];
      for (let j = expandArray.length - 1; j >= 0; j--) {
        input.splice(i, 0, expandArray[j]);
      }
      input.splice(i + expandArray.length, 1);
    }
  }
  return input;
};
assertArrayEqual(flatten([1,2,3,[1,2,3]]), [1,2,3,1,2,3]);
assertArrayEqual(flatten([]), []);
assertArrayEqual(flatten(['a','b','c']), ['a','b','c']);
assertArrayEqual(flatten([1,2,3,[1,2,3],4,[5,'c']]), [1,2,3,1,2,3,4,5,'c']);


