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

let countLetters = function(inputString) {
  let output = {};
  for (let i = 0; i < inputString.length; i++){
    if (inputString[i] === ' '){
    }
    else if (output.hasOwnProperty(inputString[i])){
      output[inputString[i]] += 1;
    }
    else {
    output[inputString[i]] = 1;
    }  
  

  

  
  }
  return output;
}

assertEqual(countLetters('abc defgabc')['f'], 1);