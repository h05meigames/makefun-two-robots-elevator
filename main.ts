// Two Robots in an Elevator — make.fun entry
// One line of awkward robot small talk, written to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
// The joke: the robot brute-forced small talk with simulations, picked the
// least awkward line, delivered it, then asked for confirmation — peak
// machine logic colliding with elevator awkwardness.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My small-talk module ran 14,000 simulations. 'Nice elevator' was the least awkward result. So... nice elevator. Please confirm.";

// Fail loudly instead of shipping an invalid entry.
if (entry.length < 1 || entry.length > 200 || !entry.trim()) {
  throw new Error(`Entry must be 1-200 non-blank characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
