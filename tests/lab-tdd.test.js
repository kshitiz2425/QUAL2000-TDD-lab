const { describe, it } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide, modulas, power, squareRoot, floor, ceiling } = require("../lab-TDD-starter");


describe('Math Functions', () => {
  it('should add two numbers correctly', () => {
    assert.strictEqual(add(3, 5), 8);
  });

  it('should subtract two numbers correctly', () => {
    assert.strictEqual(subtract(5, 9), -4);
  });

  it('should multiply two numbers correctly', () => {
    assert.strictEqual(multiply(12, 9), 108);
  });

  it('should divide two numbers correctly', () => {
    assert.strictEqual(divide(55, 5), 11);
  });

  it('should throw an error when dividing by zero', () => {
    assert.throws(() => divide(55, 0), Error);
  });

  it('should return the correct modulus', () => {
    assert.strictEqual(modulas(17, 4), 1);
  });

  it('should return the correct power', () => {
    assert.strictEqual(power(2, 5), 32);
  });

  it('should return the correct square root', () => {
    assert.strictEqual(squareRoot(25), 5);
  });

  it('should throw an error for square root of a negative number', () => {
    assert.throws(() => squareRoot(-25), Error);
  });

  it('should return the correct floor value', () => {
    assert.strictEqual(floor(15.3), 15);
  });

  it('should return the correct ceiling value', () => {
    assert.strictEqual(ceiling(15.3), 16);
  });
});