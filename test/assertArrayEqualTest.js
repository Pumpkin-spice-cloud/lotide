



const assert = require('chai').assert;

describe("#assertArrayEqual", () => {
  it("returns true for assertArrayEqual([1, 2, 3, 4], [1, 2, 3, 4])", () => {
    assert.deepEqual([1, 2, 3, 4], [1, 2, 3, 4]);
  });

});
