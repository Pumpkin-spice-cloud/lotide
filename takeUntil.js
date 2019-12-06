const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];




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

function takeUntil(data, callBack) {
  let index;
  let notPassed = data.find(element => callBack(element));
  if (notPassed !== undefined) {
    index = data.indexOf(notPassed);
  }
  return data.splice(0, index);

}

const results1 = takeUntil(data1, x => x < 0);
assertArrayEqual(results1, [1,2,5,7,2]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

module.exports = takeUntil;