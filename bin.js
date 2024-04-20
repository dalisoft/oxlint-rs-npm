import "./prepare.js";
import "./package.json" assert { type: "json" };
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "child_process";

await fs.writeFile(path.resolve(import.meta.dirname, "./package.json"), {
  ...pkg,
  main: "prepare.js",
  bin: {
    oxlint: "oxlint",
  },
});

spawnSync("oxlint", process.argv.slice(2), {
  shell: false,
  stdio: "inherit",
});
