const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = readFileSync(path.join(__dirname, "index.js"), "utf8");

for (const [index, expected] of [
  [0, "Why don't skeletons fight each other? They don't have the guts."],
  [49, "Want to hear a joke about construction? I'm still working on it."],
]) {
  test(`selects joke at secure random index ${index}`, () => {
    let output;
    const math = Object.create(Math);
    math.random = () => {
      throw new Error("Math.random must not be used");
    };

    vm.runInNewContext(source, {
      Math: math,
      console: { log: (joke) => { output = joke; } },
      require: (name) => {
        assert.equal(name, "node:crypto");
        return {
          randomInt: (max) => {
            assert.equal(max, 50);
            return index;
          },
        };
      },
    });

    assert.equal(output, expected);
  });
}