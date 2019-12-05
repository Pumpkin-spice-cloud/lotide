let tail = function(array) {
  let output;
  output = (array && array.length) ?  array.slice(1) : [];
  return output;
};
module.exports = tail;