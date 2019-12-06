const eqArrays = require('./eqArrays.js');
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

module.exports = assertArrayEqual;