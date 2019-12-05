const assertArrayEqual = require('../assertArrayEqual.js');

assertArrayEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]);
assertArrayEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArrayEqual([1, 2, 2, 4], [1, 2, 3, 4]);
