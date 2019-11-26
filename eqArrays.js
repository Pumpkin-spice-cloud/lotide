const assertEqual = function(actual, expected) {
  let check, checkBoolean, quoteMark1, quoteMark2, emoji;
  if (typeof actual === 'string') {
    quoteMark1 = '"';
  } else {
    quoteMark1 = '';
  }
  if (typeof expected === 'string') {
    quoteMark2 = '"';
  } else {
    quoteMark2 = '';
  }

  if (actual === expected) {
    check = 'Passed';
    checkBoolean = '===';
    emoji = '✅✅✅';
   
  } else {
    check = 'Failed';
    checkBoolean = '!==';
    emoji = '⛔️⛔️⛔️';
 
  }
  
  console.log(`${emoji} Assertion ${check}: ${quoteMark1}${actual}${quoteMark1} ${checkBoolean} ${quoteMark2 + expected + quoteMark2}`);
};

let eqArrays =function (array1, array2){
  let equiv = true;
  let longestLength = Math.max(array1.length, array2.length);
  for(let i = 0; i < longestLength; i++){
    if(array1[i] !== array2[i]){
      equiv = false;
    }
  }
  return equiv;
}

console.log(assertEqual(eqArrays(['1','3'], ['1','3']), true));