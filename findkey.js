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



let findkey = function(object, callback) {
  let outerShell = Object.keys(object);
  for (let i = 0; i < outerShell.length; i++) {
    let innerShell = Object.keys(object[outerShell[i]]);
    for (let element of innerShell) {
      if (callback((object[outerShell[i]][element]))) {
        return outerShell[i];
      }
    }
  }
  return undefined;
};

let testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }

};


assertEqual((findkey(testObject, x => x === 2)), 'noma');
module.exports =  findkey;