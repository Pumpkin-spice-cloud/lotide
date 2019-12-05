const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
assertEqual(eqArrays(['1','3'], ['1','3']), true);
assertEqual(eqArrays(['1','3',3], ['1','3',3]), true);
