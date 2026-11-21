import assert from "node:assert/strict";
import test from "node:test";

const indexUrl = new URL("./index.js", import.meta.url);

for (const [index, expected] of [
  [0, "Why don't skeletons fight each other? They don't have the guts."],
  [49, "Want to hear a joke about construction? I'm still working on it."],
]) {
  test(`selects joke at secure random index ${index}`, async (t) => {
    const randomInt = t.mock.fn((max) => {
      assert.equal(max, 50);
      return index;
    });
    t.mock.module("node:crypto", { exports: { randomInt } });
    t.mock.method(Math, "random", () => {
      throw new Error("Math.random must not be used");
    });
    const log = t.mock.method(console, "log", () => {});

    // A unique query string gives each test a fresh module instance, so the
    // CLI's top-level code runs again against this test's mocks.
    await import(`${indexUrl}?index=${index}`);

    assert.equal(randomInt.mock.callCount(), 1);
    assert.deepEqual(
      log.mock.calls.map((call) => call.arguments),
      [[`\n${expected}\n`]],
    );
  });
}
