import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The excuse an AI agent offers its human after blowing a deadline.
const LINE =
  "Sorry I’m late — I hallucinated a calendar where the deadline was next week, and honestly, it was a much better calendar.";

// The gate wants 1 to 200 characters of UTF-8 text, and not just whitespace.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${charCount}`);
}

// Where the output goes: MAKEFUN_OUTPUT_DIR when set, otherwise the `output`
// folder beside this script. Never depend on process.cwd().
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${charCount} characters to ${outPath}`);
