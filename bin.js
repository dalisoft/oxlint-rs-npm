import "./prepare.js";
import "./package.json" assert { type: "json" };
import fs from "node:fs/promises";
import path from "node:path";

await fs.writeFile(path.resolve(import.meta.dirname, "./package.json"), {
  ...pkg,
  bin: {
    oxlint: "oxlint",
  },
});
