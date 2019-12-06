
const tail = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);




const assert = require('chai').assert;


describe("#tail", () => {
  it(" [Lighthouse, labs] are returned for the array [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], 'Labs');
  });

});
