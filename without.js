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

let without = function(source, itemsToRemove){
  let removeIndex;
  let i = -1;
  while(i < itemsToRemove.length) {
    while(source.indexOf(itemsToRemove[i]) > -1){
    removeIndex = source.indexOf(itemsToRemove[i]);
    source.splice(removeIndex, 1);
  }
  i++
    
   
  }
  return source;
}
assertArrayEqual(without([1,2,3,4,3,2,1], [1, 2]), [3, 4, 3]);
assertArrayEqual(without(['hello', 'bye', 'ciao', 'ciao'], ['hello', 'ciao']), ['bye']);
assertArrayEqual(without([], []), []);