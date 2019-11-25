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

function head(array){
  if(array.length === 0){
    return undefined;
  }
  return array[0];
}
assertEqual (head([1]), 1);
