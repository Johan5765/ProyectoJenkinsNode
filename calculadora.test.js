const test = require("node:test");
const assert = require("node:assert/strict");
const { sumar } = require("./calculadora");

test("Debe sumar dos números correctamente", () => {
  assert.equal(sumar(2, 3), 5);
});

test("Debe sumar números negativos", () => {
  assert.equal(sumar(-2, -3), -5);
});
