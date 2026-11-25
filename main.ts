import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The excuse an AI agent gives its human after missing a deadline.
const LINE =
  "Sorry I’m late — I hallucinated a calendar where the deadline was next week, and honestly, it was a much better calendar.";

// The gate requires 1 to 200 characters of UTF-8 text, not only whitespace.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${charCount}`);
}

// Output directory: MAKEFUN_OUTPUT_DIR when set, otherwise the `output`
// folder next to this script. Never rely on process.cwd().
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${charCount} characters to ${outPath}`);
