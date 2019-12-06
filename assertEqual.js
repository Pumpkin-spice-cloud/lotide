const assertEqual = function(actual, expected) {
  let check, checkBoolean, quoteMark1, quoteMark2, emoji, output;
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
    output = true;

  } else {
    check = 'Failed';
    checkBoolean = '!==';
    emoji = '⛔️⛔️⛔️';
    output = false;
  }

  console.log(`${emoji} Assertion ${check}: ${quoteMark1}${actual}${quoteMark1} ${checkBoolean} ${quoteMark2 + expected + quoteMark2}`);
  return output;
};



module.exports = assertEqual;