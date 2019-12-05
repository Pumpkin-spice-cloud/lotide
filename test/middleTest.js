const assertArrayEqual = require('../assertArrayEqual.js');
const middle = require('../middle.js');
assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);