const assertEqual = function(actual, expected) {
  let check, checkBoolean,  emoji;
  if (actual === expected) {
    check = 'Passed';
    emoji = '✅✅✅';
   
  } else {
    check = 'Failed';
    emoji = '⛔️⛔️⛔️';
 
  }
  (actual === true) ? checkBoolean = '===' : checkBoolean = '!==';

  
  
  console.log(`${emoji} Assertion ${check}: [${input1}] ${checkBoolean} [${input2}]`);
};
let input1, input2; //I know global variables bad :/ but i don't want the return to be an array containing the input array
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

assertEqual(eqArrays(['1','3'], ['1','3']), true);