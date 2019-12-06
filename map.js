const words = ["ground", "control", "to", "major", "tom"];
const nums2 = [123, 456, 789];



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  
  return results;
};




let eqArrays = function(array1, array2) {
  let equiv = true;
  input1 = array1;
  input2 = array2;
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


const results1 = map(words, word => word[0]);
assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']);

const results2 = map(nums2, num => num + 1);
assertArrayEqual(results2, [124,457,790]);

module.exports = map;