import assert from "node:assert/strict";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { spawnSync } from "node:child_process";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(rootDir, "dist");

test("build creates dist with index.js", () => {
  mkdirSync(distDir, { recursive: true });
  writeFileSync(path.join(distDir, "stale.txt"), "stale");

  const build = spawnSync(process.execPath, ["./scripts/build.mjs"], {
    cwd: rootDir,
  });

  assert.equal(build.status, 0, build.stderr.toString());
  assert.equal(readFileSync(path.join(distDir, "index.js"), "utf8"),
    readFileSync(path.join(rootDir, "index.js"), "utf8"));
  assert.equal(existsSync(path.join(distDir, "stale.txt")), false);
});
