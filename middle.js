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

let middle = function(array) {
  let length = array.length
  let middleIndex = [];
  let output = [];
  if (length < 3){
    return [];
  }
  middleIndex[0] = Math.floor(length / 2);
  if(length % 2 === 0) {
    middleIndex.unshift(middleIndex[0] - 1);
  }
  for (let i = 0; i < middleIndex.length; i++){
    output.push(array[middleIndex[i]]);
  }
  return output;

}

assertArrayEqual(middle([1]), []);