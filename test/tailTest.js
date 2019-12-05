;
const tail = require('../tail')
const result = tail(["Hello", "Lighthouse", "Labs"]);




const assert = require('chai').assert;


describe("#tail", () => {
  it("returns Lighthouse is returned for the array [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

});
