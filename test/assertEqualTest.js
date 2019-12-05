// TEST CODE
const assertEqual = require('../assertEqual.js')
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true for assertEqual('hi', 'hi')", () => {
    assert.strictEqual(assertEqual('hi', 'hi'), true);
  });

});
