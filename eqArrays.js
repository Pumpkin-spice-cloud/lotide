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

module.exports = eqArrays;