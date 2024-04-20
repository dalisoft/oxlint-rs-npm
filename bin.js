#!/usr/bin/env node

import "./prepare.js";
import pkg from "./package.json" assert { type: "json" };
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "child_process";

const __dirname = path.dirname(process.argv[1]);

await fs.writeFile(
  path.resolve(__dirname, "./package.json"),
  JSON.stringify(
    {
      ...pkg,
      main: "prepare.js",
      bin: {
        oxlint: "oxlint",
      },
    },
    null,
    2
  )
);

const result = spawnSync("./oxlint", process.argv.slice(2), {
  shell: false,
  stdio: "inherit",
  cwd: __dirname,
});

if (result.error) {
  throw result.error;
}

process.exitCode = result.status;
