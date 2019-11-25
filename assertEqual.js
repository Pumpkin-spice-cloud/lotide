const assertEqual = function(actual, expected) {
  let check;
  let checkBoolean;
  let quoteMark1;
  let quoteMark2;
  let emoji;
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
  
  console.log(emoji + ' Assertion ' + check + ': ' + quoteMark1 + actual + quoteMark1 + ' ' + checkBoolean + ' ' + quoteMark2 + expected + quoteMark2);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);