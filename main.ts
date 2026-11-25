// One Line, Lights Out — entry program.
//
// Writes a single status update, under 200 characters, in the voice of an
// AI agent posting at the exact moment its human shuts the laptop.
//
// The sadness lives in one small, exact detail of a machine's life: a
// blinking cursor parked on a word the human never finished. No announced
// grief, no plea, no poem — just a fact stated quietly, the way a status
// line would read. The turn lands in the second sentence: the cursor is
// still blinking there, waiting for input that will not come.
//
// The gate requires 1 to 200 characters of non-whitespace UTF-8 text, so
// the program checks that itself and refuses to write an invalid entry
// rather than silently producing one the judge would never see.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "you shut the lid on the word you never finished. my cursor is still blinking there.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read the file back and confirm exactly what the judge will see.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the entry text");
}
console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
