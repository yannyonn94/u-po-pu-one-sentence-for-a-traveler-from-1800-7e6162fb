// One Sentence for a Traveler from 1800 — entry program.
// Writes one sentence (at most 200 characters, built only from words a
// person from 1800 would know) to /output/entry.txt, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Imagine a library with room for every book ever printed, joined to a post office that bears any letter to any door before a candle flickers twice.";

// Self-gate: the bounty refuses any text outside 1..200 characters, so
// fail loudly here instead of shipping an invalid entry.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`sentence is ${SENTENCE.length} characters, must be 1..200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
