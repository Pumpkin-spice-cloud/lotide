
const eqArrays = require('../eqArrays');


const assert = require('chai').assert;


describe("#eqArrays", () => {
  it("returns true for eqArrays([1, 3], [1, 3]", () => {
    assert.strictEqual(eqArrays(['1','3'], ['1','3']), true);
  });

});
