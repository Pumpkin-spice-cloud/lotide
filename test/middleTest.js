const middle = require('../middle.js');

const assert = require('chai').assert;


describe("#middle", () => {
  it("middle([1, 2, 3, 4] returns [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});

